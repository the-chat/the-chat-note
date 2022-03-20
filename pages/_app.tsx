import { Interface, useSidebarButtonsDefaultSortFn } from "@the-chat/ui-kit"
import { useRouter } from "next/router"
import makeStyles from "@mui/styles/makeStyles"
import { useUser } from "@the-chat/use-user"
import { appWithTranslation } from "next-i18next"
import { FC, useState } from "react"
import { AppProps } from "next/app"
import { auth, db } from "utils/firebase"
import { INFO, SSO } from "@the-chat/config"

const useStyles = makeStyles({
  root: { display: "flex", flexDirection: "column", minHeight: "100vh" },
})

const PageLayout: FC = ({ children }) => {
  const { root } = useStyles()
  const { push, locale, pathname } = useRouter()
  const [dbData, user, , { dbError }] = useUser()

  if (!dbError && user) {
    // learn: is pathname a currect property
    if (dbData.lang != locale) push(pathname, pathname, { locale: dbData.lang })
  }

  return <div className={root}>{children}</div>
}

const App = ({ Component, pageProps }: AppProps) => (
  <Interface
    configProviderValue={{
      auth,
      sidebarOpen: useState<boolean>(false),
      signOutArgs: [auth, "SIGN OUT", "ERROR"],
      newUser: true,
      containerMaxWidth: "xs",
      useSidebarButtons: () => useSidebarButtonsDefaultSortFn({}),
      InfoConfig: {
        ...INFO,
        HOST: INFO.DEFAULT_INFO_HOST,
      },
      SSOConfig: {
        ...SSO,
        HOST: SSO.DEFAULT_SSO_HOST,
      },
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
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </Interface>
)

export default appWithTranslation(App)
