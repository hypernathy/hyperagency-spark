import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLang } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function DashboardChat({ userId }: { userId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { t } = useLang();
  const s = t.dashboard.spark;

  useEffect(() => {
    supabase
      .from('conversations')
      .select('role, content')
      .eq('user_id', userId)
      .order('created_at', { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setMessages(data as Message[]);
        } else {
          setMessages([{ role: 'assistant', content: "Hey! 👋 I'm SPARK. What's on your mind today?" }]);
        }
        setHistoryLoaded(true);
      });
  }, [userId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    if (inputRef.current) inputRef.current.style.height = 'auto';

    await supabase.from('conversations').insert({ user_id: userId, role: 'user', content: text });

    try {
      const apiMessages = newMessages
        .filter(m => !(m === newMessages[0] && m.role === 'assistant'))
        .map(m => ({ role: m.role, content: m.content }));

      const { data, error } = await supabase.functions.invoke('spark-chat', { body: { messages: apiMessages } });
      if (error) throw error;
      const reply = data?.content?.[0]?.text || 'Something went wrong.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      await supabase.from('conversations').insert({ user_id: userId, role: 'assistant', content: reply });
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Try again.' }]);
    }
    setLoading(false);
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  };

  return (
    <div className="bg-card border border-[rgba(255,255,255,0.07)] overflow-hidden">
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
          <span className="font-syne font-extrabold text-xs text-primary-foreground">S</span>
        </div>
        <div>
          <p className="font-syne font-bold text-sm text-primary-foreground">SPARK</p>
          <p className="font-mono text-[10px] text-primary-foreground/60 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 pulse-dot" />
            {s.online}
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="h-[350px] overflow-y-auto px-4 py-4 space-y-3">
        {!historyLoaded ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-start">
                <div className="max-w-[85%] bg-card px-4 py-3" style={{ borderRadius: '0 12px 12px 12px' }}>
                  <div className="h-4 w-48 bg-[rgba(255,255,255,0.06)] animate-pulse mb-2" />
                  <div className="h-4 w-32 bg-[rgba(255,255,255,0.06)] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-[18px] py-[14px] text-base font-syne leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-[#111114] text-[rgba(248,245,240,0.85)]'
                  }`}
                  style={{
                    borderRadius: msg.role === 'user' ? '12px 12px 0 12px' : '0 12px 12px 12px'
                  }}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#111114] px-[18px] py-[14px] flex gap-1.5" style={{ borderRadius: '0 12px 12px 12px' }}>
              <span className="w-2 h-2 rounded-full bg-primary typing-dot" />
              <span className="w-2 h-2 rounded-full bg-primary typing-dot" />
              <span className="w-2 h-2 rounded-full bg-primary typing-dot" />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] p-3">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKey}
            placeholder={s.placeholder}
            rows={1}
            className="flex-1 bg-background border border-[rgba(255,255,255,0.08)] px-4 py-3 font-syne text-base text-foreground placeholder:text-[rgba(248,245,240,0.3)] focus:outline-none focus:border-primary resize-none min-h-[48px]"
            style={{ maxHeight: '120px' }}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="bg-primary text-primary-foreground min-w-[48px] min-h-[48px] flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
