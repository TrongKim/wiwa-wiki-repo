import React from "react";

// Regex để bắt các cụm số như 12%, 17.5%, 3 lần, 6 giây, 30s, 24.5%
const HIGHLIGHT_REGEX = /\d+(\.\d+)?(%| ?giây| ?s| times?| lần)?/gi;

export function highlightNumbers(text: string) {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(HIGHLIGHT_REGEX)) {
    const start = match.index ?? 0;
    const end = start + match[0].length;

    // Push phần trước đoạn match (nếu có)
    if (lastIndex < start) {
      elements.push(text.slice(lastIndex, start));
    }

    // Push đoạn được bọc span
    elements.push(
      <span key={start} className="text-[#60a5fa] font-medium">
        {match[0]}
      </span>
    );

    lastIndex = end;
  }

  // Push phần còn lại sau đoạn cuối cùng
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
}
export function highlightNumberPhrasesToHTML(text: string) {
  // Regex match các cụm như: "48.00%+96 Spectro DMG", "15s cooldown", "1.8 giây"
  const HIGHLIGHT_REGEX =
    /([\+\-]?\d+(\.\d+)?(%|s|giây)?)((\s?[A-Za-zÀ-Ỷà-ỷ]+){0,3})/g;

  const html = text.replace(HIGHLIGHT_REGEX, (match) => {
    // Trim đầu đuôi để tránh thừa khoảng trắng
    const trimmed = match.trim();
    return `<span class="text-[#60a5fa] font-medium">${trimmed}</span>`;
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
