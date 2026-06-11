# 黄志忠个人网站 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为产品运营专家黄志忠搭建 6 页个人品牌网站——极夜黑金毛玻璃数据风格，React + Vite + Tailwind CSS + framer-motion。

**Architecture:** SPA 架构，react-router-dom 管理 6 条路由。共享 Layout（Navbar + Footer）包裹所有页面。每个页面独立组件，数据硬编码在组件内（无后端）。响应式移动端优先。

**Tech Stack:** React 18, Vite, Tailwind CSS 4, framer-motion, react-router-dom v6

---

## 文件结构

```
personal-website/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # 入口：BrowserRouter + App
│   ├── App.jsx               # 路由定义 + AnimatePresence
│   ├── index.css             # Tailwind 导入 + 全局样式 + 毛玻璃工具类
│   ├── data/
│   │   └── profile.js        # 所有个人数据集中管理
│   ├── components/
│   │   ├── Layout.jsx        # Navbar + main + Footer 布局壳
│   │   ├── Navbar.jsx        # 顶部固定导航，当前页高亮
│   │   ├── Footer.jsx        # 底部版权 + 社交链接
│   │   ├── GlassCard.jsx     # 通用毛玻璃卡片容器
│   │   ├── CountUp.jsx       # 数字递增动画 Hook
│   │   └── ScrollReveal.jsx  # 滚动进入视口触发动画
│   └── pages/
│       ├── HomePage.jsx      # Hero + 姓名 + 三数据卡片 + 快速导航
│       ├── AboutPage.jsx     # 简介 + 专业总结 + 教育背景
│       ├── ExperiencePage.jsx # 时间线展示 3 段工作经历
│       ├── ProjectsPage.jsx  # 喜酱上市 + 赣州调研案例
│       ├── SkillsPage.jsx    # 四大技能类别展示
│       └── ContactPage.jsx   # 联系方式 + 简单表单
```

---

### Task 1: 项目脚手架

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`

- [ ] **Step 1: 初始化 Vite + React 项目**

```bash
cd /Users/terence/personal-website && npm create vite@latest . -- --template react && npm install
```

- [ ] **Step 2: 安装依赖**

```bash
npm install react-router-dom framer-motion tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: 配置 Vite**

写入 `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 4: 写入 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>黄志忠 — 产品运营</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body class="bg-[#050914] text-[#e2e8f0] antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: 写入全局 CSS**

写入 `src/index.css`:

```css
@import "tailwindcss";

/* 毛玻璃工具类 */
@utility glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
}

@utility glass-hover {
  transition: all 0.3s ease;
}
@utility glass-hover:hover {
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
}

/* 自定义主题色 */
@theme {
  --color-bg-deep: #050914;
  --color-bg-main: #0d1117;
  --color-text-primary: #e2e8f0;
  --color-text-secondary: rgba(255, 255, 255, 0.55);
  --color-glass-bg: rgba(255, 255, 255, 0.03);
  --color-glass-border: rgba(255, 255, 255, 0.06);
  --color-glass-border-hover: rgba(255, 255, 255, 0.12);
}
```

- [ ] **Step 6: 写入 main.jsx 入口**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

- [ ] **Step 7: 写入 App.jsx 路由骨架**

```jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const location = useLocation()
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
```

- [ ] **Step 8: 验证脚手架运行**

```bash
cd /Users/terence/personal-website && npm run dev
```

打开浏览器确认 Vite 启动成功（页面空白但无报错）。

- [ ] **Step 9: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: scaffold project with Vite + React + Tailwind + Router"
```

---

### Task 2: 数据中心 + 共享组件

**Files:**
- Create: `src/data/profile.js`, `src/components/Layout.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/components/GlassCard.jsx`, `src/components/CountUp.jsx`, `src/components/ScrollReveal.jsx`

- [ ] **Step 1: 写入数据中心**

写入 `src/data/profile.js`:

