import { Shield, Lock, BadgeCheck, Database, KeyRound } from 'lucide-react'

export default function Security() {
  const items = [
    { icon: Lock, title: 'Chiffrement & RGPD', desc: 'Protection de bout en bout, gouvernance des données et conformité RGPD.' },
    { icon: KeyRound, title: 'Accès sécurisé', desc: '2FA pour managers, SSO et gestion des permissions multi-rôle.' },
    { icon: Database, title: 'Sauvegarde & Cloud', desc: 'Redondance, sauvegardes automatiques et synchronisation cloud.' },
    { icon: BadgeCheck, title: 'Traçabilité', desc: 'Historique détaillé des actions pour un suivi complet.' },
  ]

  return (
    <section id="security" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Sécurité & conformité</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/80 to-cyan-500/80 grid place-items-center mb-3">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-blue-100/80 text-sm mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
