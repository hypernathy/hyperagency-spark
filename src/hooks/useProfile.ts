import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';
import { toast } from 'sonner';

export interface Profile {
  id: string;
  user_id: string;
  email: string;
  name: string | null;
  archetype_id: number | null;
  archetype_name: string | null;
  lang: string | null;
  stripe_customer_id: string | null;
  contact_preference: string | null;
  whatsapp_number: string | null;
  telegram_handle: string | null;
  instagram_handle: string | null;
  linkedin_handle: string | null;
  timezone: string | null;
  building_description: string | null;
  avatar_emoji: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export function useProfile(user: User | null) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      setProfile(data as Profile | null);
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return;
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', user.id)
      .select()
      .single();
    if (!error && data) setProfile(data as Profile);
    return { data, error };
  };

  // Auto-save with debounce + "Saved ✓" toast
  const autoSave = useCallback(
    (updates: Partial<Profile>) => {
      if (!user) return;
      // Optimistic local update
      setProfile(prev => prev ? { ...prev, ...updates } : prev);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        const { error } = await supabase
          .from('profiles')
          .update(updates)
          .eq('user_id', user.id);
        if (!error) {
          toast.success('Saved ✓', { duration: 1500 });
        }
      }, 800);
    },
    [user]
  );

  return { profile, loading, updateProfile, autoSave, setProfile };
}
