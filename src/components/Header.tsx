import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-background sticky top-0 left-0 z-[100] shadow-s">
      <div className="flex flex-col py-5 px-5 sm:px-16 gap-6">
        {/* Sign in row - collapses on scroll */}
        <div
          className={`justify-end hidden sm:flex transition-all duration-500 overflow-hidden ${
            isScrolled ? "opacity-0 -mb-6 max-h-0" : "opacity-100 max-h-6"
          }`}
        >
          <Link
            to="/auth"
            className="text-base font-medium text-foreground hover:text-primary transition-colors mr-3"
          >
            Sign in
          </Link>
        </div>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Nexus Botix
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-normal text-black hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <div
              className={`hidden sm:flex transition-all duration-500 overflow-hidden ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                to="/auth"
                className="text-base font-medium text-foreground hover:text-primary transition-colors mr-3"
              >
                Sign in
              </Link>
            </div>
            <Button asChild className="px-8 rounded-sm py-5">
              <Link to="/auth" className="flex items-center gap-2">
                Get started free
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
