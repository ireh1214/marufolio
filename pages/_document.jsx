import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>PORTFOLIO</title>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="개발자 마루의 프로필 사이트입니다 :>"
          /> 
          <meta
            name="keywords"
            content="키워드,프로필,설명서,마루,개발자,프론트엔드,FE,개발,react,next.js"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:image" content="img/character2.png" />
          {/* 미리보기 이미지 */}
          <meta
            property="og:description"
            content="FE개발자, 이레의 프로필 사이트입니다 :>"
          />
          <meta property="og:title" content="ireh1214's main page!" />
          <meta name="google" content="notranslate" />

          {/* reset */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
          />
          {/* 파비콘 */}
          <link rel="icon" href="/favicon.ico" />
          {/* 메인 폰트 */}
          <link
            href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
            rel="stylesheet"
          />
          <link
            href="http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css"
            rel="stylesheet"
          />
          {/* 트윈맥스, 이번 사이트에선 쓰지 않음 */}
          {/* <NextScript
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
          />
          <NextScript
            type="text/javascript"
            src="https://unpkg.com/gsap@3/dist/ScrollToPlugin.min.js"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
