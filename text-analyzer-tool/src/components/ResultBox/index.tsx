import { FC, useEffect, useState } from 'react'
import { ResultItem } from '../../types'
import { getResult } from '../../utils'
import './index.scss'

interface Props {
  text: string
}

const DEFAULT_RESULT: ResultItem[] = [
  {
    title: 'Words',
    value: 0,
  },
  {
    title: 'Characters',
    value: 0,
  },
  {
    title: 'Sentences',
    value: 0,
  },
  {
    title: 'Paragraphs',
    value: 0,
  },
  {
    title: 'Pronouns',
    value: 0,
  },
]

const ResultBox: FC<Props> = ({ text }) => {
  const [result, setResult] = useState<ResultItem[]>(DEFAULT_RESULT)

  useEffect(() => {
    setResult(
      DEFAULT_RESULT.map(({ title }) => ({
        title,
        value: getResult(text, title),
      }))
    )
  }, [text])

  return (
    <div className="result-bar">
      {result.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
