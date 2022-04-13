import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import { useRouter } from "next/router"
import useNotes from "utils/useNotes"
import {
  TextareaAutosize,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TypographyProps,
  IconButton,
} from "@mui/material"
import { useState } from "react"
import objectEquals from "object-equals"
import { Save } from "@mui/icons-material"
import { InputFile } from "@the-chat/ui-kit"
import { OnInputEvent } from "@the-chat/types"
import { update } from "utils/db"
import { Note } from "types"
import { useUser } from "@the-chat/use-user"
import FabFixed, { FabFixedProps } from "components/FabFixed"
import { marksConfig } from "config"

const useNoteId = () => useRouter().query.noteId as string

const SaveButton = (props: FabFixedProps & { editedNote: Note }) => {
  const id = useNoteId()
  const [{ uid }] = useUser()

  const handleSave = () =>
    update("users/" + uid + "/notes/" + id, props.editedNote)

  return (
    <FabFixed color="success" in={props.in} onClick={handleSave}>
      <Save />
    </FabFixed>
  )
}

const Input = (
  p: Pick<
    TypographyProps,
    "color" | "placeholder" | "gutterBottom" | "variant" | "onInput"
  > & { value: string }
) => (
  <Typography
    component={TextareaAutosize}
    sx={{
      border: "none",
      resize: "none",
      width: "100%",
      "&:focus": {
        outline: "1px solid #000",
      },
    }}
    {...p}
  />
)

const Photo = ({ photoSrc }) =>
  photoSrc ? (
    <InputFile
      onChange={(ev) => console.log(ev["files"])}
      componentProps={{}}
      Tag={CardActionArea}
    >
      <CardMedia component="img" image={photoSrc} />
    </InputFile>
  ) : null

const Note = () => {
  const noteId = useNoteId()
  const note = useNotes(noteId)

  const [editedNote, setNoteData] = useState(note)
  const { photoSrc, marks, text, title } = editedNote

  return (
    <Card>
      <Photo photoSrc={photoSrc} />
      <CardContent>
        <Input
          placeholder="Input title... (T)"
          gutterBottom={true}
          value={title}
          onInput={(ev: OnInputEvent) =>
            setNoteData((note) => ({ ...note, title: ev.target.value }))
          }
          variant="h3"
        />
        <Input
          placeholder="Input text... (T)"
          value={text}
          onInput={(ev: OnInputEvent) =>
            setNoteData((note) => ({ ...note, text: ev.target.value }))
          }
          variant="body2"
          color="text.secondary"
        />
      </CardContent>
      {Object.entries(marks).map(([mark, value]) => {
        const Icon = marksConfig[mark].DefaultIcon

        return (
          <IconButton>
            <Icon />
          </IconButton>
        )
      })}
      {/* <CardActions>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </CardActions> */}
      <SaveButton
        editedNote={editedNote}
        in={!objectEquals(note, editedNote)}
      />
    </Card>
  )
}

export default Note
export const getServerSideProps = nextJSPropsWithTranslation()
