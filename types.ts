export type Marks = "location" | "tag"

type Id = {
  id: string
}

type MarksInNote = {
  marks: Partial<Record<Marks, string>>
}

type Info = Partial<Record<"title" | "text" | "photoSrc", string>>

export type Note = Id & MarksInNote & Info
