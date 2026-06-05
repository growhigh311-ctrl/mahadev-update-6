'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  yOffset?: number;
  xOffset?: number;
  duration?: number;
  delay?: number;
  scale?: number;
}

export default function Reveal({
  children,
  width = "100%",
  yOffset = 50,
  xOffset = 0,
  duration = 0.6,
  delay = 0,
  scale = 1
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset, x: xOffset, scale },
          visible: { opacity: 1, y: 0, x: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
