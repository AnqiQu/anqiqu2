import { motion } from 'framer-motion';
import CloudField from '../components/Cloudfield';

export default function Landing() {
  
  return (
    <section className="relative h-screen w-screen snap-start flex items-center justify-center overflow-hidden">
      {/* Background cloud layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <CloudField />
      </div>

      {/* Foreground content */}
      <div className="flex flex-wrap flex-row items-center justify-center p-4 z-10">
        <motion.h1
          className="text-4xl md:text-5xl text-center font-bold inline text-[#372c1c]"
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

