import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
