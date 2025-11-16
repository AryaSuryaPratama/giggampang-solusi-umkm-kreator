const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Tentang GigGampang</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platform marketplace jasa mikro terpercaya untuk UMKM dan creator Indonesia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Jelajahi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kategori</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Jadi Seller</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Bantuan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: halo@giggampang.id</li>
              <li>WhatsApp: +62 812-3456-7890</li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 GigGampang. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
