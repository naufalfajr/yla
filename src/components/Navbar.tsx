"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Assuming hero is full screen height
      
      // Check if we're in hero section (transparent)
      setIsTransparent(currentScrollY < heroHeight);
      
      // Hide navbar when scrolling within hero section
      if (currentScrollY < heroHeight) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down in hero - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up in hero - show navbar
          setIsVisible(true);
        }
      } else {
        // Outside hero section - always show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${ isVisible ? 'translate-y-0' : '-translate-y-full' }
        ${ isTransparent ? 'bg-transparent' : 'bg-gradient-to-r from-[#0F766E] to-[#14B8A6] shadow-lg' }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          My School
        </Link>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/preschool" className="text-white hover:underline">Preschool</Link>
          <Link href="/elementary" className="text-white hover:underline">Elementary</Link>
          <Link href="/middleschool" className="text-white hover:underline">Middle School</Link>
          <Button 
            variant="outline" 
            className={`${ isTransparent ? 'bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/50' 
              : 'bg-white text-[#0F766E] border-white hover:bg-[#CCFBF1] hover:text-[#0F766E]' }`} 
            asChild>
            <Link href="/enroll">Enroll</Link>
          </Button>
        </nav>

        {/* Mobile Nav (hidden on desktop) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-white">
                {isOpen ? <X /> : <Menu />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0F766E] text-white">
              <nav className="flex flex-col gap-4 p-4">
                <Link href="/preschool" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Preschool
                </Link>
                <Link href="/elementary" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Elementary
                </Link>
                <Link href="/middleschool" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Middle School
                </Link>
                <Button variant="outline" className="bg-white text-[#0F766E] hover:bg-[#CCFBF1] hover:text-[#0F766E]" asChild>
                  <Link href="/enroll" onClick={() => setIsOpen(false)}>Enroll</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
