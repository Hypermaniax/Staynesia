const navLinks = [
  { path: "/", label: "Home" },
  { path: "/space", label: "Space" },
  { path: "/bookings", label: "Bookings" },
  { path: "/support", label: "Support" },
  { path: "/host", label: "Host" },
];

export default function Header() {

  return (
    <nav className="bg-white sticky top-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-extrabold text-2xl">
            <span className="text-black">Stay</span>
            <span className="text-pink">Nesia</span>
          </h1>
          <ul className="hidden md:flex gap-8 font-medium text-lg">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="hover:text-pink-500 transition-colors"
              >
                {link.label}
              </li>
            ))}
          </ul>

          <button className=" hidden md:flex bg-pink-500 text-white px-5 py-2 bg-pink rounded-lg text-lg font-bold hover:bg-pink-600 transition-colors">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
