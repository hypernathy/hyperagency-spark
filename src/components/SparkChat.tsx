import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { SPARK_SYSTEM_PROMPT } from '@/constants/sparkPrompt';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function SparkChat({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const { t } = useLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.chat.greeting }]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const apiMessages = newMessages
        .filter(m => !(m === newMessages[0] && m.role === 'assistant'))
        .map(m => ({ role: m.role, content: m.content }));

      if (apiMessages.length === 0 || apiMessages[0].role !== 'user') {
        apiMessages.unshift({ role: 'user', content: text });
      }

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SPARK_SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const reply = data.content?.[0]?.text || t.chat.error;
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: t.chat.error }]);
    }
    setLoading(false);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-[58px] h-[58px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <>
            <span className="text-xl">💬</span>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-violet rounded-full" />
          </>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-48px)] sm:w-[340px] bg-background border border-foreground/[0.07] rounded-lg overflow-hidden shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-violet flex items-center justify-center">
              <span className="font-syne font-extrabold text-sm text-foreground">S</span>
            </div>
            <div className="flex-1">
              <p className="font-syne font-bold text-sm text-primary-foreground">SPARK</p>
              <p className="font-mono text-[9px] text-primary-foreground/70 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                Online · Free AI companion
              </p>
            </div>
            <button onClick={onToggle} className="text-primary-foreground/70 hover:text-primary-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 max-h-[320px] overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 text-xs font-mono leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tl-lg rounded-bl-lg rounded-br-lg'
                      : 'bg-card text-foreground rounded-tr-lg rounded-bl-lg rounded-br-lg'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-card px-4 py-3 rounded-tr-lg rounded-bl-lg rounded-br-lg flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary typing-dot" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary typing-dot" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary typing-dot" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-foreground/[0.07] p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={t.chat.placeholder}
                className="flex-1 bg-card border border-foreground/[0.07] rounded-sm px-3 py-2 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="bg-primary text-primary-foreground w-9 h-9 rounded-sm flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                →
              </button>
            </div>
            <p className="font-mono text-[9px] text-muted-foreground/50 mt-2 text-center">{t.chat.footer}</p>
          </div>
        </div>
      )}
    </>
  );
}
