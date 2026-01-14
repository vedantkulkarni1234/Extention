import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import { Download, Package, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex items-center space-x-4 mb-12">
          <div className="w-16 h-16 rounded-none border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-cyan-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-heading uppercase tracking-tighter">
              Hunter Dashboard
            </h1>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              Access Granted // {session.user.email}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-xl font-bold font-heading uppercase border-b border-white/10 pb-4 mb-6">
              Your Arsenal
            </h2>
            
            <div className="p-12 border border-dashed border-white/10 text-center">
              <Package className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-500 mb-6">All extensions are freely available.</p>
              <Link href="/extensions" className="text-cyan-500 hover:underline uppercase text-sm font-mono tracking-widest">
                Browse Extensions {'->'}
              </Link>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-cyan-500/5 border border-cyan-500/20">
              <h3 className="font-heading font-bold uppercase text-sm mb-4">Security Status</h3>
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">MFA Status</span>
                  <span className="text-green-500 font-bold">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Last Login</span>
                  <span className="text-white">Today, 14:22 UTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Current IP</span>
                  <span className="text-white">192.168.1.1</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-zinc-900/50 border border-white/5">
              <h3 className="font-heading font-bold uppercase text-sm mb-4">Need Help?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Our support team of veteran researchers is available 24/7.
              </p>
              <Link href="/support" className="w-full py-3 border border-white/10 text-xs font-bold uppercase hover:bg-white/5 transition-colors block text-center">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
