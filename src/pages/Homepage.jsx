import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-screen relative overflow-hidden"
    >
      <h1 className=" text-[#191919] z-50 left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2 text-center font-ranade font-bold w-[25ch] text-8xl">
        RD<span className="text-[#234ee7]">.</span>
      </h1>
    </motion.div>
  );
}
