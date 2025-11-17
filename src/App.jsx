import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboards from './components/Dashboards'
import Security from './components/Security'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboards />
        <Security />
        <section id="pricing" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-3xl font-bold text-white">Tarification simple</h2>
              <p className="mt-2 text-blue-100/80">Sur demande selon la taille de l’établissement et les modules activés.</p>
              <a href="#demo" className="inline-flex items-center justify-center mt-6 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all">Demander un devis</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
