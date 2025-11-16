import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Cari jasa... (misal: desain logo, edit video, copywriting)"
        className="pl-12 pr-32 h-14 text-base border-2 border-border focus:border-primary transition-colors"
      />
      <Button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 h-10"
      >
        Cari
      </Button>
    </div>
  );
};

export default SearchBar;