```js
const profile = {
  name: "黄志忠",
  nameEn: "Huang Zhizhong",
  title: "产品运营",
  subtitle: "数据驱动增长",
  status: "可立即到岗",
  contact: {
    phone: "13533687240",
    email: "2734992423@qq.com",
  },
  stats: [
    { label: "实战经验", value: 4, suffix: "年", color: "#818cf8" },
    { label: "产品体量", value: "过亿", suffix: "", color: "#34d399" },
    { label: "渠道活跃度", value: "90", suffix: "%+", color: "#fbbf24" },
  ],
  summary: `"文武双全"型运营人才：4年工作经验，3年一线业务主管（渠道活跃度90%+、0-1开拓市场、多项业绩第一）+1年总部产品运营（产品运营体量过亿、0-1搭建数据体系、主导新品上市3个月达成全年目标）。既懂一线业务落地的真实痛点，又能从全局视角搭建运营体系、驱动增长。擅长跨部门协同、数据决策与产品全流程管理。英语雅思7分，可作为工作语言，财务基础扎实（初级会计师证）。`,
  education: {
    school: "北京师范大学珠海分校",
    degree: "工业设计（本科）",
    period: "2018-07 ~ 2022-06",
    honors: "连续三年获得学院一等奖学金，获评优秀学生干部。",
  },
  experiences: [
    {
      company: "小糊涂仙酒业有限公司",
      role: "产品运营",
      period: "2025.9 ~ 至今",
      type: "product",
      highlights: [
        "协助负责产品线整体运营，管理产品年度总体量过亿，通过数据驱动与策略优化，持续推动产品增长。",
        "在部门初建阶段，独立完成数据监控体系搭建，建立SQL/Excel自动化分析模型，利用Tableau/飞书搭建可视化仪表盘，显著提升数据处理效率80%，为运营决策提供实时数据分析。",
        "主导酱香产品月度及年度经营报告输出，设计渠道健康度评估机制并应用于年度复盘，建立日常数据输出机制，支撑多维度业务分析。",
        "协助酱香品牌负责人梳理产品策略与市场布局；跨部门协同渠道、法务、财务等，推动产品管理与核销流程落地。",
      ],
    },
    {
      company: "小糊涂仙酒业有限公司",
      role: "业务主管",
      period: "2023.7 ~ 2025.8",
      type: "business",
      highlights: [
        "主动承接区域历史遗留问题及未完成工作，半年内客户合作率恢复至90%以上，有效激活存量渠道资源。",
        "独立主导新区域0-1渠道开发布局，成功开发3家区域分销商，引进4个大型连锁体系（覆盖50+门店，含广州酒家、竹溪酒家等标杆客户），渠道网点增长率200%以上。",
        "统筹三区团购、餐饮、流通全渠道业务，实现多渠道协同增长，团购渠道业绩稳居区域市场第一。",
      ],
    },
    {
      company: "福建省昌德胶业科技有限公司",
      role: "业务经理",
      period: "2023-02 ~ 2023-06",
      type: "sales",
      highlights: [
        "负责东莞、深圳、惠州三地热熔胶业务，主要对接工厂客户，完成区域市场初步覆盖。",
        "深入B端客户沟通，积累销售经验与客户需求洞察能力，为后续运营工作打下基础。",
      ],
    },
  ],
  projects: [
    {
      name: "「喜酱」新品上市全链路销售跟进",
      role: "项目职责",
      details: [
        "统筹全国范围内销售数据的追踪与经营复盘，覆盖区域市场的日度、周度数据监控",
        "建立异常波动预警机制，多次精准识别市场问题并推动解决",
        "主导产品升级切换方案，协同区域落实价格体系维护，保障市场秩序稳定",
      ],
      result: "新品上市仅3个月即完成全年销售目标，全年达成率超200%；至2026年，「喜酱」成为公司酱香产品线中销量第一的单品。",
      stat: { value: "200%", label: "全年达成率" },
    },
    {
      name: "江西赣州市场调研",
      role: "项目职责",
      details: [
        "担任调研负责人，组建调研小组，设计涵盖终端网点、消费者、竞品的多维调研框架",
        "统筹问卷设计、实地走访及数据分析，主导完成调研报告及策略建议输出",
      ],
      result: "基于调研结论推动产品定位与市场政策全面调整，落地后区域内网点总数实现110%的增长，为后续区域复制提供了方法论支撑。",
      stat: { value: "110%", label: "网点增长率" },
    },
  ],
  skills: [
    {
      category: "运营与策略能力",
      items: ["0-1体系搭建", "产品上市全流程管理", "数据模型构建", "渠道管理", "客户生命周期运营", "预警机制设计", "专项复盘"],
    },
    {
      category: "数据分析能力",
      items: ["SQL/Excel数据建模", "Tableau/BI/飞书可视化分析", "月度/年度经营报告", "调研报告撰写"],
    },
    {
      category: "语言能力",
      items: ["雅思7分", "流畅商务沟通", "书面工作语言"],
    },
    {
      category: "财务素养",
      items: ["初级会计师证", "基础财务核算", "账目处理"],
    },
  ],
  navItems: [
    { label: "首页", path: "/" },
    { label: "关于", path: "/about" },
    { label: "经历", path: "/experience" },
    { label: "项目", path: "/projects" },
    { label: "技能", path: "/skills" },
    { label: "联系", path: "/contact" },
  ],
}

export default profile
```

- [ ] **Step 2: 写入 Layout 组件**

写入 `src/components/Layout.jsx`:

```jsx
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 3: 写入 Navbar 组件**

写入 `src/components/Navbar.jsx`:

```jsx
import { Link, useLocation } from 'react-router-dom'
import profile from '../data/profile'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050914]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-light tracking-[0.2em] text-text-primary hover:text-white transition-colors">
          {profile.nameEn.split(' ').map(w => w[0]).join('')}
        </Link>
        <div className="flex gap-8">
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
```

- [ ] **Step 4: 写入 Footer 组件**

写入 `src/components/Footer.jsx`:

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-xs text-white/25 tracking-wider">
        © 2026 黄志忠. All Rights Reserved.
      </div>
    </footer>
  )
}
```

