import NewNote from "components/NewNote"
import NoteV from "components/NoteV"
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
          <NoteV key={note.id} {...note} />
        ))}
      </Grid>
    </>
  )
}

export default Index
export const getStaticProps = nextJSPropsWithTranslation()
