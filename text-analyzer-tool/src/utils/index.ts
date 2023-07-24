import { pronouns } from '../data/pronouns'
import { ResultVariant } from '../types'

const filterEmptyWords = (input: string[]) => input.filter((part) => !!part.trim())

export const countCharacters = (input: string): number => {
  return input.length
}

export const countWords = (input: string): number => {
  return filterEmptyWords(input.split(' ')).length
}

export const countSentences = (input: string): number => {
  return filterEmptyWords(input.split(/[\w|\)][.?!](\s|$)/)).length
}

export const countParagraphs = (input: string): number => {
  return filterEmptyWords(input.split(/\r?\n|\r|\n/)).length
}

export const countPronouns = (input: string): number => {
  return pronouns
    .map((pronoun) => {
      const regex = new RegExp(`${pronoun}([^a-zA-Z0-9]|$)`, 'g')
      console.log('input.toLowerCase().match(regex): ', input.toLowerCase().match(regex))
      const count = new Set(input.toLowerCase().match(regex) ?? []).size
      return count
    })
    .reduce((acc, current) => acc + current, 0)
}

export const getResult = (input: string, resultVariant: ResultVariant) => {
  switch (resultVariant) {
    case 'Characters':
      return countCharacters(input)

    case 'Words':
      return countWords(input)

    case 'Paragraphs':
      return countParagraphs(input)

    case 'Sentences':
      return countSentences(input)

    case 'Pronouns':
      return countPronouns(input)

    default:
      return 0
  }
}

export const getAvgReadingTime = (input: string): string => {
  const mins = Math.ceil(countWords(input) / 225)
  return `~${mins} ${mins === 1 ? 'minute' : 'minutes'}`
}

export const getLongestWord = (input: string): string => {
  let maxLength = 0
  let longestWord = ''
  const words = filterEmptyWords(input.replace(/([^a-zA-Z0-9|\s])/g, '').split(' '))

  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length
      longestWord = word
    }
  })

  return longestWord
}
