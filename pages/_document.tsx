import Document, { Head, Html, Main, NextScript } from "next/document"
import { defaultProps, DocumentHead } from "@the-chat/ui-kit"
import manifest from "../public/manifest.json"
import { ServerStyleSheets } from "@mui/styles"
import { Children } from "react"

// learn: Dcoument to func
// learn: should i translate all this metatags
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <DocumentHead
            {...defaultProps({
              twitter: {
                creator: "@TheChat",
              },
              iconUrl: manifest.icons[0].src,
              description: "The super startup",
              title: manifest.name,
              url: "https://the-chat.vercel.app",
            })}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // learn
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
