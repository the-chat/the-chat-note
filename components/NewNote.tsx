import getDb from "@the-chat/db"
import { useUser } from "@the-chat/use-user"
import { useRouter } from "next/router"
import { Note } from "types"
import { db } from "utils/firebase"
import { v4 } from "uuid"

const NewNote = () => {
  const { replace } = useRouter()
  const [{ uid }] = useUser()
  const { update } = getDb(db)

if(uid){
  const handleNew = () => {
    const newBlankNote: Note = {
      text: "",
      id: v4(),
    }

    // todo: catch
    update("users/" + uid + "/notes", {
      [newBlankNote.id]: newBlankNote,
    }).then(() => replace("/note/" + newBlankNote.id))
  }

  return (
    <>
      <button onClick={handleNew}>NEW</button>
    </>
  )
}

return null
}

export default NewNote
