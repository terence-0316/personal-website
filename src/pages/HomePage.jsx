import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profile from '../data/profile'
import CountUp from '../components/CountUp'
import ScrollReveal from '../components/ScrollReveal'

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 状态徽章 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="text-[11px] text-white/60 tracking-wider">{profile.status}</span>
        </motion.div>

        {/* 姓名 + 标题 */}
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-[0.05em] text-text-primary mb-3">
            {profile.name}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-sm text-text-secondary tracking-[0.3em] mb-16">
            {profile.title} · {profile.subtitle}
          </p>
        </ScrollReveal>

        {/* 数据卡片 */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
          {profile.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.3 + i * 0.1}>
              <div className="glass py-6 px-3 text-center">
                <div
                  className="text-3xl md:text-4xl font-extralight mb-1"
                  style={{ color: stat.color }}
                >
                  <CountUp
                    end={typeof stat.value === 'number' ? stat.value : undefined}
                    suffix={stat.suffix}
                  />
                  {typeof stat.value !== 'number' ? stat.value : ''}
                </div>
                <div className="text-[10px] text-white/30 tracking-widest">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 快速导航 */}
        <ScrollReveal delay={0.7}>
          <div className="flex justify-center gap-6 text-xs tracking-[0.2em] text-white/35">
            {profile.navItems.filter(i => i.path !== '/').map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-white/70 transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
