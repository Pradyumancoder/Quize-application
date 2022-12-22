import { AuthProvider } from '../context/Auth'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbarglobal from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
    <AuthProvider >
   <Navbarglobal />
     <Component {...pageProps} />
    </AuthProvider>
     </>
     )
}
