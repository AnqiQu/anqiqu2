import { motion } from 'framer-motion';
import CloudySky from '../components/CloudySky';

// export default function Landing({ onReady }) {
export default function Landing() {
  
  return (
    <section className="h-screen w-screen snap-start flex items-center justify-center">
      {/* <CloudySky onReady={onReady} /> */}
      <CloudySky />

      <div className="flex flex-row items-center">
        <motion.h1
          className="text-5xl font-bold inline text-[#372c1c] z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello, I am Anqi Qu
        </motion.h1>

        <motion.img
          src="/Anqi_head.png"
          alt="Anqi"
          style={{ height: "250px", marginLeft: "40px" }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 1 },
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </section>
  );
}

