import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { useMilestones } from '@/hooks/useMilestones';
import { archetypes } from '@/constants/archetypes';
import { useLang } from '@/contexts/LanguageContext';
import { Lang } from '@/constants/translations';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import DashboardChat from '@/components/dashboard/DashboardChat';
import DashboardRoadmap from '@/components/dashboard/DashboardRoadmap';
import DashboardSettings from '@/components/dashboard/DashboardSettings';
import DashboardProducts from '@/components/dashboard/DashboardProducts';
import DashboardCommunity from '@/components/dashboard/DashboardCommunity';
import DashboardJourney from '@/components/dashboard/DashboardJourney';
import DashboardLearning from '@/components/dashboard/DashboardLearning';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useProfile(user);
  const { milestones, checkAutoMilestones } = useMilestones(user?.id);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const { t, setLang } = useLang();
  const d = t.dashboard;

  // Sync language from profile
  useEffect(() => {
    if (profile?.lang) setLang(profile.lang as Lang);
  }, [profile?.lang]);

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading]);

  useEffect(() => {
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

  useEffect(() => {
    if (profile && user) {
      checkAutoMilestones(profile);
    }
  }, [profile?.archetype_id, user?.id]);

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
      <div className="border-b border-foreground/[0.07] bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-playfair text-lg font-bold text-foreground">
            {d.welcomeBack} {profile.name || 'friend'}
          </h1>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button onClick={() => navigate('/admin')} className="text-xs font-mono text-primary hover:underline min-h-[48px] px-3">
                {d.admin}
              </button>
            )}
            <button onClick={() => navigate('/profile')} className="text-xs font-mono text-muted-foreground hover:text-foreground min-h-[48px] px-3">
              {profile.avatar_emoji || '👤'} {d.profile}
            </button>
            <button onClick={async () => { await signOut(); navigate('/'); }} className="text-xs font-mono text-muted-foreground hover:text-foreground min-h-[48px] px-3">
              {d.signOut}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-foreground/5 mb-6">
            <TabsTrigger value="home" className="font-mono text-xs">{d.home}</TabsTrigger>
            <TabsTrigger value="learning" className="font-mono text-xs">{d.learning}</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 pb-24">
            {archetype && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-6 border"
                style={{ borderColor: archetype.color + '30', background: `linear-gradient(135deg, ${archetype.color}10, ${archetype.color}05)` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0" style={{ backgroundColor: archetype.color + '20' }}>
                    {archetype.emoji}
                  </div>
                  <div>
                    <h2 className="font-syne text-xl font-bold" style={{ color: archetype.color }}>{archetype.name}</h2>
                    <p className="text-muted-foreground font-mono text-sm">"{archetype.tagline}"</p>
                  </div>
                </div>
              </motion.div>
            )}

            <DashboardJourney milestones={milestones} />
            {archetype && user && <DashboardRoadmap archetype={archetype} userId={user.id} />}
            {user && <DashboardChat userId={user.id} />}
            {archetype && <DashboardProducts archetype={archetype} />}
            <DashboardCommunity />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl p-6 text-center"
              style={{ background: 'linear-gradient(135deg, #5A2C8C, #9B7FA6)' }}
            >
              <h3 className="font-syne text-xl font-bold text-white mb-2">{d.upgrade.title}</h3>
              <p className="text-white/70 font-mono text-sm mb-4">{d.upgrade.desc}</p>
              <p className="text-white font-syne text-2xl font-bold mb-4">€19/mo</p>
              <button className="bg-white text-[#5A2C8C] px-8 py-3 rounded-lg font-mono font-bold hover:bg-white/90 transition min-h-[48px]">
                {d.upgrade.cta}
              </button>
            </motion.div>

            <DashboardSettings profile={profile} onUpdate={updateProfile} />
          </TabsContent>

          <TabsContent value="learning" className="pb-24">
            {user && <DashboardLearning userId={user.id} userEmail={profile.email} />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
