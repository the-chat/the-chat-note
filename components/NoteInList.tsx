import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Grid, IconButton, CardActionArea, CardActions } from "@mui/material"
import { Note } from "types"
import { Link } from "@the-chat/ui-kit"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// todo: img nextjs
const NoteInList = ({ id, title, text, photoSrc }: Note) => (
  <Grid item>
    <Card>
      <Link
        href={"/note/" + id}
        color="inherit"
        sx={{ textDecoration: "none" }}
      >
        <CardActionArea>
          {photoSrc && <CardMedia component="img" image={photoSrc} />}
          <CardContent>
            <Typography gutterBottom={!!text} variant="h5">
              {title}
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

export default NoteInList
