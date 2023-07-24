export type ResultVariant = 'Words' | 'Characters' | 'Sentences' | 'Paragraphs' | 'Pronouns'

export interface ResultItem {
  title: ResultVariant
  value: number
}

export interface FooterResult {
  title: string
  value: string | number
}
