import Head from "next/head";
import Navigation from "./Navigation";
function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://www.alibaba.ir/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="https://www.alibaba.ir/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.alibaba.ir/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.alibaba.ir/favicon-16x16.png"
        />
        {/* font vazir */}
        <link
          href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <main className="bg-[#f6f6f6]">
        <Navigation />
        {props.children}
      </main>
    </div>
  );
}

Layout.defaultProps = {
  title: "بلیط هواپیما - خرید بلیط هواپیما | علی‌بابا",
};

export default Layout;
