import NewNote from "components/NewNote"
import NoteInList from "components/NoteInList"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import useNotes from "utils/useNotes"
import { Grid } from "@mui/material"

const Index = () => {
  const notes = useNotes()

  return (
    <>
      <NewNote />
      <Grid spacing={2} container>
        {notes.map((note) => (
          <NoteInList key={note.id} {...note} />
        ))}
      </Grid>
    </>
  )
}

export default Index
export const getStaticProps = nextJSPropsWithTranslation()
