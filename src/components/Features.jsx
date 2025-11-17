import { KeyRound, Users, ClipboardList, MessagesSquare, BellRing, CreditCard, Utensils, Wrench, BarChart, Shield, Sparkles } from 'lucide-react'

const features = [
  { icon: Users, title: 'Auth & Profils', desc: 'Connexion email, mobile ou SSO. Rôles client, staff, manager avec permissions fines.' },
  { icon: ClipboardList, title: 'Réservations & Séjours', desc: 'Check-in en ligne, clés digitales, check-out express avec paiement in-app.' },
  { icon: Wrench, title: 'Housekeeping & Maintenance', desc: 'Demandes en temps réel, attribution automatique, suivi de statut et notifications.' },
  { icon: MessagesSquare, title: 'Communication', desc: 'Chat client ↔ hôtel et messagerie interne staff ↔ managers, avec traduction instantanée.' },
  { icon: Utensils, title: 'Restauration', desc: 'Menu digital, room service et paiement en ligne ou sur la facture chambre.' },
  { icon: CreditCard, title: 'Paiements & Factures', desc: 'CB, PayPal, Apple/Google Pay. Factures PDF, TVA et devises gérées.' },
  { icon: BarChart, title: 'Back-office', desc: 'Reporting complet: performances, satisfaction, stocks, planning et tâches.' },
  { icon: Shield, title: 'Sécurité & RGPD', desc: 'Données chiffrées, 2FA pour managers, traçabilité et sauvegardes cloud.' },
  { icon: Sparkles, title: 'Fonctions avancées', desc: 'IA, commandes vocales, IoT chambre, multi-établissements, mode offline.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Fonctionnalités clés</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/80 to-indigo-500/80 grid place-items-center mb-3">
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
