import { Fab, FabProps, Zoom, useTheme } from "@mui/material"
import { PropsWithChildren } from "react"

export type FabFixedProps = PropsWithChildren<{ in: boolean }>

const FabFixed = (props: FabFixedProps & FabProps) => {
  const theme = useTheme()

  return (
    <Zoom in={props.in}>
      <Fab
        sx={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
          ...props.sx,
        }}
      >
        {props.children}
      </Fab>
    </Zoom>
  )
}

export default FabFixed
