"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { formatDateNews } from "@/lib/utils";

type NewsItem = {
  id: string;
  slug: string;
  title: string;
  publishedAt?: string;
  description?: string;
};

export default function RecentNews({ items }: { items: NewsItem[] }) {
  const router = useRouter();

  if (!items || items.length === 0) {
    return <p className="text-[#374151]">Belum ada berita terbaru.</p>;
  }

  function openDetail(slug: string, id: string) {
    try {
      // store id keyed by slug in sessionStorage so it's not visible in the URL
      sessionStorage.setItem(`news:id:${slug}`, id);
    } catch (e) {
      // ignore storage errors
    }
    router.push(`/news/${encodeURIComponent(slug)}`);
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.id} className="p-4 bg-white border rounded shadow-sm text-left">
          <h3 className="mt-2 font-semibold text-[#0F766E]">{item.title}</h3>
          {item.publishedAt && (
            <time className="text-sm text-[#6B7280]">
              {formatDateNews(item.publishedAt)}
            </time>
          )}
          {item.description && <p className="text-sm text-[#374151] mt-2">{item.description}</p>}
          <div className="mt-3 flex items-center gap-3">
            {item.slug && (
              <a href={item.slug} className="inline-block text-[#0F766E] underline">
                Baca Selengkapnya
              </a>
            )}
            <button
              onClick={() => openDetail(item.slug, item.id)}
              className="ml-auto inline-block bg-[#0F766E] text-white px-3 py-1 rounded text-sm hover:bg-[#0b6b5f]"
            >
              Baca Selengkapnya
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}