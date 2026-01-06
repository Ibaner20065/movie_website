import { motion } from "framer-motion";

export default function SlideTwo({ onNext }) {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-center bg-cover relative"
      style={{
        backgroundImage: "url('/mountain.png')",
      }}
    >
      {/* Dark overlay for mystery vibe */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.6 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        onAnimationComplete={onNext}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-3xl md:text-4xl leading-snug">
          Hello.
          <br />
          So… curious about what lies behind that mountain?
        </h1>
      </motion.div>
    </div>
  );
}
