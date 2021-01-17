import { Layout } from "./layout";
import '../../styles/globals.css'

const SakilaClientFilm = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default SakilaClientFilm;
