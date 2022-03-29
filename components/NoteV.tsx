import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Grid, IconButton, CardActionArea, CardActions } from "@mui/material"
import { Note } from "types"
import { Link } from "@the-chat/ui-kit"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// todo: img next
const NoteV = ({ id, title, text, photoSrc }: Note) => (
  <Grid item>
    <Card>
      <Link href={"/note/" + id}>
        <CardActionArea>
          {photoSrc && <CardMedia component="img" image={photoSrc} />}
          <CardContent>
            <Typography gutterBottom={text} variant="h5">
              <textarea>{title}</textarea>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
)

export default NoteV
