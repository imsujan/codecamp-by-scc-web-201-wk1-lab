// src/utils/textTools.ts

/** Reverse text safely (handles most emoji/grapheme combos) */
export function reverseText(input: string): string {
  return [...input].reverse().join('')
}

/** Count words separated by whitespace; returns 0 for empty/whitespace-only input */
export function countWords(input: string): number {
  const t = input.trim()
  return t ? t.split(/\s+/).length : 0
}

/** Convert to Title Case (simple English heuristic) */
export function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(/\s+/)
    .map(w => (w ? w[0].toUpperCase() + w.slice(1) : ''))
    .join(' ')
}
