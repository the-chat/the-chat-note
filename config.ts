import EditLocationIcon from "@mui/icons-material/EditLocation"
import TagIcon from "@mui/icons-material/Tag"
import { SvgIconComponent } from "@mui/icons-material"

export const marksConfig: Record<
  string,
  {
    DefaultIcon: SvgIconComponent
    text: string
  }
> = {
  location: {
    DefaultIcon: EditLocationIcon,
    text: "",
  },
  tag: {
    DefaultIcon: TagIcon,
    text: "",
  },
}
