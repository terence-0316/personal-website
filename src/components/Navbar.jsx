import { Link, useLocation } from 'react-router-dom'
import profile from '../data/profile'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-light tracking-[0.2em] text-text-primary hover:text-white transition-colors">
          {profile.nameEn.split(' ').map(w => w[0]).join('')}
        </Link>
        <div className="flex gap-4 md:gap-8">
          {profile.navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-widest transition-colors ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