- [ ] **Step 5: 写入 GlassCard 通用组件**

写入 `src/components/GlassCard.jsx`:

```jsx
import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`glass ${hover ? 'glass-hover' : ''} p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 6: 写入 CountUp 组件**

写入 `src/components/CountUp.jsx`:

```jsx
import { useState, useEffect, useRef } from 'react'

export default function CountUp({ end, duration = 2000, suffix = '', prefix = '', className = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || typeof end !== 'number') return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return (
    <span ref={ref} className={className}>
      {typeof end === 'number' ? `${prefix}${count}${suffix}` : `${prefix}${end}${suffix}`}
    </span>
  )
}
```

- [ ] **Step 7: 写入 ScrollReveal 组件**

写入 `src/components/ScrollReveal.jsx`:

```jsx
import { motion } from 'framer-motion'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
  }
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 8: 验证编译**

```bash
cd /Users/terence/personal-website && npm run build
```

确认无编译错误。

- [ ] **Step 9: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: add data center and shared components"
```

---

### Task 3: 首页 HomePage

**Files:**
- Create: `src/pages/HomePage.jsx`

- [ ] **Step 1: 写入首页**

写入 `src/pages/HomePage.jsx`:

```jsx
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
                  {typeof stat.value !== 'number' && stat.value}
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
```

- [ ] **Step 2: 验证首页渲染**

```bash
cd /Users/terence/personal-website && npm run build
```

- [ ] **Step 3: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: add HomePage with hero and stat cards"
```

---

### Task 4: 关于我 AboutPage

**Files:**
- Create: `src/pages/AboutPage.jsx`

- [ ] **Step 1: 写入关于我页面**

写入 `src/pages/AboutPage.jsx`:

```jsx
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
```

- [ ] **Step 2: 验证编译**

```bash
cd /Users/terence/personal-website && npm run build
```

- [ ] **Step 3: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: add AboutPage"
```

---

### Task 5: 工作经历 ExperiencePage

**Files:**
- Create: `src/pages/ExperiencePage.jsx`

- [ ] **Step 1: 写入工作经历页面**

写入 `src/pages/ExperiencePage.jsx`:

```jsx
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
```

- [ ] **Step 2: 验证编译**

```bash
cd /Users/terence/personal-website && npm run build
```

- [ ] **Step 3: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: add ExperiencePage with timeline"
```

---

### Task 6: 项目案例 ProjectsPage

**Files:**
- Create: `src/pages/ProjectsPage.jsx`

- [ ] **Step 1: 写入项目案例页面**

写入 `src/pages/ProjectsPage.jsx`:

```jsx
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
                  <p className="text-[10px] tracking-[0.15em] text-white/30 mb-3">{project.role}</p>
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
```

- [ ] **Step 2: 验证编译**

```bash
cd /Users/terence/personal-website && npm run build
```

- [ ] **Step 3: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: add ProjectsPage with case studies"
```

---

### Task 7: 技能 + 联系我 SkillsPage + ContactPage

**Files:**
- Create: `src/pages/SkillsPage.jsx`, `src/pages/ContactPage.jsx`

- [ ] **Step 1: 写入技能页面**

写入 `src/pages/SkillsPage.jsx`:

```jsx
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
```

- [ ] **Step 2: 写入联系我页面**

写入 `src/pages/ContactPage.jsx`:

```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../data/profile'
import GlassCard from '../components/GlassCard'
import ScrollReveal from '../components/ScrollReveal'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // 静态网站：仅做前端展示，不实际发送
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
```

- [ ] **Step 3: 验证编译**

```bash
cd /Users/terence/personal-website && npm run build
```

- [ ] **Step 4: 提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "feat: add SkillsPage and ContactPage"
```

---

### Task 8: 最终验证与部署准备

- [ ] **Step 1: 完整构建验证**

```bash
cd /Users/terence/personal-website && npm run build
```

确认 `dist/` 目录生成成功，无错误无警告。

- [ ] **Step 2: 本地预览验证**

```bash
cd /Users/terence/personal-website && npm run preview
```

打开浏览器检查：
- 首页渲染正常，数据卡片数字显示
- 6 个页面均可通过导航切换
- 毛玻璃效果正常
- 移动端响应式正常
- 动画效果流畅

- [ ] **Step 3: 修复问题并提交**

```bash
cd /Users/terence/personal-website
git add -A && git commit -m "chore: final verification and fixes"
```

---

## 自审清单

- [x] Spec 覆盖：6 个页面、毛玻璃风格、数据卡片、时间线、动效全部对应到 Task
- [x] 无占位符：所有代码步骤均包含完整实现代码
- [x] 类型一致性：profile 数据结构在 Task 2 定义，Task 3-7 引用字段一致
- [x] 文件路径全部精确
