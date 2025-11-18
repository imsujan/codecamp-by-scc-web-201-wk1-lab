// src/components/ResultBox.tsx
type Props = { result: string }
export default function ResultBox({ result }: Props) {
  return (
    <section id="result" className="result" aria-live="polite" tabIndex={-1}>
      {result || 'Your result will appear here…'}
    </section>
  )
}
