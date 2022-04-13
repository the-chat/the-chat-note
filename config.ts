import EditLocationIcon from "@mui/icons-material/EditLocation"
import TagIcon from "@mui/icons-material/Tag"
import { SvgIconComponent } from "@mui/icons-material"
import { SetState } from "@the-chat/types"
import { Marks } from "types"

export const marksConfig: Record<
  Marks,
  {
    DefaultIcon: SvgIconComponent
    text: string
    getOnClick: (setOpen: SetState<boolean>) => () => void
  }
> = {
  location: {
    DefaultIcon: EditLocationIcon,
    text: "Choose Location",
    getOnClick: (setOpen) => () => {
      setOpen(true)
    },
  },
  tag: {
    DefaultIcon: TagIcon,
    text: "Choose Tag",
    getOnClick: (setOpen) => () => {
      setOpen(true)
    },
  },
}
