import { Button } from "@/components/ui/button";

export default function ElementaryPage() {
  return (
    <main className="font-sans bg-white text-[#2D3748] min-h-screen">
      <section className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] px-4 text-white h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Elementary</h1>
          <p className="text-lg italic">
            "Education is the most powerful weapon you can use to change the world." — Nelson Mandela
          </p>
        </div>
      </section>

      <section className="px-4 bg-[#F0FDFA] h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-md mb-6 text-[#374151]">
            Kurikulum Elementary dirancang untuk menumbuhkan rasa ingin tahu, kemampuan berpikir kritis, dan karakter mulia dalam diri anak.
          </p>
          <Button className="bg-[#0F766E] text-white hover:bg-[#14B8A6]" asChild>
            <a href="/enroll">Daftar Sekarang</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
