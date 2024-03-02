import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"

function _app({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default _app