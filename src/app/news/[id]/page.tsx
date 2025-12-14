"use client"
import React, { useEffect, useState } from "react"
import { formatDateNews } from "@/lib/utils"

type Props = { params: { slug?: string, id?: string } }

interface Article {
  title: string
  publishedAt?: string
  description?: string
  blocks?: Array<{ body: string }>
  content?: string
}

export default function NewsDetail({ params }: Props) {
  const slug = params.slug ?? params.id
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
              if (!slug) {
                throw new Error("Missing article identifier")
              }

              // try to read hidden id from sessionStorage first
              let id: string | null = null
              try {
                id = sessionStorage.getItem(`news:id:${slug}`)
              } catch (e) {
                // ignore storage errors
              }

        // prefer id when available; otherwise use the slug
        const key = id ?? slug

        // client-side must use NEXT_PUBLIC_* env vars if host is needed
        const host = process.env.API_HOST || ""
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
          ...(process.env.CMS_TOKEN ? { Authorization: `Bearer ${process.env.CMS_TOKEN}` } : {}),
        }

        const res = await fetch(`${host}/api/articles/${encodeURIComponent(key)}`, {
          cache: "no-store",
          headers,
        })

        if (!mounted) return

        if (!res.ok) {
          setError(`Failed to load article: ${res.status}`)
          setArticle(null)
        } else {
          const json = await res.json()
          // support a few shapes
          const art = json?.data || json?.article || json
          setArticle(art)
        }
      } catch (err: unknown) {
        if (!mounted) return
        setError((err instanceof Error ? err.message : String(err)) || "Unknown error")
        setArticle(null)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [slug])

  if (loading) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <p className="text-sm text-gray-600">Memuat berita…</p>
      </main>
    )
  }

  if (error || !article) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Berita tidak ditemukan</h1>
        <p className="mt-4 text-sm text-gray-600">{error ?? "Maaf, berita yang diminta tidak tersedia."}</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#0F766E]">{article.title}</h1>
      {article.publishedAt && (
        <time className="block text-sm text-[#6B7280] mt-2">{formatDateNews(article.publishedAt)}</time>
      )}

      {article.description && <p className="mt-4 text-[#374151]">{article.description}</p>}

      {article.blocks && article.blocks[0] ? (
        <article className="prose mt-6">
          <div dangerouslySetInnerHTML={{ __html: article.blocks[0].body }} />
        </article>
      ) : article.content ? (
        <article className="prose mt-6">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      ) : (
        <p className="mt-6 text-[#374151]">Tidak ada konten lengkap untuk berita ini.</p>
      )}
    </main>
  )
}
