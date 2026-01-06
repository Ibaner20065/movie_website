import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function SlideOne({ onYes, onNo }) {
  return (
    <motion.div
      className="relative h-screen w-screen flex items-center justify-center px-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Fog Overlay */}
      <div className="fog"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center gap-12">
        
        {/* LEFT IMAGE */}
        <img
          src="/intro.jpeg"
          alt="Intro"
          className="w-40 md:w-48 rounded-xl shadow-2xl opacity-95"
        />

        {/* RIGHT TEXT */}
        <div className="max-w-2xl text-left">
          <Typewriter
            text={`Hello Aritri.

Now that you have clicked on this link, a decision stands before you.
Hesitation dulls adventures, and indecision steals stories.
Any pause may cost you an exciting journey.

Are you ready to step into the unknown?`}
          />

          <div className="mt-10 flex gap-6">
            <button
              onClick={onYes}
              className="px-7 py-3 bg-white text-black rounded-full hover:scale-105 transition duration-300"
            >
              Yes
            </button>

            <button
              onClick={onNo}
              className="px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
