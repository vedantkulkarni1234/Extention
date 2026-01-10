import Link from 'next/link';
import { Shield, Terminal, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center space-x-2">
        <Shield className="w-8 h-8 text-cyan-500" />
        <span className="text-xl font-bold tracking-tighter uppercase font-heading">
          Hacker's <span className="text-cyan-500">Arsenal</span>
        </span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
        <Link href="/extensions" className="hover:text-cyan-500 transition-colors">Extensions</Link>
        <Link href="/bundles" className="hover:text-cyan-500 transition-colors">Bundles</Link>
        <Link href="/docs" className="hover:text-cyan-500 transition-colors">Docs</Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Terminal className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
