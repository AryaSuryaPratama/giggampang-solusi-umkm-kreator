import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import GigCard from "@/components/GigCard";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Video, 
  Code, 
  PenTool, 
  Megaphone, 
  Music,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Index = () => {
  const categories = [
    { icon: Palette, title: "Desain Grafis", count: 2847 },
    { icon: Video, title: "Video & Animasi", count: 1923 },
    { icon: Code, title: "Programming", count: 1654 },
    { icon: PenTool, title: "Content Writing", count: 2156 },
    { icon: Megaphone, title: "Digital Marketing", count: 1789 },
    { icon: Music, title: "Audio & Musik", count: 934 },
  ];

  const popularGigs = [
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
      tags: ["Logo", "Branding"]
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
      tags: ["Video", "Social Media"]
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
      tags: ["Web", "Development"]
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
      tags: ["Writing", "Marketing"]
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
      tags: ["Design", "Instagram"]
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
      tags: ["SEO", "Marketing"]
    },
  ];

  const benefits = [
    "Sistem pembayaran aman dengan escrow",
    "Chat langsung dengan seller",
    "Garansi uang kembali 100%",
    "Support 24/7"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnpNNiAyNGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6bTI0IDI0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Temukan Jasa Berkualitas<br />untuk Bisnis Anda
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Platform marketplace terpercaya yang menghubungkan Anda dengan ribuan freelancer profesional di Indonesia
          </p>
          
          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-primary-foreground/80">Populer:</span>
            {["Logo Design", "Video Editing", "Copywriting", "Web Development"].map((tag) => (
              <a
                key={tag}
                href="#"
                className="px-3 py-1 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jelajahi Kategori Populer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan jasa profesional dari berbagai kategori sesuai kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Gigs Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Jasa Paling Populer
              </h2>
              <p className="text-muted-foreground">
                Dipilih oleh ribuan pelanggan puas
              </p>
            </div>
            <Button variant="ghost" className="gap-2">
              Lihat Semua
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGigs.map((gig) => (
              <GigCard key={gig.id} {...gig} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Bergabung dengan ribuan UMKM dan creator yang telah mempercayai GigGampang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Mulai Cari Jasa
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20">
              Jadi Seller
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
