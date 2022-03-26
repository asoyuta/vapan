export type Character = {
  name: {
    JP: {
      nihongo: string[]
      furigana: string[]
    }
    EN: string
  }
  icon: StaticImageData
  twitter?: string
  youtube?: string
}
