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
            <p className="mt-5 text-neutral-300 max-w-xl leading-relaxed" style={{ marginTop: 16, color: "#d4d4d4", maxWidth: 640, lineHeight: 1.7 }}>
              해체 현장의 <span style={{ color: "#e5e5e5" }}>벽돌가루</span>와 공방의 <span style={{ color: "#e5e5e5" }}>가죽 잔재</span>를 결합해
              일상의 오브제로 환생시킵니다. 서울에서 시작해, 부산물의 미래를 디자인합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                data-testid="hero-cta-buy"
                href="#products"
                style={{
                  padding: "12px 20px",
                  borderRadius: 16,
                  background: "#fff",
                  color: "#111",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                바로 구매하기
              </a>
              <a
                href="#contact"
                style={{
                  padding: "12px 20px",
                  borderRadius: 16,
                  border: "1px solid #404040",
                  color: "#e5e5e5",
                  display: "inline-block",
                }}
              >
                맞춤 제작 문의
              </a>
            </div>
            <div className="mt-6 text-sm text-neutral-400 flex items-center gap-2" style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, color: "#a3a3a3", fontSize: 14 }}>
              <Dot /> 한국 로컬 부산물 순환 · 한정 생산 · 수공
            </div>
          </motion.div>

          {/* 오른쪽: 비주얼 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
            <div
              className="aspect-[4/5] w-full rounded-3xl overflow-hidden border border-neutral-800"
              style={{
                aspectRatio: "4/5",
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid #262626",
                boxShadow: "0 0 80px -20px rgba(255,80,0,0.35)",
              }}
            >
              <div className="h-full w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" style={{ height: "100%", width: "100%", position: "relative", background: "linear-gradient(135deg, #171717, #1f1f1f, #171717)" }}>
                <div className="absolute inset-8" style={{ position: "absolute", inset: 32, border: "1px solid rgba(115,115,115,0.6)", borderRadius: 20 }} />
                <div className="absolute bottom-8 left-8 right-8 text-sm" style={{ position: "absolute", left: 32, right: 32, bottom: 32, fontSize: 14 }}>
                  <p style={{ color: "#d4d4d4" }}>MATERIALS</p>
                  <p style={{ color: "#a3a3a3", marginTop: 4 }}>Brick dust · Upcycled leather · Plant-based binder</p>
                </div>
                <div className="absolute inset-x-8 top-8" style={{ position: "absolute", left: 32, right: 32, top: 32, display: "flex", gap: 8 }}>
                  <Pill text="벽돌 부산물" />
                  <Pill text="가죽 잔재" />
                  <Pill text="업사이클" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-6xl px-4 py-20" style={{ padding: "80px 16px", maxWidth: 1200 }}>
        <div className="grid md:grid-cols-3 gap-10" style={{ display: "grid", gap: 40 }}>
          <div className="md:col-span-2">
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>브랜드 스토리 — "쓸모없음의 재설계"</h2>
            <p style={{ marginTop: 16, color: "#d4d4d4", lineHeight: 1.7 }}>
              andy jang은 버려지는 것을 다시 쓰기 위한 <span style={{ color: "#e5e5e5" }}>디자인 시스템</span>입니다. 우리는
              해체 현장에서 발생하는 벽돌가루와 가죽 공방의 자투리를 수거하고, 분급·혼합·성형·가공의 과정을 거쳐
              <em style={{ fontStyle: "normal", fontWeight: 600 }}> 기능과 미감 </em>을 가진 오브제로 만듭니다. 한정 수량으로만 제작하며, 소재의 출처를 투명하게 공개합니다.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm" style={{ marginTop: 24, display: "grid", gap: 16 }}>
              <li className="p-4 rounded-2xl" style={cardStyle}>지역 순환 수거망 운영</li>
              <li className="p-4 rounded-2xl" style={cardStyle}>부산물 등급별 선별 · 성형 레시피</li>
              <li className="p-4 rounded-2xl" style={cardStyle}>가죽 공방 협업 (리미티드 라인)</li>
              <li className="p-4 rounded-2xl" style={cardStyle}>파손 시 리페어 · 리메이크 프로그램</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl p-6" style={{ border: "1px solid #262626", background: "rgba(23,23,23,0.6)", borderRadius: 16 }}>
              <h3 style={{ fontWeight: 700 }}>SHOP 소식 구독</h3>
              <p style={{ color: "#a3a3a3", marginTop: 8, fontSize: 14 }}>신상품/워크숍 오픈을 가장 먼저 받아보세요.</p>
              <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 16, display: "flex", gap: 8 }}>
                <input
                  style={{ flex: 1, padding: "12px 16px", borderRadius: 12, background: "#0a0a0a", border: "1px solid #262626", color: "#e5e5e5" }}
                  placeholder="이메일 주소"
                />
                <button style={{ padding: "12px 16px", borderRadius: 12, background: "#fff", color: "#111", fontWeight: 700 }}>구독</button>
              </form>
              <p style={{ color: "#737373", marginTop: 12, fontSize: 12 }}>스팸 없이, 중요한 소식만.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-4" style={{ maxWidth: 1200, padding: "16px" }}>
        <div className="flex items-end justify-between mb-6" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800 }}>작품 — 벽돌가루 × 가죽</h2>
          <a href="#contact" style={{ fontSize: 14, color: "#d4d4d4" }}>B2B/콜라보 문의 →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(2, 1fr)" }}>
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden"
              style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #262626", background: "rgba(23,23,23,0.4)" }}
            >
              <div className="aspect-[4/5] relative" style={{ aspectRatio: "4/5", position: "relative" }}>
                <div className="absolute inset-0" style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #171717, #1f1f1f, #171717)" }} />
                <div
                  className="absolute inset-0"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.35,
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,80,0,.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,140,64,.12), transparent 40%)",
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3" style={{ position: "absolute", left: 12, right: 12, bottom: 12, display: "flex", gap: 8 }}>
                  <Pill text={p.tag} />
                  <Pill text="리사이클" />
                </div>
              </div>
              <div className="p-4" style={{ padding: 16 }}>
                <div className="flex items-center justify-between" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontWeight: 700 }}>{p.ko}</h3>
                  <span style={{ fontSize: 14, color: "#a3a3a3" }}>{p.price}</span>
                </div>
                <p className="mt-2" style={{ marginTop: 8, fontSize: 14, color: "#a3a3a3" }}>{p.desc}</p>
                <div className="mt-4 flex gap-2" style={{ marginTop: 16, display: "flex", gap: 8 }}>
                  <button style={{ flex: 1, padding: "8px 12px", borderRadius: 12, background: "#fff", color: "#111", fontWeight: 700 }}>바로 구매</button>
                  <button style={{ padding: "8px 12px", borderRadius: 12, border: "1px solid #404040", color: "#e5e5e5" }}>상세보기</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-20" style={{ padding: "80px 16px", maxWidth: 1200 }}>
        <div className="grid md:grid-cols-5 gap-6" style={{ display: "grid", gap: 24 }}>
          <div className="md:col-span-2">
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>과정 — 부산물의 두 번째 생애</h2>
            <p style={{ marginTop: 16, color: "#d4d4d4", lineHeight: 1.7 }}>수거부터 리페어까지, 전 과정을 투명하게 공개합니다.</p>
            <div className="mt-6 text-sm grid gap-3" style={{ marginTop: 24, display: "grid", gap: 12, fontSize: 14 }}>
              {[
                "수거: 해체 현장/공방과 협약, 트레이서블 수거",
                "분급: 입도(粒度) 분석 및 세척·건조",
                "성형: 식물성 바인더 · 압착/캐스팅",
                "가공: 샌딩·오일 마감, 가죽 결합",
                "리페어: 파손품 무상 리메이크(기간 한정)",
              ].map((t, i) => <Step key={i} index={i + 1} text={t} />)}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="rounded-3xl p-6" style={{ border: "1px solid #262626", background: "rgba(23,23,23,0.4)", borderRadius: 24 }}>
              <h3 style={{ fontWeight: 700 }}>지속가능성 지표</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center" style={{ display: "grid", gap: 16, marginTop: 16, textAlign: "center", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <Metric label="부산물 전환율" value="85%" sub="(중량 기준)" />
                <Metric label="가죽 재사용" value="72%" sub="(면적 기준)" />
                <Metric label="CO₂ 절감" value="-41%" sub="(추정)" />
                <Metric label="리페어율" value="93%" sub="(3개월)" />
              </div>
              <p style={{ color: "#737373", marginTop: 12, fontSize: 12 }}>* 내부 측정치 기준. 제품별로 상이할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPACE / WORKSHOP */}
      <section id="space" className="mx-auto max-w-6xl px-4 py-20" style={{ padding: "80px 16px", maxWidth: 1200 }}>
        <div className="grid md:grid-cols-2 gap-8 items-center" style={{ display: "grid", gap: 32, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>공간 — 작업실 & 정기 워크숍</h2>
            <p style={{ marginTop: 16, color: "#d4d4d4", lineHeight: 1.7 }}>
              이곳은 제품이 태어나는 동시에, 누군가의 창작이 지속되는 장소입니다. 매주 정기적으로 <strong>브릭더스트 워크숍</strong>을 운영하며, 이를 통해 브랜드 수익과 커뮤니티를 함께 확장합니다.
            </p>
            <ul className="mt-6 grid gap-2 text-sm" style={{ marginTop: 24, display: "grid", gap: 8, fontSize: 14 }}>
              <li style={{ display: "flex", alignItems: "start", gap: 8 }}><Dot /> 입문반(2h): 트레이/향스탠드 제작</li>
              <li style={{ display: "flex", alignItems: "start", gap: 8 }}><Dot /> 심화반(3h): 가죽 결합 오브제</li>
              <li style={{ display: "flex", alignItems: "start", gap: 8 }}><Dot /> 팀빌딩/단체 클래스 상시 운영</li>
            </ul>
            <div className="mt-6 flex gap-3" style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <a href="#contact" style={{ padding: "12px 20px", borderRadius: 16, background: "#fff", color: "#111", fontWeight: 700 }}>워크숍 예약</a>
              <a href="#story" style={{ padding: "12px 20px", borderRadius: 16, border: "1px solid #404040", color: "#e5e5e5" }}>공간 대관 문의</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid #262626", borderRadius: 24 }}>
            <div className="aspect-[16/10]" style={{ aspectRatio: "16/10", background: "conic-gradient(from 0deg at 30% 30%, rgba(255,80,0,.2), transparent 20%, rgba(255,140,64,.18), transparent 60%)" }} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20" style={{ padding: "80px 16px", maxWidth: 1200 }}>
        <div className="grid md:grid-cols-2 gap-8" style={{ display: "grid", gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 800 }}>맞춤 제작 · 협업 문의</h2>
            <p style={{ marginTop: 16, color: "#d4d4d4" }}>브랜드/공간과의 콜라보, 기업 워크숍, B2B 제작을 진행합니다.</p>
            <div className="mt-6 text-sm grid gap-3" style={{ marginTop: 24, display: "grid", gap: 12 }}>
              <InfoRow label="이메일" value="studio@andyjang.kr" />
              <InfoRow label="인스타그램" value="@andyjang.studio" />
              <InfoRow label="스튜디오" value="서울 성수동 (상세 주소 개별 안내)" />
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="p-6" style={{ border: "1px solid #262626", background: "rgba(23,23,23,0.4)", borderRadius: 24, display: "grid", gap: 12 }}>
            <div className="grid md:grid-cols-2 gap-3" style={{ display: "grid", gap: 12 }}>
              <Input label="이름" placeholder="성함" />
              <Input label="이메일" placeholder="example@email.com" />
            </div>
            <Input label="요청 구분" placeholder="맞춤 제작 / 콜라보 / 워크숍" />
            <div>
              <label style={{ fontSize: 14, color: "#e5e5e5" }}>메시지</label>
              <textarea
                style={{ marginTop: 4, width: "100%", padding: "12px 16px", borderRadius: 12, background: "#0a0a0a", border: "1px solid #262626", minHeight: 120, color: "#e5e5e5" }}
                placeholder="필요/예산/희망 일정 등을 알려주세요."
              />
            </div>
            <button style={{ marginTop: 8, padding: "12px 20px", borderRadius: 16, background: "#fff", color: "#111", fontWeight: 700 }}>보내기</button>
            <p style={{ fontSize: 12, color: "#737373" }}>영업일 기준 48시간 내 회신.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm" style={{ maxWidth: 1200, padding: "40px 16px", color: "#a3a3a3", display: "flex", gap: 16, flexDirection: "column" }}>
          <div>
            <p style={{ fontWeight: 700, color: "#e5e5e5" }}>andy jang</p>
            <p style={{ marginTop: 4 }}>© {new Date().getFullYear()} andy jang. all rights reserved.</p>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#story" style={{ color: "#d4d4d4" }}>브랜드</a>
            <a href="#products" style={{ color: "#d4d4d4" }}>샵</a>
            <a href="#space" style={{ color: "#d4d4d4" }}>공간</a>
            <a href="#contact" style={{ color: "#d4d4d4" }}>문의</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- 재사용 컴포넌트 ---------- */

function Pill({ text }) {
  return (
    <span style={{ padding: "4px 10px", borderRadius: 999, fontSize: 12, border: "1px solid #404040", background: "rgba(23,23,23,0.7)" }}>
      {text}
    </span>
  );
}

function Step({ index, text }) {
  return (
    <div className="p-4 rounded-2xl" style={cardStyle}>
      <div style={{ width: 28, height: 28, borderRadius: 999, background: "#fff", color: "#111", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, marginRight: 8 }}>
        {index}
      </div>
      <span style={{ color: "#d4d4d4", fontSize: 14 }}>{text}</span>
    </div>
  );
}

function Metric({ label, value, sub }) {
  return (
    <div className="p-4" style={{ border: "1px solid #262626", borderRadius: 16 }}>
      <p style={{ fontSize: 12, color: "#a3a3a3" }}>{label}</p>
      <p style={{ fontSize: 28, fontWeight: 800, marginTop: 4 }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: "#737373", marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontSize: 12, padding: "4px 8px", borderRadius: 6, background: "#171717", border: "1px solid #262626", color: "#a3a3a3", width: 80, textAlign: "center" }}>
        {label}
      </span>
      <span style={{ fontSize: 14, color: "#d4d4d4" }}>{value}</span>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label style={{ fontSize: 14, color: "#e5e5e5" }}>{label}</label>
      <input
        style={{ marginTop: 4, width: "100%", padding: "12px 16px", borderRadius: 12, background: "#0a0a0a", border: "1px solid #262626", color: "#e5e5e5" }}
        placeholder={placeholder}
      />
    </div>
  );
}

// FIX: Dot 컴포넌트가 JSX를 명확히 반환
function Dot() {
  return <span className="inline-block" style={{ display: "inline-block", width: 6, height: 6, borderRadius: 999, background: "#737373" }} />;
}

// 공통 카드 스타일
const cardStyle = {
  background: "rgba(23,23,23,0.6)",
  border: "1px solid #262626",
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
};
