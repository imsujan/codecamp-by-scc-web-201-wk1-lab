// src/App.tsx
import { useState } from 'react'
import TextArea from './components/TextArea'
import Buttons from './components/Buttons'
import ResultBox from './components/ResultBox'
import { reverseText, countWords, toTitleCase } from './utils/textTools'
import './styles.css' // or use the existing CSS file in the repo
import PostPreview from './components/PostPreview'

export default function App() {
  const [text, setText] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const handleReverse = () => setResult(reverseText(text))
  const handleTitleCase = () => setResult(toTitleCase(text))
  const handleCount = () => setResult(`Word Count: ${countWords(text)}`)

  return (
    <main className="container">
      <a className="skip" href="#result">
        Skip to result
      </a>
      <h1>Mini Text Toolkit</h1>
      <TextArea value={text} onChange={setText} />
      <Buttons
        disabled={!text}
        onReverse={handleReverse}
        onTitleCase={handleTitleCase}
        onCount={handleCount}
      />
      <ResultBox result={result} />
      <hr />
      <h2>Mini-Medium Preview</h2>
      <label htmlFor="title" className="label">
        Post title
      </label>
      <input
        id="title"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="A crisp headline"
      />
      <PostPreview title={text} body={result} />
      <footer className="footer">
        Built by <strong>Your Name</strong> · Week 1
      </footer>
    </main>
  )
}
