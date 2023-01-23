import Head from "next/head";



import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="shortcut icon" href="../public/profileimage/logo.png" type="image/x-icon"/> */}
      </Head>
        <Component {...pageProps} /> 
    </>
  );
}

export default MyApp;
