import './style.css'

import { GlobalProvider } from '../global-context'

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
