import { useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <ScrollReveal>
        <h2 className="text-3xl font-extralight tracking-wider mb-2">联系我</h2>
        <p className="text-xs text-white/30 tracking-[0.2em] mb-12">CONTACT</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 联系信息 */}
        <ScrollReveal delay={0.1}>
          <GlassCard className="h-full">
            <h3 className="text-xs tracking-[0.15em] text-white/35 mb-6">联系方式</h3>
            <div className="space-y-5">
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

        {/* 联系表单 */}
        <ScrollReveal delay={0.2}>
          <GlassCard>
            <h3 className="text-xs tracking-[0.15em] text-white/35 mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="你的姓名"
                required
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder:text-white/15 focus:outline-none focus:border-white/[0.15] transition-colors"
              />
              <input
                type="email"
                placeholder="你的邮箱"
                required
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder:text-white/15 focus:outline-none focus:border-white/[0.15] transition-colors"
              />
              <textarea
                rows={4}
                placeholder="留言内容"
                required
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-2.5 text-xs text-text-primary placeholder:text-white/15 focus:outline-none focus:border-white/[0.15] transition-colors resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2.5 rounded-lg text-xs tracking-widest transition-all ${
                  submitted
                    ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                    : 'bg-white/[0.06] text-text-primary border border-white/[0.08] hover:bg-white/[0.1]'
                }`}
              >
                {submitted ? '✓ 发送成功' : '发送消息'}
              </motion.button>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  )
}
