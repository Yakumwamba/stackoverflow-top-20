// components/AnimatedCard.tsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedCard: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <h2>Animated Card</h2>
      <p>This card is animated using Framer Motion.</p>
    </motion.div>
  );
};

export default AnimatedCard;
