import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface SearchSuggestion {
  type: "category" | "gig";
  title: string;
  subtitle?: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Mock data untuk suggestions
  const allSuggestions: SearchSuggestion[] = [
    { type: "category", title: "Desain Logo", subtitle: "Kategori" },
    { type: "category", title: "Video Editing", subtitle: "Kategori" },
    { type: "category", title: "Copywriting", subtitle: "Kategori" },
    { type: "category", title: "Web Development", subtitle: "Kategori" },
    { type: "gig", title: "Desain Logo Profesional", subtitle: "Mulai Rp 150.000" },
    { type: "gig", title: "Edit Video Instagram Reels", subtitle: "Mulai Rp 75.000" },
    { type: "gig", title: "Pembuatan Website Landing Page", subtitle: "Mulai Rp 500.000" },
    { type: "gig", title: "Copywriting untuk Social Media", subtitle: "Mulai Rp 100.000" },
  ];

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      const filtered = allSuggestions.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (finalQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(finalQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.title);
    handleSearch(suggestion.title);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
      <Input
        type="text"
        placeholder="Cari jasa... (misal: desain logo, edit video, copywriting)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        onFocus={() => query.length > 0 && setShowSuggestions(true)}
        className="pl-12 pr-32 h-14 text-base border-2 border-border focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
      />
      <Button
        onClick={() => handleSearch()}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 h-10"
      >
        Cari
      </Button>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-hover z-50 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted transition-colors text-left"
            >
              <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {suggestion.title}
                </p>
                {suggestion.subtitle && (
                  <p className="text-xs text-muted-foreground">
                    {suggestion.subtitle}
                  </p>
                )}
              </div>
              <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded">
                {suggestion.type === "category" ? "Kategori" : "Jasa"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
