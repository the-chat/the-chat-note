import { useUser } from "@the-chat/use-user"

const useNotes = (id?: string) => {
  const [{ notes }] = useUser()
  console.log(notes)
  return notes || []
}

export default useNotes
