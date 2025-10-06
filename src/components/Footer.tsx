import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Instagram } from "lucide-react";
import ismfLogo from "@/assets/ismf-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-oxford to-delft text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <img src={ismfLogo} alt="ISMF Logo" className="h-16 w-auto mb-4" />
            <p className="text-white/80 mb-4">
              Empowering Irish students with hands-on investment experience and financial education.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-cornflower transition-colors">About ISMF</a></li>
              <li><a href="#divisions" className="hover:text-cornflower transition-colors">Divisions</a></li>
              <li><a href="#research" className="hover:text-cornflower transition-colors">Research</a></li>
              <li><a href="#performance" className="hover:text-cornflower transition-colors">Performance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>University College Dublin</li>
              <li>Belfield, Dublin 4</li>
              <li>Ireland</li>
              <li><a href="mailto:info@ismf.ie" className="hover:text-cornflower transition-colors">info@ismf.ie</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2024 Irish Student Managed Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
