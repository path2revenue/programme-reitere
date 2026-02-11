import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/site.config";
import MetaCapiPageView from "./components/MetaCapiPageView";

const { meta, design } = siteConfig;

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.ogTitle || meta.title,
    description: meta.ogDescription || meta.description,
    images: meta.ogImage ? [meta.ogImage] : [],
    locale: meta.lang || "fr",
    type: "website",
  },
  icons: {
    icon: meta.favicon?.startsWith("/")
      ? meta.favicon
      : `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${encodeURIComponent(meta.favicon || "⚡")}</text></svg>`,
  },
};

const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(design.fontHeading)}:wght@${design.fontWeights}&display=swap${design.fontBody !== design.fontHeading
  ? `&family=${encodeURIComponent(design.fontBody)}:wght@${design.fontWeights}&display=swap`
  : ""
  }`;

export default function RootLayout({ children }) {
  return (
    <html lang={meta.lang || "fr"} data-palette={design.palette}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontUrl} rel="stylesheet" />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2356012161504530&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: `'${design.fontBody}', sans-serif` }}
      >
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2356012161504530');fbq('track','PageView');`}
        </Script>
        <MetaCapiPageView />
      </body>
    </html>
  );
}
