import { ChangeEvent, FC } from 'react'
import './index.scss'

interface Props {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<Props> = ({ onChange }) => {
  return (
    <textarea
      autoFocus
      className="text-area"
      placeholder="Paste your text here..."
      onChange={onChange}
    />
  )
}

export default TextArea
