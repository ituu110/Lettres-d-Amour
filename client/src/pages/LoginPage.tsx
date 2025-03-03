import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Envelope from "@/components/Envelope";
import { validatePassword } from "@/lib/auth";
import "@/styles/envelope.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleEnvelopeClick = () => {
    if (!showInput) {
      setShowInput(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await validatePassword(password)) {
      setIsOpen(true);
      setTimeout(() => {
        setLocation("/letter");
      }, 2000);
    } else {
      toast({
        title: "Invalid Password",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2] p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Envelope isOpen={isOpen} onClick={handleEnvelopeClick} />

        {showInput && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 space-y-4"
            onSubmit={handleSubmit}
          >
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center font-serif bg-opacity-80 border-amber-200"
            />
            <Button 
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800"
            >
              Open Letter
            </Button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}