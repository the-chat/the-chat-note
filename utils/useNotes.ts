import { useUser } from "@the-chat/use-user"
import { Note } from "types"

function useNotes(): Note[]
function useNotes(id: string): Note
function useNotes(id?: string) {
  const [{ notes = [] }] = useUser()

  if (id) return notes.filter((x) => x.id == id)[0]
  return notes
}

export default useNotes
