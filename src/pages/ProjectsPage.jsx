import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import CountUp from '../components/CountUp'
import ScrollReveal from '../components/ScrollReveal'

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-extralight tracking-wider mb-2">项目案例</h2>
        <p className="text-xs text-white/30 tracking-[0.2em] mb-12">PROJECTS</p>
      </ScrollReveal>

      <div className="flex flex-col gap-8">
        {profile.projects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <GlassCard>
              <div className="flex flex-col md:flex-row gap-6">
                {/* 左侧：项目内容 */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-text-primary mb-4">{project.name}</h3>
                  <ul className="space-y-2 mb-4">
                    {project.details.map((d, j) => (
                      <li key={j} className="text-xs text-text-secondary leading-relaxed flex gap-2">
                        <span className="text-white/15 mt-0.5 flex-shrink-0">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-xs text-white/50 leading-relaxed">{project.result}</p>
                  </div>
                </div>

                {/* 右侧：数据大数字 */}
                <div className="md:w-36 flex-shrink-0 flex items-center justify-center">
                  <div className="text-center glass py-8 px-6 w-full">
                    <div className="text-4xl font-extralight text-[#fbbf24] mb-1">
                      <CountUp end={parseInt(project.stat.value)} suffix="%" />
                    </div>
                    <div className="text-[10px] text-white/25 tracking-widest">{project.stat.label}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
