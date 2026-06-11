import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-extralight tracking-wider mb-2">联系我</h2>
        <p className="text-xs text-white/30 tracking-[0.2em] mb-12">CONTACT</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <GlassCard>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-white/25 tracking-wider mb-1">电话</p>
              <p className="text-sm text-text-primary">{profile.contact.phone}</p>
            </div>
            <div>
              <p className="text-[10px] text-white/25 tracking-wider mb-1">邮箱</p>
              <p className="text-sm text-text-primary">{profile.contact.email}</p>
            </div>
            <div>
              <p className="text-[10px] text-white/25 tracking-wider mb-1">状态</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-sm text-green-400/80">{profile.status}</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  )
}
