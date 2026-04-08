import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { archetypes } from '@/constants/archetypes';
import { useLang } from '@/contexts/LanguageContext';
import { Lang } from '@/constants/translations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const EMOJI_OPTIONS = ['😎', '🚀', '🌊', '💎', '⚡', '🦂', '🔥', '🌟', '🎯', '🧠', '💜', '🌈', '🐱', '🦊', '🎵', '🌿'];

const TIMEZONES = [
  'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00',
  'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00',
  'UTC+00:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00',
  'UTC+05:30', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00',
  'UTC+11:00', 'UTC+12:00',
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, loading: profileLoading, autoSave } = useProfile(user);
  const [deleting, setDeleting] = useState(false);
  const { t, setLang } = useLang();
  const p = t.profilePage;

  useEffect(() => {
    if (profile?.lang) setLang(profile.lang as Lang);
  }, [profile?.lang]);

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading]);

  if (authLoading || profileLoading || !profile) {
    return (
      <div className="min-h-screen bg-background p-6 max-w-lg mx-auto pt-16 space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-60 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  const archetype = archetypes.find(a => a.id === profile.archetype_id);

  const handleDelete = async () => {
    if (!confirm(p.deleteConfirm)) return;
    setDeleting(true);
    await signOut();
    toast.success('Account deleted');
    navigate('/');
  };

  const handleLangChange = (newLang: string) => {
    autoSave({ lang: newLang });
    setLang(newLang as Lang);
  };

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-1.5">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-[rgba(255,255,255,0.06)] bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-display text-lg font-bold text-foreground">{p.title}</h1>
          <button onClick={() => navigate('/dashboard')} className="text-[0.65rem] font-mono uppercase tracking-wider text-primary hover:underline min-h-[48px] px-3">
            {p.dashboard}
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
          <Field label={p.avatarEmoji}>
            <div className="flex flex-wrap gap-2">
              {EMOJI_OPTIONS.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => autoSave({ avatar_emoji: emoji })}
                  className={`w-11 h-11 text-xl flex items-center justify-center transition-all ${
                    profile.avatar_emoji === emoji
                      ? 'bg-primary/20 ring-2 ring-primary'
                      : 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </Field>
        </motion.div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6 space-y-4">
          <Field label={p.nickname}>
            <Input
              defaultValue={profile.name || ''}
              onBlur={e => autoSave({ name: e.target.value })}
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
            />
          </Field>
          <Field label={p.email}>
            <Input
              type="email"
              defaultValue={profile.email}
              onBlur={e => autoSave({ email: e.target.value })}
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
            />
          </Field>
        </div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6 space-y-4">
          <Field label={p.contactPreference}>
            <RadioGroup
              defaultValue={profile.contact_preference || 'whatsapp'}
              onValueChange={(v: any) => autoSave({ contact_preference: v })}
              className="flex gap-4 mb-2"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="whatsapp" id="pref-wa" />
                <Label htmlFor="pref-wa" className="font-syne text-sm cursor-pointer">WhatsApp</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="telegram" id="pref-tg" />
                <Label htmlFor="pref-tg" className="font-syne text-sm cursor-pointer">Telegram</Label>
              </div>
            </RadioGroup>
          </Field>
          {(profile.contact_preference || 'whatsapp') === 'whatsapp' ? (
            <Field label={p.whatsappNumber}>
              <Input
                defaultValue={profile.whatsapp_number || ''}
                placeholder="+55 11 99999-9999"
                onBlur={e => autoSave({ whatsapp_number: e.target.value })}
                className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
              />
            </Field>
          ) : (
            <Field label={p.telegramHandle}>
              <Input
                defaultValue={profile.telegram_handle || ''}
                placeholder="@yourtelegram"
                onBlur={e => autoSave({ telegram_handle: e.target.value })}
                className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
              />
            </Field>
          )}
        </div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6 space-y-4">
          <Field label={p.instagram}>
            <Input
              defaultValue={profile.instagram_handle || ''}
              placeholder="@yourhandle"
              onBlur={e => autoSave({ instagram_handle: e.target.value })}
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
            />
          </Field>
          <Field label={p.linkedin}>
            <Input
              defaultValue={profile.linkedin_handle || ''}
              placeholder="@yourhandle"
              onBlur={e => autoSave({ linkedin_handle: e.target.value })}
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
            />
          </Field>
        </div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
          <Field label={p.whatBuilding}>
            <Textarea
              defaultValue={profile.building_description || ''}
              placeholder={p.buildingPlaceholder}
              rows={3}
              maxLength={500}
              onBlur={e => autoSave({ building_description: e.target.value })}
              className="bg-background border-[rgba(255,255,255,0.08)] font-syne text-base resize-none"
            />
          </Field>
        </div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
          <Field label={p.langPreference}>
            <div className="flex gap-2">
              {['en', 'fr', 'pt', 'it'].map(l => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`px-4 py-2 font-mono text-sm font-bold transition-all min-h-[44px] ${
                    profile.lang === l
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-[rgba(255,255,255,0.05)] text-[rgba(248,245,240,0.35)] hover:bg-[rgba(255,255,255,0.1)]'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </Field>
        </div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6">
          <Field label={p.timezone}>
            <select
              defaultValue={profile.timezone || 'UTC+00:00'}
              onChange={e => autoSave({ timezone: e.target.value })}
              className="w-full h-12 bg-background border border-[rgba(255,255,255,0.08)] px-3 font-syne text-base text-foreground focus:border-primary focus:outline-none"
            >
              {TIMEZONES.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </Field>
        </div>

        {archetype && (
          <div
            className="p-6 bg-card border border-[rgba(255,255,255,0.07)] border-l-[3px]"
            style={{ borderLeftColor: archetype.color }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center text-2xl">
                {archetype.emoji}
              </div>
              <div>
                <h3 className="font-syne text-lg font-bold" style={{ color: archetype.color }}>{archetype.name}</h3>
                <p className="text-[rgba(248,245,240,0.35)] font-mono text-[0.65rem] uppercase tracking-wider">"{archetype.tagline}"</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/quiz')}
              className="text-[0.65rem] font-mono uppercase tracking-wider text-[rgba(248,245,240,0.35)] hover:text-foreground"
            >
              {p.retakeQuiz}
            </button>
          </div>
        )}

        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)]">
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-[0.65rem] font-mono uppercase tracking-wider text-destructive/70 hover:text-destructive transition"
          >
            {deleting ? p.deleting : p.deleteAccount}
          </button>
        </div>
      </div>
    </div>
  );
}
