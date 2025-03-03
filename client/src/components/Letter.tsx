import { motion } from "framer-motion";

interface LetterProps {
  content: string;
}

export default function Letter({ content }: LetterProps) {
  return (
    <motion.div
      className="letter-paper w-[95%] h-[90%] max-w-4xl mx-auto overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="letter-content h-full">
        <div className="stamp-corner"></div>
        <div className="flower-corner"></div>
        <div 
          className="letter-text font-serif py-8 px-6" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </motion.div>
  );
}