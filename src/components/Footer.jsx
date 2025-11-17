export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-200/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Hotehelp. Tous droits réservés.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Confidentialité</a>
          <a href="#" className="hover:text-white">Sécurité</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
