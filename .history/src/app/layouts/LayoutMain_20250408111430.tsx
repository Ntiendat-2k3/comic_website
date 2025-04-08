import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain = ({ children }: LayoutMainProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default LayoutMain;
