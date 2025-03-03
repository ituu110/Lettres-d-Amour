import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import Letter from "@/components/Letter";
import letterData from "@/data/letter.json";
import "@/styles/letter.css";

export default function LetterPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect if no authentication
    if (!sessionStorage.getItem("authenticated")) {
      setLocation("/");
    }
  }, [setLocation]);

  return (
    <div className="fixed inset-0 bg-[#faf7f2] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full h-full flex items-center justify-center"
      >
        <Letter content={letterData.content} />
      </motion.div>
    </div>
  );
}