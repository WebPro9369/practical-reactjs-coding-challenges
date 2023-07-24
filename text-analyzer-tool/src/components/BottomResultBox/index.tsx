import { FC, useEffect, useState } from 'react'
import { getAvgReadingTime, getLongestWord } from '../../utils'
import { FooterResult } from '../../types'
import './index.scss'

interface Props {
  text: string
}

const DEFAULT_VALUES: FooterResult[] = [
  {
    title: 'Average Reading Time:',
    value: '-',
  },
  {
    title: 'Longest word:',
    value: '-',
  },
]

const BottomResultBox: FC<Props> = ({ text }) => {
  const [values, setValues] = useState<FooterResult[]>(DEFAULT_VALUES)

  useEffect(() => {
    setValues(
      DEFAULT_VALUES.map(({ title }) => ({
        title,
        value: title === 'Average Reading Time:' ? getAvgReadingTime(text) : getLongestWord(text),
      }))
    )
  }, [text])

  return (
    <div className="bottom-result-bar">
      {values.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
