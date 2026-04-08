import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { archetypes } from '@/constants/archetypes';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import DashboardChat from '@/components/dashboard/DashboardChat';
import DashboardRoadmap from '@/components/dashboard/DashboardRoadmap';
import DashboardSettings from '@/components/dashboard/DashboardSettings';
import DashboardProducts from '@/components/dashboard/DashboardProducts';
import DashboardCommunity from '@/components/dashboard/DashboardCommunity';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useProfile(user);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading]);

  useEffect(() => {
    if (!user) return;
    // Check if quiz is done
    if (!profileLoading && profile && !profile.archetype_id) {
      navigate('/quiz');
    }
  }, [profile, profileLoading]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .then(({ data }) => {
        if (data && data.length > 0) setIsAdmin(true);
      });
  }, [user]);

  if (authLoading || profileLoading || !profile) {
    return (
      <div className="min-h-screen bg-background p-6 space-y-6 max-w-3xl mx-auto pt-16">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-60 w-full rounded-xl" />
      </div>
    );
  }

  const archetype = archetypes.find(a => a.id === profile.archetype_id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-foreground/[0.07] bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-playfair text-lg font-bold text-foreground">
            Welcome back, {profile.name || 'friend'}
          </h1>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="text-xs font-mono text-primary hover:underline min-h-[48px] px-3"
              >
                Admin
              </button>
            )}
            <button
              onClick={async () => { await signOut(); navigate('/'); }}
              className="text-xs font-mono text-muted-foreground hover:text-foreground min-h-[48px] px-3"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 pb-24">
        {/* Archetype Hero */}
        {archetype && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-6 border"
            style={{
              borderColor: archetype.color + '30',
              background: `linear-gradient(135deg, ${archetype.color}10, ${archetype.color}05)`,
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0"
                style={{ backgroundColor: archetype.color + '20' }}
              >
                {archetype.emoji}
              </div>
              <div>
                <h2 className="font-syne text-xl font-bold" style={{ color: archetype.color }}>
                  {archetype.name}
                </h2>
                <p className="text-muted-foreground font-mono text-sm">"{archetype.tagline}"</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Roadmap */}
        {archetype && user && (
          <DashboardRoadmap archetype={archetype} userId={user.id} />
        )}

        {/* SPARK Chat */}
        {user && <DashboardChat userId={user.id} />}

        {/* Products */}
        {archetype && <DashboardProducts archetype={archetype} />}

        {/* Community */}
        <DashboardCommunity />

        {/* Upgrade CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl p-6 text-center"
          style={{ background: 'linear-gradient(135deg, #5A2C8C, #9B7FA6)' }}
        >
          <h3 className="font-syne text-xl font-bold text-white mb-2">
            Upgrade to HyperCompanion™
          </h3>
          <p className="text-white/70 font-mono text-sm mb-4">
            Unlimited SPARK conversations, personalized AI coaching, priority support
          </p>
          <p className="text-white font-syne text-2xl font-bold mb-4">€19/mo</p>
          <button className="bg-white text-[#5A2C8C] px-8 py-3 rounded-lg font-mono font-bold hover:bg-white/90 transition min-h-[48px]">
            Coming Soon
          </button>
        </motion.div>

        {/* Settings */}
        <DashboardSettings profile={profile} onUpdate={updateProfile} />
      </div>
    </div>
  );
}
