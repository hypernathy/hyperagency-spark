import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Profile } from '@/hooks/useProfile';
import { toast } from 'sonner';

interface Props {
  profile: Profile;
  onUpdate: (updates: Partial<Profile>) => Promise<any>;
}

export default function DashboardSettings({ profile, onUpdate }: Props) {
  const [name, setName] = useState(profile.name || '');
  const [lang, setLang] = useState(profile.lang || 'en');
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    await onUpdate({ name, lang });
    toast.success('Settings saved!');
    setSaving(false);
  };

  return (
    <div className="bg-card border border-foreground/[0.07] rounded-xl p-6">
      <h3 className="font-syne text-lg font-bold text-foreground mb-4">Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="font-mono text-xs text-muted-foreground block mb-1.5">Name</label>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            className="h-12 bg-background border-foreground/10 font-mono"
          />
        </div>
        <div>
          <label className="font-mono text-xs text-muted-foreground block mb-1.5">Language</label>
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="w-full h-12 bg-background border border-foreground/10 rounded-md px-3 font-mono text-sm text-foreground"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="pt">Português (BR)</option>
            <option value="it">Italiano</option>
          </select>
        </div>
        <Button onClick={save} disabled={saving} className="h-12 font-mono">
          {saving ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>
    </div>
  );
}
