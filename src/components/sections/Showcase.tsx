'use client';

import { extensions } from '@/data/extensions';
import ExtensionCard from '../ui/ExtensionCard';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4">
              Tactical <span className="text-cyan-500">Extensions</span>
            </h2>
            <p className="text-gray-400 font-sans">
              Each tool is crafted to solve a specific, complex problem in the security research lifecycle. 
              From reconnaissance to final report generation, we've got you covered.
            </p>
          </div>
          <div className="flex space-x-4 font-mono text-xs uppercase tracking-widest text-cyan-500">
            <span>Filter:</span>
            <button className="underline">All</button>
            <button className="hover:underline">Recon</button>
            <button className="hover:underline">Analysis</button>
            <button className="hover:underline">Exploit</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extensions.map((ext, index) => (
            <motion.div
              key={ext.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ExtensionCard extension={ext} />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}
