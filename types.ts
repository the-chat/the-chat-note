type Id = {
  id: string
}

type Marks = {
  marks: Partial<Record<"location" | "tag", string>>
}

type Info = Partial<Record<"title" | "text" | "photoSrc", string>>

export type Note = Id & Marks & Info
