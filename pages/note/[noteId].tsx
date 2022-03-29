import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import { useRouter } from "next/router"
import useNotes from "utils/useNotes"
import NoteV from "components/NoteV"

const Note = () => {
  const { noteId } = useRouter().query
  const note = useNotes(noteId)

  return <NoteV {...note} />
}

export default Note
export const getServerSideProps = nextJSPropsWithTranslation()
