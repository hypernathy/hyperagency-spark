import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLang } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function DashboardLearning({ userId, userEmail }: { userId: string; userEmail: string }) {
  const [email, setEmail] = useState(userEmail);
  const [joined, setJoined] = useState(false);
  const [saving, setSaving] = useState(false);
  const { t } = useLang();
  const c = t.dashboard.courses;
  const v = t.dashboard.videos;

  const joinWaitlist = async () => {
    setSaving(true);
    const { error } = await supabase.from('courses_waitlist').insert({ email, user_id: userId });
    if (!error) {
      setJoined(true);
      toast.success('🎉');
    } else {
      toast.error('Error');
    }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-card border border-[rgba(255,255,255,0.07)] border-l-[3px] border-l-primary">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(248,245,240,0.35)] mb-2">{c.label}</p>
        <h3 className="font-syne text-lg font-bold text-foreground mb-2">{c.title}</h3>
        <p className="font-syne text-sm text-[rgba(248,245,240,0.65)] mb-4">{c.desc}</p>
        {joined ? (
          <p className="font-syne text-sm text-primary">{c.joined}</p>
        ) : (
          <div className="flex gap-2">
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne text-sm flex-1" />
            <Button onClick={joinWaitlist} disabled={saving} className="h-12 font-mono text-sm px-5">
              {saving ? '...' : c.join}
            </Button>
          </div>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(248,245,240,0.35)] mb-2">{v.label}</p>
        <h3 className="font-syne text-base font-bold text-foreground mb-3">{v.title}</h3>
        <div className="aspect-video bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[rgba(255,255,255,0.07)]">
          <div className="text-center">
            <div className="text-4xl mb-2">▶️</div>
            <p className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider">{v.soon}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
