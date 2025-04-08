import { ReactNode } from "react";
import OTruyenService from "../services/otruyen.service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain = async ({ children }: LayoutMainProps) => {
  const categories = await OTruyenService.getCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar categories={categories} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutMain;
