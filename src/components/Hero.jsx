import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.15),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-blue-200/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Expérience client nouvelle génération
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              La super-app qui connecte vos clients, votre staff et vos services
            </h1>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
              D’une réservation au check-out, centralisez tout: conciergerie, housekeeping, maintenance, paiements et reporting. Sécurisé, multi-rôle et prêt pour le terrain.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Demander une démo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5">
                Voir les fonctionnalités
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-blue-200/80">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> RGPD & SSO</div>
              <div className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 2FA managers</div>
              <div className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Cloud sécurisé</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[linear-gradient(120deg,rgba(59,130,246,0.2),rgba(99,102,241,0.2))] grid place-items-center text-center">
                <div>
                  <p className="text-blue-100/70">Tableaux de bord par rôle</p>
                  <p className="text-2xl font-semibold text-white mt-2">Client • Staff • Manager</p>
                  <p className="text-xs text-blue-200/60 mt-4">Aperçu interactif prochainement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
