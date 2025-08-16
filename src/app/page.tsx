import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="font-sans bg-white text-[#2D3748]">
      <section className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white px-4 h-screen flex items-center justify-center" id="hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Sekolah Plus Latansa</h1>
          <p className="text-lg max-w-xl mx-auto">
            Kami membimbing anak-anak untuk menjadi pribadi yang unggul dalam karakter dan prestasi.
          </p>
        </div>
      </section>

      <section className="bg-[#F0FDFA] px-4 h-screen flex items-center justify-center" id="achievements">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#0F766E]">Prestasi Terbaru</h2>
          <p className="text-md text-[#374151] mb-6">
            Juara 1 Lomba Sains Nasional 2025 oleh siswa Elementary - Alif Rahman
          </p>
        </div>
      </section>

      <section className="bg-white px-4 h-screen flex items-center justify-center" id="plus-points">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold text-[#0F766E] mb-2">Iman & Akhlak</h3>
            <p className="text-sm text-[#6B7280]">Membangun karakter Islami sejak usia dini.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0F766E] mb-2">Akademik Unggul</h3>
            <p className="text-sm text-[#6B7280]">Kurikulum terintegrasi sains, teknologi, dan kreativitas.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0F766E] mb-2">Lingkungan Nyaman</h3>
            <p className="text-sm text-[#6B7280]">Fasilitas ramah anak, aman dan inspiratif.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F0FDFA] px-4 h-screen flex items-center justify-center" id="edu-level">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#0F766E] mb-6">Jelajahi Jenjang Pendidikan</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="outline" className="bg-white text-[#0F766E] border-[#0F766E] hover:bg-[#CCFBF1] hover:border-[#14B8A6] hover:text-[#14B8A6]" asChild>
              <a href="/preschool">Preschool</a>
            </Button>
            <Button variant="outline" className="bg-white text-[#0F766E] border-[#0F766E] hover:bg-[#CCFBF1] hover:border-[#14B8A6] hover:text-[#14B8A6]" asChild>
              <a href="/elementary">Elementary</a>
            </Button>
            <Button variant="outline" className="bg-white text-[#0F766E] border-[#0F766E] hover:bg-[#CCFBF1] hover:border-[#14B8A6] hover:text-[#14B8A6]" asChild>
              <a href="/middleschool">Middle School</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
