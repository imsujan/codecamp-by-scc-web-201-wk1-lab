// src/components/Buttons.tsx
type Props = {
  disabled: boolean
  onReverse: () => void
  onTitleCase: () => void
  onCount: () => void
}
export default function Buttons({
  disabled,
  onReverse,
  onTitleCase,
  onCount,
}: Props) {
  return (
    <div className="buttons">
      <button onClick={onReverse} disabled={disabled}>
        Reverse
      </button>
      <button onClick={onTitleCase} disabled={disabled}>
        Title&nbsp;Case
      </button>
      <button onClick={onCount} disabled={disabled}>
        Count&nbsp;Words
      </button>
    </div>
  )
}
