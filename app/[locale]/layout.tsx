import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Private Jet Charter | CharterXe | Nigeria & 180+ Countries",
  description: "Charter a private jet in Nigeria with CharterXe. Enjoy unrivaled business or leisure trips. Skip queues, embrace boarding bliss. Your adventure begins when you say, 'Takeoff!'",
  keywords: "private jet charter, Nigeria, luxury travel, business travel, CharterXe",
  openGraph: {
    title: "Private Jet Charter | CharterXe | Nigeria & 180+ Countries",
    description: "Charter a private jet in Nigeria with CharterXe. Enjoy unrivaled business or leisure trips. Skip queues, embrace boarding bliss.",
    type: "website",
    url: "https://www.charterxe.com",
    images: [
      {
        url: "https://www.charterxe.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CharterXe Private Jet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CharterXe",
    title: "Private Jet Charter | CharterXe | Nigeria & 180+ Countries",
    description: "Charter a private jet in Nigeria with CharterXe. Enjoy unrivaled business or leisure trips.",
    images: ["https://www.charterxe.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.charterxe.com",
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <Script strategy="lazyOnload" id="gtm">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K4CSH6JL');
          `}
        </Script>

        <Script strategy="lazyOnload" id="fb-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '241851378558892');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=241851378558892&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        <Script strategy="afterInteractive" id="google-analytics">
          {`  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VJNRY6B5E0');
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R8YT5JCC1W"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CharterXe",
              "url": "https://www.charterxe.com",
              "logo": "https://www.charterxe.com/logo.png",
              "sameAs": [
                "https://web.facebook.com/people/Charterxe/100091496272290/",
                "https://twitter.com/CharterXE",
                "https://www.linkedin.com/company/charterxe"
              ]
            }
          `}
        </script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4CSH6JL"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}