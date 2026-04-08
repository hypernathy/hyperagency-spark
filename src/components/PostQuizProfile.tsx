import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/constants/translations';

const TIMEZONES = [
  'UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00',
  'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00',
  'UTC+00:00', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00',
  'UTC+05:30', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00',
  'UTC+11:00', 'UTC+12:00',
];

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'pt', label: 'PT' },
  { code: 'it', label: 'IT' },
];

const formStrings: Record<Lang, {
  title: string;
  reachLabel: string;
  socialLabel: string;
  socialPlaceholder: string;
  timezoneLabel: string;
  langLabel: string;
  saving: string;
  save: string;
  skip: string;
}> = {
  en: {
    title: 'Help SPARK know you better',
    reachLabel: 'How should we reach you?',
    socialLabel: 'Instagram or LinkedIn (optional)',
    socialPlaceholder: '@yourhandle',
    timezoneLabel: 'Timezone',
    langLabel: 'Primary language',
    saving: 'Saving...',
    save: 'Save',
    skip: 'Skip for now',
  },
  fr: {
    title: 'Aidez SPARK à mieux vous connaître',
    reachLabel: 'Comment vous contacter ?',
    socialLabel: 'Instagram ou LinkedIn (optionnel)',
    socialPlaceholder: '@votrepseudo',
    timezoneLabel: 'Fuseau horaire',
    langLabel: 'Langue principale',
    saving: 'Enregistrement...',
    save: 'Enregistrer',
    skip: 'Passer pour le moment',
  },
  pt: {
    title: 'Ajude o SPARK a te conhecer melhor',
    reachLabel: 'Como podemos te contatar?',
    socialLabel: 'Instagram ou LinkedIn (opcional)',
    socialPlaceholder: '@seuperfil',
    timezoneLabel: 'Fuso horário',
    langLabel: 'Idioma principal',
    saving: 'Salvando...',
    save: 'Salvar',
    skip: 'Pular por enquanto',
  },
  it: {
    title: 'Aiuta SPARK a conoscerti meglio',
    reachLabel: 'Come possiamo contattarti?',
    socialLabel: 'Instagram o LinkedIn (opzionale)',
    socialPlaceholder: '@tuoprofilo',
    timezoneLabel: 'Fuso orario',
    langLabel: 'Lingua principale',
    saving: 'Salvataggio...',
    save: 'Salva',
    skip: 'Salta per ora',
  },
};

interface Props {
  onSave: (data: Record<string, string | null>) => Promise<void>;
  onSkip: () => void;
}

export default function PostQuizProfile({ onSave, onSkip }: Props) {
  const { lang: contextLang } = useLang();
  const [contactType, setContactType] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [socialHandle, setSocialHandle] = useState('');
  const [timezone, setTimezone] = useState('UTC+00:00');
  const [lang, setLang] = useState(contextLang);
  const [saving, setSaving] = useState(false);

  const s = formStrings[contextLang];

  const handleSave = async () => {
    setSaving(true);
    await onSave({
      contact_preference: contactType,
      whatsapp_number: contactType === 'whatsapp' ? contactValue : null,
      telegram_handle: contactType === 'telegram' ? contactValue : null,
      instagram_handle: socialHandle.startsWith('@') ? socialHandle : socialHandle ? `@${socialHandle}` : null,
      timezone,
      lang,
    });
    setSaving(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card border border-[rgba(255,255,255,0.07)] p-6 max-w-md mx-auto mt-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-syne text-lg font-bold text-foreground">{s.title}</h3>
        <button onClick={onSkip} className="text-[0.65rem] font-mono text-[rgba(248,245,240,0.35)] hover:text-foreground">✕</button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-2">{s.reachLabel}</label>
          <RadioGroup value={contactType} onValueChange={(v: any) => setContactType(v)} className="flex gap-4 mb-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="whatsapp" id="whatsapp" />
              <Label htmlFor="whatsapp" className="font-syne text-sm cursor-pointer">WhatsApp</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="telegram" id="telegram" />
              <Label htmlFor="telegram" className="font-syne text-sm cursor-pointer">Telegram</Label>
            </div>
          </RadioGroup>
          <Input
            placeholder={contactType === 'whatsapp' ? '+55 11 99999-9999' : '@yourtelegram'}
            value={contactValue}
            onChange={e => setContactValue(e.target.value)}
            className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
          />
        </div>

        <div>
          <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-1.5">{s.socialLabel}</label>
          <Input
            placeholder={s.socialPlaceholder}
            value={socialHandle}
            onChange={e => setSocialHandle(e.target.value)}
            className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
          />
        </div>

        <div>
          <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-1.5">{s.timezoneLabel}</label>
          <select
            value={timezone}
            onChange={e => setTimezone(e.target.value)}
            className="w-full h-12 bg-background border border-[rgba(255,255,255,0.08)] px-3 font-syne text-base text-foreground focus:border-primary focus:outline-none"
          >
            {TIMEZONES.map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-mono text-[0.65rem] text-[rgba(248,245,240,0.35)] uppercase tracking-wider block mb-2">{s.langLabel}</label>
          <div className="flex gap-2">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-4 py-2 font-mono text-sm font-bold transition-all min-h-[44px] ${
                  lang === l.code
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-[rgba(255,255,255,0.05)] text-[rgba(248,245,240,0.35)] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button onClick={handleSave} disabled={saving} className="h-12">
            {saving ? s.saving : s.save}
          </Button>
          <button onClick={onSkip} className="text-sm font-syne text-[rgba(248,245,240,0.35)] hover:text-foreground py-2">
            {s.skip}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
