import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Encoded SVG noise (문자열 이스케이프 이슈 방지용) ---
const NOISE_SVG = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
    <filter id='n'><feTurbulence baseFrequency='0.7' numOctaves='2'/></filter>
    <rect width='100%' height='100%' filter='url(#n)' opacity='0.3'/>
  </svg>
`);
const BG_NOISE = `url("data:image/svg+xml,${NOISE_SVG}")`;

export default function Site() {
  const [navOpen, setNavOpen] = useState(false);

  // 간단한 런타임 체크 (개발 편의)
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.assert(typeof Dot === "function", "Test: <Dot/> must be a function component");
    const buyCTA = document.querySelector('[data-testid="hero-cta-buy"]');
    console.assert(!!buyCTA, "Test: Buy CTA should render in hero section");
  }, []);

  const products = [
    {
      title: "BRICK DUST TRAY",
      ko: "벽돌가루 트레이",
      tag: "데스크/엔트리",
      price: "₩39,000",
      desc: "현장 부산물인 벽돌가루를 친환경 바인더로 성형한 엔트리 라인.",
    },
    {
      title: "CARRY / CARD WALLET",
      ko: "가죽 + 벽돌가루 카드 월렛",
      tag: "데일리",
      price: "₩59,000",
      desc: "업사이클 가죽과 브릭더스트 패널을 혼합한 하이브리드.",
    },
    {
      title: "INCENSE STAND",
      ko: "향 스탠드",
      tag: "무드",
      price: "₩33,000",
      desc: "부서진 조적의 질감을 그대로 담은 소형 오브제.",
    },
    {
      title: "TABLE OBJECT / No.7",
      ko: "테이블 오브제 No.7",
      tag: "리미티드",
      price: "₩129,000",
      desc: "가죽 공방의 애자(殘片)와 벽돌 미분을 적층해 만든 테이블 피스.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100" style={{ backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50" style={{ borderBottom: "1px solid #262626", backdropFilter: "blur(6px)" }}>
        <div className="mx-auto max-w-6xl px-4 py-3" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ fontWeight: 900, letterSpacing: "-0.01em", fontSize: 18 }}>andy jang</a>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ gap: 24, display: "none" /* 모바일 우선 */ }}>
            <a href="#story">스토리</a>
            <a href="#products">작품</a>
            <a href="#process">과정</a>
            <a href="#space">공간</a>
            <a href="#contact">문의</a>
          </nav>
          <button onClick={() => setNavOpen(!navOpen)} className="md:hidden" style={{ padding: 8, borderRadius: 8, border: "1px solid #262626" }}>
            <span className="sr-only">메뉴</span>
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden" style={{ borderTop: "1px solid #262626", background: "#0a0a0a" }}>
            <div className="px-4 py-3" style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
              <a onClick={() => setNavOpen(false)} href="#story">스토리</a>
              <a onClick={() => setNavOpen(false)} href="#products">작품</a>
              <a onClick={() => setNavOpen(false)} href="#process">과정</a>
              <a onClick={() => setNavOpen(false)} href="#space">공간</a>
              <a onClick={() => setNavOpen(false)} href="#contact">문의</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-28" style={{ paddingTop: 112 }}>
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(60% 40% at 50% 0%, rgba(255,80,0,0.15), transparent 60%)," +
                "radial-gradient(40% 30% at 80% 10%, rgba(255,160,64,0.1), transparent 60%)," +
                "radial-gradient(50% 30% at 20% 0%, rgba(255,0,64,0.08), transparent 60%)",
            }}
          />
          <div className="absolute inset-0" style={{ opacity: 0.25, mixBlendMode: "soft-light", backgroundImage: BG_NOISE }} />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-24" style={{ display: "grid", gap: 40, alignItems: "end", gridTemplateColumns: "1fr" }}>
          {/* 왼쪽: 카피 */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight" style={{ fontSize: 38, lineHeight: 1.15, fontWeight: 800 }}>
              쓸모없음의 재설계
              <br />브랜드, <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255,125,64,0.6)" }}>andy jang</span>
            </h1>
            <p className="mt-5 text-neutral-300 max-w-xl leading-relaxed" style={{ marginTop:
