import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-extralight tracking-wider mb-2">工作经历</h2>
        <p className="text-xs text-white/30 tracking-[0.2em] mb-12">EXPERIENCE</p>
      </ScrollReveal>

      <div className="relative">
        {/* 时间线 */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/[0.06]" />

        <div className="flex flex-col gap-8">
          {profile.experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="flex gap-6">
                {/* 时间线圆点 */}
                <div className="relative z-10 flex-shrink-0 w-[38px] h-[38px] rounded-full glass flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>

                <GlassCard className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-sm font-medium text-text-primary">{exp.company}</h3>
                      <p className="text-xs text-text-secondary mt-0.5">{exp.role}</p>
                    </div>
                    <span className="text-[10px] text-white/25 tracking-wider whitespace-nowrap ml-4">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="text-xs text-text-secondary leading-relaxed flex gap-2">
                        <span className="text-white/15 mt-0.5 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
