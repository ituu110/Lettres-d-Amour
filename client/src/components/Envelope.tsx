import { motion } from "framer-motion";

interface EnvelopeProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function Envelope({ isOpen, onClick }: EnvelopeProps) {
  return (
    <motion.div
      className="envelope-container"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`envelope ${isOpen ? 'open' : ''}`}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
          <div className="letter-content"></div>
        </div>
        <div className="wax-seal"></div>
      </div>
    </motion.div>
  );
}
