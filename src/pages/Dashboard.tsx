import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { useMilestones } from '@/hooks/useMilestones';
import { archetypes } from '@/constants/archetypes';
import { useLang } from '@/contexts/LanguageContext';
import { Lang } from '@/constants/translations';
import { motion, AnimatePresence } from 'framer-motion';
import OnboardingTour from '@/components/OnboardingTour';
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
  const [showTour, setShowTour] = useState(false);
  const { t, setLang } = useLang();
  const d = t.dashboard;

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
      // Show onboarding tour for first-time users
      const tourKey = `onboarding_done_${user.id}`;
      if (!localStorage.getItem(tourKey)) {
        setShowTour(true);
      }
    }
  }, [profile?.archetype_id, user?.id]);

  const dismissTour = () => {
    setShowTour(false);
    if (user) localStorage.setItem(`onboarding_done_${user.id}`, '1');
  };

  if (authLoading || profileLoading || !profile) {
    return (
      <div className="min-h-screen bg-background p-6 space-y-6 max-w-3xl mx-auto pt-16">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-60 w-full" />
      </div>
    );
  }

  const archetype = archetypes.find(a => a.id === profile.archetype_id);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-[rgba(255,255,255,0.06)] bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-display text-lg font-bold text-foreground">
            {d.welcomeBack} {profile.name || 'friend'}
          </h1>
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button onClick={() => navigate('/admin')} className="text-[0.65rem] font-mono uppercase tracking-wider text-primary hover:underline min-h-[48px] px-3">
                {d.admin}
              </button>
            )}
            <button onClick={() => navigate('/profile')} className="text-[0.65rem] font-mono uppercase tracking-wider text-[rgba(248,245,240,0.35)] hover:text-foreground min-h-[48px] px-3">
              {profile.avatar_emoji || '👤'} {d.profile}
            </button>
            <button onClick={async () => { await signOut(); navigate('/'); }} className="text-[0.65rem] font-mono uppercase tracking-wider text-[rgba(248,245,240,0.35)] hover:text-foreground min-h-[48px] px-3">
              {d.signOut}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-[rgba(255,255,255,0.05)] mb-6">
            <TabsTrigger value="home" className="font-mono text-[0.65rem] uppercase tracking-wider">{d.home}</TabsTrigger>
            <TabsTrigger value="learning" className="font-mono text-[0.65rem] uppercase tracking-wider">{d.learning}</TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 pb-24">
            {archetype && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-card border-l-[3px]"
                style={{ borderLeftColor: archetype.color, borderTop: '1px solid rgba(255,255,255,0.07)', borderRight: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl shrink-0">
                    {archetype.emoji}
                  </div>
                  <div>
                    <h2 className="font-syne text-xl font-bold" style={{ color: archetype.color }}>{archetype.name}</h2>
                    <p className="text-[rgba(248,245,240,0.35)] font-mono text-[0.65rem] uppercase tracking-wider">"{archetype.tagline}"</p>
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
              className="p-6 text-center bg-card border border-[rgba(255,255,255,0.07)] border-l-[3px] border-l-primary"
            >
              <h3 className="font-syne text-xl font-bold text-foreground mb-2">{d.upgrade.title}</h3>
              <p className="text-[rgba(248,245,240,0.65)] font-syne text-sm mb-4">{d.upgrade.desc}</p>
              <p className="text-foreground font-display text-2xl font-bold mb-4">€19/mo</p>
              <button className="bg-primary text-primary-foreground px-8 py-3 font-mono uppercase tracking-wider text-sm hover:bg-primary/90 transition min-h-[48px]">
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
