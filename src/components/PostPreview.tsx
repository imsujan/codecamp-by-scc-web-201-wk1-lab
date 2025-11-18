type Props = { title: string; body: string }

export default function PostPreview({ title, body }: Props) {
  const safeTitle = title.trim()
  const safeBody = body.trim()

  return (
    <article aria-labelledby="post-title">
      <h2 id="post-title">{safeTitle || 'Your Post Title'}</h2>
      <p>{safeBody || 'Write something meaningful…'}</p>
    </article>
  )
}
