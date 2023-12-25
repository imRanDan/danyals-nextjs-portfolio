import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import React from 'react'


function _app({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default _app