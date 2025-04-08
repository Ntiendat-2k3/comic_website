import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Dropdown = dynamic(() => import("./Dropdown"), {
  loading: () => <div className="w-40 h-6 bg-gray-100 animate-pulse" />,
});

interface NavbarProps {
  categories: Category[];
}

const Navbar = ({ categories }: NavbarProps) => {
  return (
    <nav className="w-full bg-primary text-white shadow-md">
      <div className="container px-4 py-2 flex items-center justify-between">
        {/* Phần logo giữ nguyên */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </Link>
          <span className="font-bold text-xl">TruyenHay</span>
        </div>

        {/* Phần chức năng */}
        <div className="flex items-center gap-4">
          {/* Form tìm kiếm */}
          <form className="flex items-center bg-white text-black rounded overflow-hidden">
            <input
              type="text"
              placeholder="Tìm truyện..."
              className="px-2 py-1 focus:outline-none min-w-64"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-primary-light text-white hover:bg-primary-dark transition"
            >
              Tìm
            </button>
          </form>

          <Dropdown categories={categories} />

          {/* Các nút đăng nhập/đăng ký */}
          <Link
            href="/dang-nhap"
            className="hover:opacity-80 transition-opacity"
          >
            Đăng nhập
          </Link>

          <Link
            href="/dang-ky"
            className="bg-white text-primary px-4 py-1 rounded hover:bg-primary-light hover:text-white transition"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
