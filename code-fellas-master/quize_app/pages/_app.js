import { AuthProvider } from '../context/Auth'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <AuthProvider >
     <Component {...pageProps} />
    </AuthProvider>
     </>
     )
}
