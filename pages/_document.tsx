import Document, { Head, Html, Main, NextScript } from "next/document"
import { defaultProps, DocumentHead } from "@the-chat/ui-kit"
import manifest from "../public/manifest.json"

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
