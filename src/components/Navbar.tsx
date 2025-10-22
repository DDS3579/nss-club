import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo-bgremoved.png";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/#clubs", text: "Clubs" },
  { href: "/events", text: "Events" },
  { href: "/gallery", text: "Gallery" },
  { href: "/#contact", text: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Heuristic to detect if user has scrolled past the hero section
      const heroScrollThreshold = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > heroScrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-xl">
                <img src={logo} alt="" />
              </span>
            </div>
            <div className={cn(isScrolled ? "text-primary" : "text-white")}>
              <div className="font-bold text-lg">NSS Clubs</div>
              <div className={cn("text-xs", isScrolled ? "opacity-70" : "text-white/70")}>National School of Sciences</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.text}
                  href={link.href}
                  className={cn(
                    "transition-colors font-medium",
                    isScrolled ? "text-primary hover:opacity-80" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  key={link.text}
                  to={link.href}
                  className={cn(
                    "transition-colors font-medium",
                    isScrolled ? "text-primary hover:opacity-80" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.text}
                </Link>
              )
            )}
            <a href="/#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6">
                Learn More
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "bg-transparent",
                    isScrolled
                      ? "border-primary/50 text-primary hover:bg-primary/10"
                      : "border-white/50 text-white hover:bg-white/10"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>NSS Clubs</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 py-6">
                  {navLinks.map((link) =>
                    link.href.startsWith("/#") ? (
                      <a key={link.text} href={link.href} className="text-lg font-medium hover:text-primary">
                        {link.text}
                      </a>
                    ) : (
                      <Link key={link.text} to={link.href} className="text-lg font-medium hover:text-primary">
                        {link.text}
                      </Link>
                    )
                  )}
                  <a href="/#contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 mt-4">
                      Learn More
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
