import { Button } from "@/components/ui/button";

export default function PreschoolPage() {
  return (
    <main className="font-sans bg-[#FFF7DD] text-[#2F2F2F] min-h-screen">
      <section className="bg-[#FFD1D1] py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#891C1C]">Preschool</h1>
          <p className="text-lg italic">
            "Play is the highest form of research." — Albert Einstein
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-md mb-6">
            Di jenjang Preschool, kami menanamkan dasar nilai karakter, adab, dan kreativitas melalui pembelajaran tematik yang menyenangkan.
          </p>
          <Button className="bg-[#891C1C] text-white hover:bg-[#6c1515]" asChild>
            <a href="/enroll">Daftar Sekarang</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
