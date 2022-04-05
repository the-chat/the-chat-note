import { Interface, useSidebarButtonsDefaultSortFn } from "@the-chat/ui-kit"
import makeStyles from "@mui/styles/makeStyles"
import { appWithTranslation } from "next-i18next"
import { FC, useState } from "react"
import { AppProps } from "next/app"
import { auth, db } from "utils/firebase"
import manifest from "public/manifest.json"
import { dependsOnToolbar } from "@the-chat/utils"
import { Theme } from "@mui/material"
import Head from "next/head"

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    ...dependsOnToolbar((toolbarHeight) => ({
      padding: toolbarHeight / parseInt(theme.spacing()),
    })),
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}))

const Root: FC = ({ children }) => {
  const { root } = useStyles()

  return <div className={root}>{children}</div>
}

const App = ({ Component, pageProps }: AppProps) => (
  <Interface
    configProviderValue={{
      auth,
      sidebarOpen: useState<boolean>(false),
      signOutArgs: [auth, "SIGN OUT", "ERROR"],
      newUser: false,
      containerMaxWidth: "xs",
      useSidebarButtons: () => useSidebarButtonsDefaultSortFn({}),
    }}
    appHead={{
      name: manifest.name,
      Head,
    }}
    userProviderParams={{
      db,
      path: "users/",
      useDefaultValueForDbDataInProviderWrapper: () => ({
        displayName: "",
        email: "",
        lang: "en",
        phoneNumber: "",
        photoURL: "",
        uid: "",
      }),
    }}
  >
    <Root>
      <Component {...pageProps} />
    </Root>
  </Interface>
)

export default appWithTranslation(App)
