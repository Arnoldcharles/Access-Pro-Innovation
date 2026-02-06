import React from 'react';
import Link from 'next/link';
import { Mail, PhoneCall, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <nav className="flex items-center justify-between mb-16">
          <Link className="flex items-center gap-3" href="/">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">A</div>
            <span className="font-bold text-xl tracking-tight">AccessPro</span>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link className="hover:text-white transition-colors" href="/features">Features</Link>
            <Link className="hover:text-white transition-colors" href="/workflow">Workflow</Link>
            <Link className="hover:text-white transition-colors" href="/pricing">Pricing</Link>
            <Link className="hover:text-white transition-colors" href="/security">Security</Link>
          </div>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            Contact
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">Let’s plan your next event together.</h1>
          <p className="text-slate-400 mt-4 max-w-2xl text-lg leading-relaxed">
            Tell us about your event size, timeline, and goals. We’ll map out the best AccessPro workflow for your team.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10">
          <form className="p-8 bg-slate-900/50 border border-slate-800 rounded-[2rem] space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm" placeholder="First name" />
              <input className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm" placeholder="Last name" />
            </div>
            <input className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm" placeholder="Work email" />
            <input className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm" placeholder="Event size (approx.)" />
            <textarea className="w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 py-3 text-sm min-h-[140px]" placeholder="Tell us about your event" />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl py-3 transition-colors">
              Send request
            </button>
          </form>

          <div className="space-y-4">
            {[
              { label: 'Email', value: 'hello@accesspro.io', icon: <Mail size={18} /> },
              { label: 'Phone', value: '+1 (555) 212-4408', icon: <PhoneCall size={18} /> },
              { label: 'HQ', value: 'Austin, TX', icon: <MapPin size={18} /> },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
