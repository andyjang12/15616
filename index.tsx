import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        쓸모없음의 재설계 — andy jang
      </motion.h1>
      <p>벽돌가루와 가죽 부산물을 활용한 업사이클링 예술 공간</p>
    </div>
  )
}
