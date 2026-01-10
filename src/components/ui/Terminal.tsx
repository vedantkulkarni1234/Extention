'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon } from 'lucide-react';

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(['Arsenal OS v4.2.0 initialized...', 'Type "help" for available commands.']);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    let response = `Command not found: ${cmd}`;

    if (cmd === 'help') {
      response = 'Available commands: help, clear, status, scan, version';
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'status') {
      response = 'All systems nominal. Secure connection established.';
    } else if (cmd === 'scan') {
      response = 'Scanning for targets... 17 extensions detected.';
    } else if (cmd === 'version') {
      response = 'Arsenal OS v4.2.0-stable';
    }

    setHistory([...history, `> ${input}`, response]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-cyan-500 text-black rounded-none z-40 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]"
      >
        <TerminalIcon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-64 bg-black border border-white/20 z-50 flex flex-col font-mono shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Hacker Arsenal Terminal</span>
              <button onClick={() => setIsOpen(false)} className="hover:text-cyan-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto text-xs space-y-1 custom-scrollbar">
              {history.map((line, i) => (
                <div key={i} className={line.startsWith('>') ? 'text-cyan-500' : 'text-gray-400'}>
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="p-4 border-t border-white/10 flex items-center">
              <span className="text-cyan-500 mr-2 text-xs">$</span>
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none flex-grow text-xs text-white"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
