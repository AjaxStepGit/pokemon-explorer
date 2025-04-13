import { AnimatePresence } from "motion/react";

export default function PokemoInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}
