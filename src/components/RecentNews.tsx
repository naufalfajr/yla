'use client'
import React from "react";
import { formatDateNews } from "@/lib/utils";

type NewsItem = {
  id: string;
  title: string;
  url?: string;
  publishedAt?: string;
  description?: string;
};

export default function RecentNews({ items }: { items: NewsItem[] }) {
  if (!items || items.length === 0) {
    return <p className="text-[#374151]">Belum ada berita terbaru.</p>;
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
          {item.url && (
            <a href={item.url} className="mt-3 inline-block text-[#0F766E] underline">
              Baca selengkapnya
            </a>
          )}
        </article>
      ))}
    </div>
  );
}