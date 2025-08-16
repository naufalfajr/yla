import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="font-sans bg-[#F6F6F2] text-[#2F2F2F]">
      <section className="bg-[#891C1C] text-white px-4 h-screen flex items-center justify-center" id="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Sekolah Plus Latansa</h1>
          <p className="text-lg max-w-xl mx-auto">
            Kami membimbing anak-anak untuk menjadi pribadi yang unggul dalam karakter dan prestasi.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF7DD] px-4 h-screen flex items-center justify-center" id="achievements">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#891C1C]">Prestasi Terbaru</h2>
          <p className="text-md text-[#444] mb-6">
            Juara 1 Lomba Sains Nasional 2025 oleh siswa Elementary - Alif Rahman
          </p>
        </div>
      </section>

      <section className="bg-white px-4 h-screen flex items-center justify-center" id="plus-points">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold text-[#891C1C] mb-2">Iman & Akhlak</h3>
            <p className="text-sm">Membangun karakter Islami sejak usia dini.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#891C1C] mb-2">Akademik Unggul</h3>
            <p className="text-sm">Kurikulum terintegrasi sains, teknologi, dan kreativitas.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#891C1C] mb-2">Lingkungan Nyaman</h3>
            <p className="text-sm">Fasilitas ramah anak, aman dan inspiratif.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7DD] px-4 h-screen flex items-center justify-center" id="edu-level">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#891C1C] mb-6">Jelajahi Jenjang Pendidikan</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="outline" className="bg-white text-[#891C1C] border-[#891C1C] hover:bg-[#FFF2CC]" asChild>
              <a href="/preschool">Preschool</a>
            </Button>
            <Button variant="outline" className="bg-white text-[#891C1C] border-[#891C1C] hover:bg-[#FFF2CC]" asChild>
              <a href="/elementary">Elementary</a>
            </Button>
            <Button variant="outline" className="bg-white text-[#891C1C] border-[#891C1C] hover:bg-[#FFF2CC]" asChild>
              <a href="/middleschool">Middle School</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
