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
        className="rounded-xl p-6 border-2 border-primary/30 bg-primary/5">
        <p className="font-mono text-xs text-primary/60 mb-2">{c.label}</p>
        <h3 className="font-syne text-lg font-bold text-foreground mb-2">{c.title}</h3>
        <p className="font-mono text-sm text-muted-foreground mb-4">{c.desc}</p>
        {joined ? (
          <p className="font-mono text-sm text-primary">{c.joined}</p>
        ) : (
          <div className="flex gap-2">
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
              className="h-11 bg-background border-primary/20 font-mono text-sm flex-1" />
            <Button onClick={joinWaitlist} disabled={saving} className="h-11 font-mono text-sm px-5">
              {saving ? '...' : c.join}
            </Button>
          </div>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-card border border-foreground/[0.07] rounded-xl p-6">
        <p className="font-mono text-xs text-muted-foreground/60 mb-2">{v.label}</p>
        <h3 className="font-syne text-base font-bold text-foreground mb-3">{v.title}</h3>
        <div className="aspect-video bg-foreground/5 rounded-lg flex items-center justify-center border border-foreground/[0.07]">
          <div className="text-center">
            <div className="text-4xl mb-2">▶️</div>
            <p className="font-mono text-xs text-muted-foreground">{v.soon}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
