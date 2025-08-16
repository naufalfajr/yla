import { Button } from "@/components/ui/button";

export default function PreschoolPage() {
  return (
    <main className="font-sans bg-white text-[#2D3748] min-h-screen">
      <section className="bg-linear-to-br from-[#0F766E] to-[#14B8A6] px-4 text-white h-screen flex items-center justify-center" id="hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Preschool</h1>
          <p className="text-lg italic">
            "Play is the highest form of research." — Albert Einstein
          </p>
        </div>
      </section>

      <section className="px-4 bg-[#F0FDFA] h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-md mb-6 text-[#374151]">
            Di jenjang Preschool, kami menanamkan dasar nilai karakter, adab, dan kreativitas melalui pembelajaran tematik yang menyenangkan.
          </p>
          <Button className="bg-[#0F766E] text-white hover:bg-[#14B8A6]" asChild>
            <a href="/enroll">Daftar Sekarang</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
