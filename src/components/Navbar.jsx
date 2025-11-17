import { useState } from 'react'
import { Menu, X, Hotel, LogIn } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tableaux de bord', href: '#dashboards' },
    { label: 'Sécurité', href: '#security' },
    { label: 'Tarifs', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center">
              <Hotel className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">Hotehelp</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 text-blue-100 hover:text-white text-sm font-medium">
              <LogIn className="w-4 h-4" /> Se connecter
            </a>
            <a href="#demo" className="inline-flex items-center px-3 py-2 rounded-lg bg-white text-slate-900 font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Demander une démo
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-2 py-2 rounded-lg text-blue-100/90 hover:text-white hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#" className="flex-1 px-3 py-2 rounded-lg border border-white/10 text-blue-100/90 text-center hover:bg-white/5">Se connecter</a>
              <a href="#demo" className="flex-1 px-3 py-2 rounded-lg bg-white text-slate-900 font-semibold text-center">Demander une démo</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
