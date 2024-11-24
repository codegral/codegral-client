import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="transition-all">
        <Main />
        <NextScript />
        <div id="offcanvas-backdrop"></div>
      </body>
    </Html>
  );
}
