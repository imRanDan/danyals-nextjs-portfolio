import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#a4cfe4] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
} 