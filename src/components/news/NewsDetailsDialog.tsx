// src/components/news/NewsDetailsDialog.tsx

import { useEffect, useRef, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import {  X } from "lucide-react";

import type { NewsItem } from "../../Types/news";

interface NewsDetailsDialogProps {
  news: NewsItem | null;
  onClose: () => void;
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function NewsDetailsDialog({
  news,
  onClose,
}: NewsDetailsDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!news) return;

    previousActiveElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      previousActiveElementRef.current?.focus();
    };
  }, [news]);

  useEffect(() => {
    if (!news) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [news, onClose]);

  if (!news || typeof document === "undefined") {
    return null;
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div role="dialog" aria-modal="true" aria-labelledby="news-dialog-title" aria-describedby="news-dialog-description" onMouseDown={handleBackdropClick} className="fixed inset-0 z-9999 flex h-dvh w-screen items-center justify-center overflow-hidden bg-slate-950/65 p-3 backdrop-blur-sm sm:p-5 md:p-6">
      <div className="relative flex max-h-[calc(100dvh-24px)] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] sm:max-h-[calc(100dvh-40px)] md:max-h-[calc(100dvh-48px)]">
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close news details" className="absolute right-3 top-3 z-40 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-slate-600 shadow-[0_5px_20px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/80 transition-all duration-300 hover:rotate-90 hover:bg-red-01 hover:text-white hover:ring-red-01 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-01 focus-visible:ring-offset-2 sm:right-4 sm:top-4 md:size-11">
          <X aria-hidden="true" size={19} />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="overflow-hidden rounded-2xl bg-[#F7F8FD]">
            <div className="relative h-52 overflow-hidden bg-slate-100 min-[350px]:h-58 sm:h-72 md:h-82 lg:h-92">
              <img src={news.image.url} alt={news.image.alt || news.title} decoding="async" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="px-1 pb-1 pt-5 sm:px-2 sm:pt-6 md:px-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex rounded-full bg-blue-01/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-blue-01">
                {news.category}
              </span>

              <span aria-hidden="true" className="hidden size-1 rounded-full bg-slate-300 sm:block" />

              <time dateTime={news.publishedAt} className="text-[11px] font-bold uppercase tracking-[0.06em] text-red-01">
                {formatDate(news.publishedAt)}
              </time>
            </div>

            <h2 id="news-dialog-title" className="mt-3 max-w-3xl text-[21px] font-extrabold leading-7 text-blue-01 min-[350px]:text-[23px] min-[350px]:leading-8 sm:text-[27px] sm:leading-9 md:text-[30px] md:leading-10">
              {news.title}
            </h2>

            <p id="news-dialog-description" className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 md:text-[15px] md:leading-7.5">
              {news.content ?? news.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}