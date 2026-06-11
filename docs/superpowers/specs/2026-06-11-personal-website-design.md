# 黄志忠个人网站 — 设计方案

> 日期：2026-06-11 | 状态：已确认

## 概述

为产品运营专家黄志忠搭建个人品牌网站，展示职业经历、项目成果和专业技能，用于求职和行业影响力建设。

## 设计风格

**极夜黑金 · 毛玻璃数据风**

- 深黑渐变背景 (`#050914` → `#0d1117`)
- 半透明毛玻璃卡片 (`rgba(255,255,255,0.03)` + `backdrop-filter: blur(16px)`)
- 边框 `rgba(255,255,255,0.06)`
- 主文字 `#e2e8f0`，辅助文字 `rgba(255,255,255,0.55)`
- 字重强对比：标题极细（200-300）搭配数据粗体（700-800）
- 整体气质：克制、高级、苹果风

## 页面架构

| 路由 | 页面 | 核心内容 |
|------|------|---------|
| `/` | 首页 | 极简 Hero + 姓名 + 毛玻璃数据三卡片（4年/过亿/90%+）+ 导航 |
| `/about` | 关于我 | 个人简介、专业总结、教育背景（北师大珠海分校） |
| `/experience` | 工作经历 | 时间线展示 3 段工作，玻璃卡片 hover 展开详情 |
| `/projects` | 项目案例 | 喜酱上市（3个月完成全年目标）、赣州调研（110%网点增长） |
| `/skills` | 技能 | SQL/Tableau、运营体系、语言（雅思7分）、财务（初级会计师） |
| `/contact` | 联系我 | 邮箱、电话 + 简单联系表单 |

## 技术方案

- **框架**: React 18 + Vite
- **样式**: Tailwind CSS 4
- **动效**: framer-motion（页面过渡、卡片 hover、数字递增）
- **路由**: react-router-dom v6
- **部署**: Vercel / Netlify（静态导出）
- **响应式**: 移动端优先，断点 sm/md/lg

## 配色方案

| 用途 | 颜色值 |
|------|--------|
| 最深背景 | `#050914` |
| 主背景 | `#0d1117` |
| 卡片背景 | `rgba(255,255,255,0.03)` |
| 卡片边框 | `rgba(255,255,255,0.06)` |
| 卡片 hover 边框 | `rgba(255,255,255,0.12)` |
| 主文字 | `#e2e8f0` |
| 辅助文字 | `rgba(255,255,255,0.55)` |
| 强调色（暂定白/淡金） | `#f0f0f0` |

## 字体

- 中文：系统默认（PingFang SC / Microsoft YaHei）
- 英文/数字：SF Pro Display / Inter / system-ui
- 数据展示数字使用 `font-weight: 200-300`（极细）形成对比

## 动效规划

- 页面路由切换：fade + translateY(8px) 微上移
- 首页数据卡片：进入视口时数字从 0 递增至目标值（count-up）
- 玻璃卡片 hover：`translateY(-4px)` + 边框亮度提升
- 时间线：滚动触发逐条出现（stagger  staggerChildren）
- 页面加载：整体渐入

## 组件树（初步）

```
App
├── Layout
│   ├── Navbar (顶部固定，极简导航)
│   └── Footer
├── HomePage
│   ├── HeroSection
│   │   ├── StatusBadge (可立即到岗)
│   │   ├── NameTitle
│   │   └── StatCards (3 个数据卡片)
│   └── QuickNav
├── AboutPage
│   ├── BioCard (毛玻璃卡片包装)
│   └── EducationCard
├── ExperiencePage
│   └── Timeline
│       └── TimelineItem × 3
├── ProjectsPage
│   └── ProjectCard × 2
├── SkillsPage
│   └── SkillCategory × 4
└── ContactPage
    ├── ContactInfo
    └── ContactForm
```

## 范围边界

- **包含**: 6 个页面的完整前端实现、响应式适配、基础动效
- **不包含**: 后端/数据库、CMS、博客系统、数据看板交互（后续迭代）
- **后续迭代**: 博客页、数据看板展示页、中英文切换

## 参考案例

- Brittany Chiang (`brittanychiang.com`) — 暗色科技极简路线
- Sébastien Lempens — 瑞士网格排版
- Bruno Simon — 沉浸式体验
