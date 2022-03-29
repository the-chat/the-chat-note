import NewNote from "components/NewNote"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import useNotes from "utils/useNotes"

const Index = () => {
  const notes = useNotes()

  return (
    <>
      Your notes!
      {notes.map((note) => note.text)}
      <NewNote />
    </>
  )
}

export default Index
export const getStaticProps = nextJSPropsWithTranslation()
