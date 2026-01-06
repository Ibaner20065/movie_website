import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CloudTransition({ onFinish }) {
  useEffect(() => {
    const whoosh = new Audio("/sounds/whoosh.mp3");
    whoosh.volume = 0.7;
    whoosh.play().catch(() => {});
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onFinish}
    />
  );
}
