import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/constants/translations';

const authStrings: Record<Lang, {
  joinTitle: string;
  welcomeTitle: string;
  joinSub: string;
  welcomeSub: string;
  google: string;
  or: string;
  nickPlaceholder: string;
  nickHint: string;
  email: string;
  password: string;
  signIn: string;
  createAccount: string;
  noAccount: string;
  hasAccount: string;
  signUpLink: string;
  signInLink: string;
  googleFail: string;
}> = {
  en: {
    joinTitle: 'Join Connexa',
    welcomeTitle: 'Welcome Back',
    joinSub: 'Discover your Solopreneur Archetype',
    welcomeSub: 'Sign in to your dashboard',
    google: 'Continue with Google',
    or: 'or',
    nickPlaceholder: 'What should SPARK call you? (Nathy, Juli, Alex...)',
    nickHint: 'No last name needed. Ever.',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    createAccount: 'Create Account',
    noAccount: "Don't have an account? ",
    hasAccount: 'Already have an account? ',
    signUpLink: 'Sign Up',
    signInLink: 'Sign In',
    googleFail: 'Google login failed',
  },
  fr: {
    joinTitle: 'Rejoignez Connexa',
    welcomeTitle: 'Bon retour',
    joinSub: 'Découvrez votre Archétype de Solopreneur',
    welcomeSub: 'Connectez-vous à votre dashboard',
    google: 'Continuer avec Google',
    or: 'ou',
    nickPlaceholder: 'Comment SPARK doit vous appeler ? (Nathy, Juli, Alex...)',
    nickHint: 'Pas besoin de nom de famille. Jamais.',
    email: 'Email',
    password: 'Mot de passe',
    signIn: 'Se connecter',
    createAccount: 'Créer un compte',
    noAccount: "Pas encore de compte ? ",
    hasAccount: 'Déjà un compte ? ',
    signUpLink: "S'inscrire",
    signInLink: 'Se connecter',
    googleFail: 'Échec de la connexion Google',
  },
  pt: {
    joinTitle: 'Entre na Connexa',
    welcomeTitle: 'Bem-vindo de volta',
    joinSub: 'Descubra seu Arquétipo de Solopreneur',
    welcomeSub: 'Acesse seu dashboard',
    google: 'Continuar com Google',
    or: 'ou',
    nickPlaceholder: 'Como o SPARK deve te chamar? (Nathy, Juli, Alex...)',
    nickHint: 'Sem sobrenome. Nunca.',
    email: 'Email',
    password: 'Senha',
    signIn: 'Entrar',
    createAccount: 'Criar conta',
    noAccount: 'Não tem conta? ',
    hasAccount: 'Já tem conta? ',
    signUpLink: 'Cadastre-se',
    signInLink: 'Entrar',
    googleFail: 'Falha no login com Google',
  },
  it: {
    joinTitle: 'Unisciti a Connexa',
    welcomeTitle: 'Bentornato',
    joinSub: 'Scopri il tuo Archetipo da Solopreneur',
    welcomeSub: 'Accedi alla tua dashboard',
    google: 'Continua con Google',
    or: 'oppure',
    nickPlaceholder: 'Come deve chiamarti SPARK? (Nathy, Juli, Alex...)',
    nickHint: 'Niente cognome. Mai.',
    email: 'Email',
    password: 'Password',
    signIn: 'Accedi',
    createAccount: 'Crea account',
    noAccount: 'Non hai un account? ',
    hasAccount: 'Hai già un account? ',
    signUpLink: 'Registrati',
    signInLink: 'Accedi',
    googleFail: 'Accesso Google non riuscito',
  },
};

export default function Auth() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const s = authStrings[lang];
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('archetype_id')
          .eq('user_id', user.id)
          .single();
        navigate(profile?.archetype_id ? '/dashboard' : '/quiz');
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('profiles').update({ name: nickname }).eq('user_id', user.id);
      }
      navigate('/quiz');
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const result = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error(s.googleFail);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">
            {isLogin ? s.welcomeTitle : s.joinTitle}
          </h1>
          <p className="text-[rgba(248,245,240,0.65)] font-syne text-sm">
            {isLogin ? s.welcomeSub : s.joinSub}
          </p>
        </div>

        <div className="bg-card border border-[rgba(255,255,255,0.07)] p-6 space-y-5">
          <Button
            onClick={handleGoogleLogin}
            variant="ghost"
            className="w-full h-12 font-mono text-sm gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            {s.google}
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
            <span className="text-[rgba(248,245,240,0.35)] text-xs font-mono uppercase">{s.or}</span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.06)]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <Input
                  placeholder={s.nickPlaceholder}
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  required={!isLogin}
                  className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
                />
                <p className="text-[rgba(248,245,240,0.35)] font-mono text-[10px] mt-1.5 ml-1">
                  {s.nickHint}
                </p>
              </div>
            )}
            <Input
              type="email"
              placeholder={s.email}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
            />
            <Input
              type="password"
              placeholder={s.password}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              className="h-12 bg-background border-[rgba(255,255,255,0.08)] font-syne"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12"
            >
              {loading ? '...' : isLogin ? s.signIn : s.createAccount}
            </Button>
          </form>

          <p className="text-center text-sm text-[rgba(248,245,240,0.65)] font-syne">
            {isLogin ? s.noAccount : s.hasAccount}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? s.signUpLink : s.signInLink}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
