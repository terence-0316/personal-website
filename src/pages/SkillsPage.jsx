import { motion } from 'framer-motion'
import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function SkillsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-extralight tracking-wider mb-2">专业技能</h2>
        <p className="text-xs text-white/30 tracking-[0.2em] mb-12">SKILLS</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {profile.skills.map((cat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <GlassCard>
              <h3 className="text-xs tracking-[0.15em] text-white/35 mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                    className="inline-block glass rounded-full px-3 py-1 text-[11px] text-text-secondary"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
