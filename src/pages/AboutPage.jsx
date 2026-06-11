import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-extralight tracking-wider mb-2">关于我</h2>
        <p className="text-xs text-white/30 tracking-[0.2em] mb-12">ABOUT</p>
      </ScrollReveal>

      {/* 专业总结 */}
      <ScrollReveal delay={0.1}>
        <GlassCard className="mb-8">
          <h3 className="text-xs tracking-[0.2em] text-white/40 mb-4">专业总结</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {profile.summary}
          </p>
        </GlassCard>
      </ScrollReveal>

      {/* 基本信息 */}
      <ScrollReveal delay={0.2}>
        <GlassCard className="mb-8">
          <h3 className="text-xs tracking-[0.2em] text-white/40 mb-4">基本信息</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-white/30 text-[10px] tracking-wider">出生年月</span>
              <p className="text-text-primary mt-1">2000-01</p>
            </div>
            <div>
              <span className="text-white/30 text-[10px] tracking-wider">性别</span>
              <p className="text-text-primary mt-1">男</p>
            </div>
            <div>
              <span className="text-white/30 text-[10px] tracking-wider">电话</span>
              <p className="text-text-primary mt-1">{profile.contact.phone}</p>
            </div>
            <div>
              <span className="text-white/30 text-[10px] tracking-wider">邮箱</span>
              <p className="text-text-primary mt-1 text-xs">{profile.contact.email}</p>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* 教育背景 */}
      <ScrollReveal delay={0.3}>
        <GlassCard>
          <h3 className="text-xs tracking-[0.2em] text-white/40 mb-4">教育背景</h3>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-text-primary font-medium">{profile.education.school}</p>
              <p className="text-xs text-text-secondary mt-1">{profile.education.degree}</p>
            </div>
            <span className="text-[10px] text-white/25 tracking-wider">{profile.education.period}</span>
          </div>
          <p className="text-xs text-text-secondary mt-3 leading-relaxed">{profile.education.honors}</p>
        </GlassCard>
      </ScrollReveal>
    </div>
  )
}
