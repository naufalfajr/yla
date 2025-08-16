"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#891C1C] text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          My School
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button>
              {isOpen ? <X /> : <Menu />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#891C1C] text-white">
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
              <Button variant="outline" className="text-white bg-[#FFD1D1] hover:bg-white hover:text-[#891C1C]" asChild>
                <Link href="/enroll" onClick={() => setIsOpen(false)}>Enroll</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
