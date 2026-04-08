import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { archetypes } from '@/constants/archetypes';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface UserRow {
  user_id: string;
  name: string | null;
  email: string;
  archetype_name: string | null;
  archetype_id: number | null;
  created_at: string;
  updated_at: string;
}

export default function Admin() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [totalConvos, setTotalConvos] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [sortBy, setSortBy] = useState<'created_at' | 'name'>('created_at');

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .then(({ data }) => {
        const admin = !!(data && data.length > 0);
        setIsAdmin(admin);
        if (!admin) navigate('/dashboard');
      });
  }, [user]);

  useEffect(() => {
    if (isAdmin !== true) return;

    supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setUsers(data as UserRow[]);
      });

    supabase
      .from('conversations')
      .select('id', { count: 'exact', head: true })
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
      .then(({ count }) => setTotalConvos(count || 0));

    supabase
      .from('roadmap_progress')
      .select('id', { count: 'exact', head: true })
      .eq('completed', true)
      .then(({ count }) => setCompletedSteps(count || 0));
  }, [isAdmin]);

  if (authLoading || isAdmin === null) {
    return (
      <div className="min-h-screen bg-background p-6 max-w-5xl mx-auto pt-16 space-y-6">
        <Skeleton className="h-10 w-48" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-24 rounded-xl" />)}
        </div>
      </div>
    );
  }

  const newThisWeek = users.filter(
    u => new Date(u.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;

  const archetypeCounts = archetypes.map(a => ({
    name: a.emoji + ' ' + a.name.split(' ').slice(-1)[0],
    count: users.filter(u => u.archetype_id === a.id).length,
    color: a.color,
  }));

  const topArchetype = archetypeCounts.sort((a, b) => b.count - a.count)[0];

  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const exportCSV = () => {
    const header = 'Name,Email,Archetype,Joined\n';
    const rows = users.map(u =>
      `"${u.name || ''}","${u.email}","${u.archetype_name || ''}","${new Date(u.created_at).toLocaleDateString()}"`
    ).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hyperagency-users.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-foreground/[0.07] bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-playfair text-lg font-bold text-foreground">Admin Dashboard</h1>
          <div className="flex gap-2">
            <button onClick={() => navigate('/dashboard')} className="text-xs font-mono text-primary hover:underline min-h-[48px] px-3">
              My Dashboard
            </button>
            <button onClick={async () => { await signOut(); navigate('/'); }} className="text-xs font-mono text-muted-foreground hover:text-foreground min-h-[48px] px-3">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Users', value: users.length, color: '#00C4B4' },
            { label: 'New This Week', value: newThisWeek, color: '#E9C824' },
            { label: 'Top Archetype', value: topArchetype?.name || '-', color: topArchetype?.color || '#fff' },
            { label: 'Steps Completed', value: completedSteps, color: '#9B7FA6' },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-foreground/[0.07] rounded-xl p-4">
              <p className="font-mono text-xs text-muted-foreground mb-1">{s.label}</p>
              <p className="font-syne text-xl font-bold" style={{ color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-card border border-foreground/[0.07] rounded-xl p-6">
          <h3 className="font-syne font-bold text-foreground mb-4">Archetype Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={archetypeCounts}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#888' }} />
                <YAxis tick={{ fontSize: 11, fill: '#888' }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 8 }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {archetypeCounts.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SPARK Activity */}
        <div className="bg-card border border-foreground/[0.07] rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs text-muted-foreground">SPARK Conversations This Week</p>
            <p className="font-syne text-2xl font-bold text-primary">{totalConvos}</p>
          </div>
          <span className="text-3xl">💬</span>
        </div>

        {/* Users Table */}
        <div className="bg-card border border-foreground/[0.07] rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-foreground/[0.07] flex items-center justify-between">
            <h3 className="font-syne font-bold text-foreground">Users</h3>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-background border border-foreground/10 rounded-md px-2 py-1 text-xs font-mono text-foreground"
              >
                <option value="created_at">Newest</option>
                <option value="name">Name</option>
              </select>
              <button
                onClick={exportCSV}
                className="bg-primary text-primary-foreground px-4 py-1 rounded-md text-xs font-mono font-bold hover:bg-primary/90 min-h-[36px]"
              >
                Export CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/[0.07]">
                  <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground font-normal">Name</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground font-normal">Email</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground font-normal">Archetype</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground font-normal">Joined</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground font-normal">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.map(u => (
                  <tr key={u.user_id} className="border-b border-foreground/[0.05] hover:bg-foreground/[0.02]">
                    <td className="px-4 py-3 font-mono text-foreground">{u.name || '—'}</td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">{u.email}</td>
                    <td className="px-4 py-3 font-mono">
                      {u.archetype_id ? (
                        <span style={{ color: archetypes.find(a => a.id === u.archetype_id)?.color }}>
                          {archetypes.find(a => a.id === u.archetype_id)?.emoji} {u.archetype_name}
                        </span>
                      ) : '—'}
                    </td>
                    <td className="px-4 py-3 font-mono text-muted-foreground text-xs">
                      {new Date(u.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 font-mono text-muted-foreground text-xs">
                      {new Date(u.updated_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
