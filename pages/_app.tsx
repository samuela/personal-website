// See https://stackoverflow.com/a/60673785/3880977
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Personal website of Samuel Ainsworth"
        />

        {/* See https://stackoverflow.com/questions/24428476/target-blank-in-all-link */}
        <base target="_blank" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2B3B8YF3B7"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2B3B8YF3B7', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        {/* For bootstrap */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
