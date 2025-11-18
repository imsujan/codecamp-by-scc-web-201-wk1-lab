// src/components/TextArea.tsx
type Props = {
  value: string
  onChange: (val: string) => void
}
export default function TextArea({ value, onChange }: Props) {
  return (
    <>
      <label htmlFor="input" className="label">
        Enter text
      </label>
      <textarea
        id="input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Type or paste text here…"
        aria-describedby="help"
      />
      <p id="help" className="help">
        Local only — nothing is sent to a server.
      </p>
    </>
  )
}
