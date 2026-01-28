import { motion } from "framer-motion";
import heroBg from "../Images/matcha.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark + blur overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeOut",
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-6xl font-semibold text-green-100"
        >
          Matcha 10:36
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-3 text-3xl md:text-5xl font-bold text-green-500"
        >
          Yearn for matcha
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-4 text-sm md:text-base text-gray-300"
        >
          One Matcha at a time!!
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition">
            Find Us →
          </button>

          <button className="px-6 py-2 rounded-md bg-black/60 text-white font-medium border border-white/20 hover:bg-black/80 transition">
            View Menu
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
