import { Button } from "@/components/ui/button";

export default function MiddleSchoolPage() {
  return (
    <main className="font-sans bg-white text-[#2D3748] min-h-screen">
      <section className="bg-linear-to-br from-[#0F766E] to-[#14B8A6] px-4 text-white h-screen flex items-center justify-center" id="hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Middle School</h1>
          <p className="text-lg italic">
            "Develop a passion for learning. If you do, you will never cease to grow." — Anthony J. D'Angelo
          </p>
        </div>
      </section>

      <section className="px-4 bg-[#F0FDFA] h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-md mb-6 text-[#374151]">
            Di Middle School, siswa dibekali dengan kecakapan akademik dan kepemimpinan yang akan membawa mereka menjadi generasi berdaya saing.
          </p>
          <Button className="bg-[#0F766E] text-white hover:bg-[#14B8A6]" asChild>
            <a href="/enroll">Daftar Sekarang</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
