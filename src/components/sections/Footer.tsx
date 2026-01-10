import { Shield, Github, Twitter, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-cyan-500" />
              <span className="text-xl font-bold tracking-tighter uppercase font-heading">
                Hacker's <span className="text-cyan-500">Arsenal</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs mb-8">
              Premium browser extensions for professional bug bounty hunters and security researchers. 
              Elevate your craft with our elite toolset.
            </p>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
              <MessageSquare className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold uppercase text-xs tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/extensions" className="hover:text-cyan-500 transition-colors">All Extensions</Link></li>
              <li><Link href="/bundles" className="hover:text-cyan-500 transition-colors">Bundles</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan-500 transition-colors">Pricing</Link></li>
              <li><Link href="/roadmap" className="hover:text-cyan-500 transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold uppercase text-xs tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/docs" className="hover:text-cyan-500 transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-500 transition-colors">Security Blog</Link></li>
              <li><Link href="/support" className="hover:text-cyan-500 transition-colors">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} HACKERS ARSENAL. ALL RIGHTS RESERVED.
          </span>
          <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">
            Protocol v4.2.0 // encrypted_connection
          </span>
        </div>
      </div>
    </footer>
  );
}
