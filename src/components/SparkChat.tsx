import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const msgVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' as const } },
};

export default function SparkChat({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const { lang, t } = useLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const prevLangRef = useRef(lang);

  // Reset greeting when language changes
  useEffect(() => {
    if (prevLangRef.current !== lang) {
      setMessages([{ role: 'assistant', content: t.chat.greeting }]);
      prevLangRef.current = lang;
    }
  }, [lang, t.chat.greeting]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.chat.greeting }]);
      setInitialLoad(false);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    // Reset textarea height
    if (inputRef.current) inputRef.current.style.height = 'auto';

    try {
      const apiMessages = newMessages
        .filter(m => !(m === newMessages[0] && m.role === 'assistant'))
        .map(m => ({ role: m.role, content: m.content }));

      if (apiMessages.length === 0 || apiMessages[0].role !== 'user') {
        apiMessages.unshift({ role: 'user', content: text });
      }

      const { data, error } = await supabase.functions.invoke('spark-chat', {
        body: { messages: apiMessages },
      });

      if (error) throw error;
      const reply = data?.content?.[0]?.text || t.chat.error;
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: t.chat.error }]);
    }
    setLoading(false);
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-resize
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 min-h-[48px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <>
            <span className="text-xl">💬</span>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-violet rounded-full pulse-dot" />
          </>
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 sm:w-[380px] sm:max-h-[520px] bg-background sm:border sm:border-foreground/[0.07] sm:rounded-lg overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3.5 flex items-center gap-3 shrink-0" style={{ paddingTop: 'max(0.875rem, env(safe-area-inset-top, 0px))' }}>
              <div className="w-9 h-9 rounded-full bg-violet flex items-center justify-center">
                <span className="font-syne font-extrabold text-sm text-foreground">S</span>
              </div>
              <div className="flex-1">
                <p className="font-syne font-bold text-[15px] text-primary-foreground">SPARK</p>
                <p className="font-mono text-[10px] text-primary-foreground/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                  {t.chat.statusOnline}
                </p>
              </div>
              <button onClick={onToggle} className="text-primary-foreground/70 hover:text-primary-foreground min-h-[48px] min-w-[48px] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Skeleton loader on initial load */}
              {initialLoad && messages.length === 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-card rounded-tr-xl rounded-bl-xl rounded-br-xl px-[18px] py-[14px]">
                    <div className="h-4 w-48 bg-muted rounded animate-pulse mb-2" />
                    <div className="h-4 w-32 bg-muted rounded animate-pulse" />
                  </div>
                </div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    variants={msgVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-[18px] py-[14px] text-[15px] sm:text-sm font-mono leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-tl-xl rounded-bl-xl rounded-br-xl'
                          : 'bg-card text-foreground rounded-tr-xl rounded-bl-xl rounded-br-xl'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-card px-[18px] py-[14px] rounded-tr-xl rounded-bl-xl rounded-br-xl flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-primary typing-dot" />
                    <span className="w-2 h-2 rounded-full bg-primary typing-dot" />
                    <span className="w-2 h-2 rounded-full bg-primary typing-dot" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-foreground/[0.07] p-3 shrink-0" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }}>
              <div className="flex gap-2 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInput}
                  onKeyDown={handleKey}
                  placeholder={t.chat.placeholder}
                  rows={1}
                  className="flex-1 bg-card border border-foreground/[0.07] rounded-lg px-4 py-3 font-mono text-[15px] sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 resize-none min-h-[48px]"
                  style={{ maxHeight: '120px' }}
                />
                <button
                  onClick={send}
                  disabled={loading || !input.trim()}
                  className="bg-primary text-primary-foreground min-w-[48px] min-h-[48px] rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 shrink-0"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
                </button>
              </div>
              <p className="font-mono text-[10px] text-muted-foreground/50 mt-2 text-center">{t.chat.footer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
