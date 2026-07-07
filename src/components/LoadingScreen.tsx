"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] text-[#f3f4f6]"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Outer rotating orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute w-16 h-16 border-2 border-brand-blue border-t-transparent border-b-transparent rounded-full"
              />
              {/* Inner counter-rotating orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute w-10 h-10 border-2 border-brand-purple border-l-transparent border-r-transparent rounded-full"
              />
              {/* Core data center point */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-4 h-4 bg-white rounded-full"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold tracking-widest bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DEEPIKA K</h2>
              <p className="text-xs text-gray-500 mt-1 tracking-widest uppercase">Data Science & CS Engineer</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
