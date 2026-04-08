import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Milestone {
  key: string;
  label: string;
  emoji: string;
  completed: boolean;
  completed_at: string | null;
}

const MILESTONE_DEFS = [
  { key: 'archetype_discovered', label: 'Archetype discovered', emoji: '🧬' },
  { key: 'first_conversation', label: 'First conversation with SPARK', emoji: '💬' },
  { key: 'profile_completed', label: 'Profile completed', emoji: '✨' },
  { key: '10_conversations', label: '10 SPARK conversations', emoji: '🔥' },
  { key: 'first_purchase', label: 'First product purchased', emoji: '🛒' },
  { key: 'first_idea_saved', label: 'First automation idea saved', emoji: '💡' },
  { key: '30_days', label: '30 days with SPARK', emoji: '🏆' },
];

export function useMilestones(userId: string | undefined) {
  const [milestones, setMilestones] = useState<Milestone[]>(
    MILESTONE_DEFS.map(d => ({ ...d, completed: false, completed_at: null }))
  );

  useEffect(() => {
    if (!userId) return;

    const load = async () => {
      const { data } = await supabase
        .from('milestones')
        .select('milestone_key, completed, completed_at')
        .eq('user_id', userId);

      if (data) {
        setMilestones(
          MILESTONE_DEFS.map(def => {
            const row = data.find((d: any) => d.milestone_key === def.key);
            return {
              ...def,
              completed: row?.completed || false,
              completed_at: row?.completed_at || null,
            };
          })
        );
      }
    };

    load();
  }, [userId]);

  const completeMilestone = useCallback(
    async (key: string) => {
      if (!userId) return;
      const now = new Date().toISOString();

      // Upsert
      await supabase.from('milestones').upsert(
        { user_id: userId, milestone_key: key, completed: true, completed_at: now },
        { onConflict: 'user_id,milestone_key' }
      );

      setMilestones(prev =>
        prev.map(m =>
          m.key === key ? { ...m, completed: true, completed_at: now } : m
        )
      );
    },
    [userId]
  );

  // Auto-check milestones
  const checkAutoMilestones = useCallback(
    async (profile: any) => {
      if (!userId || !profile) return;

      // Archetype discovered
      if (profile.archetype_id) {
        const m = milestones.find(m => m.key === 'archetype_discovered');
        if (m && !m.completed) await completeMilestone('archetype_discovered');
      }

      // Profile completed (5+ fields filled)
      const profileFields = [
        profile.name, profile.whatsapp_number || profile.telegram_handle,
        profile.instagram_handle || profile.linkedin_handle,
        profile.timezone, profile.building_description,
      ];
      const filled = profileFields.filter(Boolean).length;
      if (filled >= 5) {
        const m = milestones.find(m => m.key === 'profile_completed');
        if (m && !m.completed) await completeMilestone('profile_completed');
      }

      // First conversation
      const { count } = await supabase
        .from('conversations')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('role', 'user');
      if (count && count >= 1) {
        const m = milestones.find(m => m.key === 'first_conversation');
        if (m && !m.completed) await completeMilestone('first_conversation');
      }
      if (count && count >= 10) {
        const m = milestones.find(m => m.key === '10_conversations');
        if (m && !m.completed) await completeMilestone('10_conversations');
      }

      // 30 days
      if (profile.created_at) {
        const diff = Date.now() - new Date(profile.created_at).getTime();
        if (diff >= 30 * 24 * 60 * 60 * 1000) {
          const m = milestones.find(m => m.key === '30_days');
          if (m && !m.completed) await completeMilestone('30_days');
        }
      }
    },
    [userId, milestones, completeMilestone]
  );

  return { milestones, completeMilestone, checkAutoMilestones };
}
