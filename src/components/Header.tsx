import { Button } from "@/components/ui/button";
import { Search, Menu, User, MessageSquare, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
              <span className="text-lg font-bold text-primary-foreground">G</span>
            </div>
            <span className="text-xl font-bold text-primary">GigGampang</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Jasa
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kategori
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Cara Kerja
            </a>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="hidden md:flex">
            Masuk
          </Button>
          <Button className="bg-accent hover:bg-accent/90">
            Daftar
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
