import { Link } from "react-router-dom";
import logo from "../assets/fsl logo.png";

function Header() {
  return (
    <header className="bg-gray-50 shadow px-18 py-4 flex items-center fixed left-0 right-0 top-0 justify-between">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-18 w-18 rounded-full  border-orange-300 object-contain"
        />
      </Link>

      <div className="flex items-center space-x-8">
        <nav className="flex space-x-6 font-semibold text-orange-400 text-2xl">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </nav>

        <Link
          to="/login"
          className="bg-orange-500 text-white font-bold px-5 py-4 rounded-xl border text-xl border-black shadow-sm hover:bg-orange-600 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;