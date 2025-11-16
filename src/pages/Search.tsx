import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GigCard from "@/components/GigCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  // Filter states
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("relevant");

  // Mock data - same as homepage
  const allGigs = [
    {
      id: 1,
      title: "Jasa Desain Logo Profesional untuk Brand Anda - Revisi Unlimited",
      seller: {
        name: "Rizki Pratama",
        level: "Top Rated Seller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rizki"
      },
      price: 150000,
      rating: 4.9,
      reviewCount: 342,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
      tags: ["Logo", "Branding"],
      category: "Desain Grafis"
    },
    {
      id: 2,
      title: "Edit Video Profesional untuk Instagram, TikTok & YouTube Shorts",
      seller: {
        name: "Maya Sari",
        level: "Level 2 Seller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya"
      },
      price: 75000,
      rating: 4.8,
      reviewCount: 256,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop",
      tags: ["Video", "Social Media"],
      category: "Video & Animasi"
    },
    {
      id: 3,
      title: "Pembuatan Website Landing Page Modern & Responsif",
      seller: {
        name: "Andi Kurniawan",
        level: "Top Rated Seller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=andi"
      },
      price: 500000,
      rating: 5.0,
      reviewCount: 189,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
      tags: ["Web", "Development"],
      category: "Programming"
    },
    {
      id: 4,
      title: "Copywriting Menarik untuk Iklan & Social Media Marketing",
      seller: {
        name: "Dinda Putri",
        level: "Level 2 Seller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dinda"
      },
      price: 100000,
      rating: 4.9,
      reviewCount: 421,
      image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&auto=format&fit=crop",
      tags: ["Writing", "Marketing"],
      category: "Content Writing"
    },
    {
      id: 5,
      title: "Jasa Desain Feed Instagram Aesthetic & Konsisten",
      seller: {
        name: "Farah Nabila",
        level: "Top Rated Seller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=farah"
      },
      price: 200000,
      rating: 4.8,
      reviewCount: 298,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
      tags: ["Design", "Instagram"],
      category: "Desain Grafis"
    },
    {
      id: 6,
      title: "SEO Optimization & Google Ranking untuk Website Anda",
      seller: {
        name: "Budi Santoso",
        level: "Level 2 Seller",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi"
      },
      price: 350000,
      rating: 4.7,
      reviewCount: 167,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      tags: ["SEO", "Marketing"],
      category: "Digital Marketing"
    },
  ];

  const categories = [
    "Desain Grafis",
    "Video & Animasi",
    "Programming",
    "Content Writing",
    "Digital Marketing",
    "Audio & Musik"
  ];

  // Filter and sort gigs
  const filteredGigs = allGigs.filter((gig) => {
    const matchesQuery = query === "" || 
      gig.title.toLowerCase().includes(query.toLowerCase()) ||
      gig.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesPrice = gig.price >= priceRange[0] && gig.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(gig.category);
    const matchesRating = gig.rating >= minRating;

    return matchesQuery && matchesPrice && matchesCategory && matchesRating;
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 1000000]);
    setSelectedCategories([]);
    setMinRating(0);
  };

  const activeFiltersCount = 
    (priceRange[0] !== 0 || priceRange[1] !== 1000000 ? 1 : 0) +
    selectedCategories.length +
    (minRating > 0 ? 1 : 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-8">
        {/* Header with results and sort */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">
                {query ? `Hasil untuk "${query}"` : "Semua Jasa"}
              </h1>
              <p className="text-muted-foreground">
                {filteredGigs.length} jasa ditemukan
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile filter toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filter
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              {/* Sort dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevant">Paling Relevan</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  <SelectItem value="reviews">Terbanyak Review</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active filters badges */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Filter aktif:</span>
              {selectedCategories.map((cat) => (
                <Badge key={cat} variant="secondary" className="gap-1">
                  {cat}
                  <button
                    onClick={() => handleCategoryToggle(cat)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {(priceRange[0] !== 0 || priceRange[1] !== 1000000) && (
                <Badge variant="secondary">
                  Rp {priceRange[0].toLocaleString('id-ID')} - Rp {priceRange[1].toLocaleString('id-ID')}
                </Badge>
              )}
              {minRating > 0 && (
                <Badge variant="secondary">
                  Rating ≥ {minRating}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs"
              >
                Hapus Semua
              </Button>
            </div>
          )}
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          {showFilters && (
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="sticky top-20 border border-border rounded-lg p-6 bg-card space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg">Filter</h2>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Reset
                    </Button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Kategori</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryToggle(category)}
                        />
                        <Label
                          htmlFor={category}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Rentang Harga</h3>
                  <div className="space-y-4">
                    <Slider
                      min={0}
                      max={1000000}
                      step={50000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Rp {priceRange[0].toLocaleString('id-ID')}
                      </span>
                      <span className="text-muted-foreground">
                        Rp {priceRange[1].toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium text-sm">Rating Minimum</h3>
                  <Select
                    value={minRating.toString()}
                    onValueChange={(value) => setMinRating(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Semua Rating</SelectItem>
                      <SelectItem value="4">⭐ 4.0+</SelectItem>
                      <SelectItem value="4.5">⭐ 4.5+</SelectItem>
                      <SelectItem value="4.8">⭐ 4.8+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </aside>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            {filteredGigs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-2">
                  Tidak ada jasa ditemukan
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Reset Filter
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGigs.map((gig) => (
                    <GigCard key={gig.id} {...gig} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">
                    Next
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
