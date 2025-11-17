import { User, ClipboardCheck, LineChart } from 'lucide-react'

const cards = [
  {
    role: 'Client',
    color: 'from-emerald-500/20 to-teal-500/20',
    bullets: [
      'Services disponibles',
      'Demandes en cours',
      'Promotions personnalisées',
    ],
  },
  {
    role: 'Staff',
    color: 'from-amber-500/20 to-orange-500/20',
    bullets: ['Tâches assignées', 'Suivi des demandes', 'Notifications'],
  },
  {
    role: 'Manager',
    color: 'from-blue-500/20 to-indigo-500/20',
    bullets: ['Vue globale', 'Statistiques', 'Feedbacks clients'],
  },
]

export default function Dashboards() {
  return (
    <section id="dashboards" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Tableaux de bord par rôle</h2>
          <a href="#demo" className="text-sm text-blue-200/80 hover:text-white">Voir une démo</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.role} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className={`h-28 rounded-xl bg-gradient-to-br ${c.color} border border-white/10 mb-4 grid place-items-center text-white/90 font-semibold`}>
                {c.role}
              </div>
              <ul className="space-y-2 text-blue-100/80 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <ClipboardCheck className="w-4 h-4 text-white/80" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
