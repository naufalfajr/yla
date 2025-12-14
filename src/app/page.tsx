import { Button } from "@/components/ui/button";
import RecentNews from "@/components/RecentNews";

export default async function HomePage() {
  // Fetch news on the server (outside the client component)
  let items = [];
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(process.env.CMS_TOKEN ? { Authorization: `Bearer ${process.env.CMS_TOKEN}` } : {}),
    };
    console.log(`Headers:`, headers);
    const res = await fetch(`${process.env.API_HOST}/articles`, { cache: "no-store", headers });
    if (res.ok) {
      const response = await res.json();
      items = Array.isArray(response.data) ? response.data : [];
    } else {
      console.error("Failed to load /api/articles:", res.status);
    }
  } catch (err) {
    console.error("Error fetching /api/articles:", err);
  }

  return (
    <main className="font-sans bg-white text-[#2D3748]">
      <video autoPlay muted loop playsInline className="fixed top-0 w-full h-screen object-cover" poster="/smp.jpeg">
        <source src="/smp.webm" type="video/webm" />
      </video>
      <div className="fixed top-0 w-full h-screen bg-black/50"></div>
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
        <div className="relative max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Sekolah Plus Latansa</h1>
          <p className="text-lg max-w-xl mx-auto">
            Kami membimbing anak-anak untuk menjadi pribadi yang unggul dalam karakter dan prestasi.
          </p>
        </div>
      </section>

      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero-2">
        <div className="relative max-w-4xl mx-auto text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-6">Membangun Masa Depan Cemerlang</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Melalui pendidikan berkualitas dan pembentukan karakter yang kuat, kami mempersiapkan generasi unggul untuk menghadapi tantangan masa depan.
          </p>
          <Button className="bg-[#0F766E] text-white hover:bg-[#14B8A6] px-8 py-3 text-lg" asChild>
            <a href="/enroll">Mulai Perjalanan Belajar</a>
          </Button>
        </div>
      </section>

      <section className="relative bg-[#F0FDFA] px-4 h-screen flex items-center justify-center" id="achievements">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#0F766E]">Prestasi Terbaru</h2>
          <p className="text-md text-[#374151] mb-6">
            Juara 1 Lomba Sains Nasional 2025 oleh siswa Elementary - Alif Rahman
          </p>
        </div>
      </section>

      <section className="relative bg-white px-4 h-screen flex items-center justify-center" id="news">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl font-semibold mb-6 text-[#0F766E]">Berita Terbaru</h2>
          <RecentNews items={items} />
        </div>
      </section>

      <section className="relative bg-white px-4 h-screen flex items-center justify-center" id="plus-points">
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

      <section className="relative bg-[#F0FDFA] px-4 h-screen flex items-center justify-center" id="edu-level">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#0F766E]">Jelajahi Jenjang Pendidikan</h2>
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
