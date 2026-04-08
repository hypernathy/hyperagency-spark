import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Profile } from '@/hooks/useProfile';
import { useLang } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

interface Props {
  profile: Profile;
  onUpdate: (updates: Partial<Profile>) => Promise<any>;
  onReplayTour?: () => void;
}

export default function DashboardSettings({ profile, onUpdate, onReplayTour }: Props) {
  const [name, setName] = useState(profile.name || '');
  const [langVal, setLangVal] = useState(profile.lang || 'en');
  const [saving, setSaving] = useState(false);
  const { t } = useLang();
  const s = t.dashboard.settings;

  const save = async () => {
    setSaving(true);
    await onUpdate({ name, lang: langVal });
    toast.success('✓');
    setSaving(false);
  };

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6 space-y-4">
      <h3 className="font-syne text-lg font-bold text-foreground">{s.title}</h3>
      <div>
        <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-1.5">{s.name}</label>
        <Input value={name} onChange={e => setName(e.target.value)} className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne" />
      </div>
      <div>
        <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-1.5">{s.language}</label>
        <select value={langVal} onChange={e => setLangVal(e.target.value)}
          className="w-full h-12 bg-background border border-[rgba(255,255,255,0.08)] px-3 font-syne text-base text-foreground focus:border-primary focus:outline-none">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="pt">Português</option>
          <option value="it">Italiano</option>
        </select>
      </div>
      <Button onClick={save} disabled={saving} className="w-full">
        {saving ? s.saving : s.save}
      </Button>
    </div>
  );
}
