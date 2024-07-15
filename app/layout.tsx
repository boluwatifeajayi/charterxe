import {PropsWithChildren} from 'react';
import type { Metadata } from "next";
import "./globals.css";


// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default ({children}: PropsWithChildren) => children;

export const metadata: Metadata = {
  title:
    "Private Jet Charter | Private Jet In Nigeria and over 180 Countries",
  description:
    'Charter a private jet in Nigeria with CharterXe. Private jet hire for unrivaled business or leisure trips. Bid farewell to queues, and embrace boarding bliss. Your adventure begins when you say, "Takeoff!"',
};

/* import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Charterxe | Private Jet Charter | Private Jet In Nigeria and over 180 Countries",
  description:
    'Charter a private jet in Nigeria with CharterXe. Private jet hire for unrivaled business or leisure trips. Bid farewell to queues, and embrace boarding bliss. Your adventure begins when you say, "Takeoff!"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <Script strategy="lazyOnload">
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

        <Script>
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
            className="hidden"
            src="https://www.facebook.com/tr?id=241851378558892&ev=PageView&noscript=1"
          />
        </noscript>
        <Script strategy="afterInteractive" id="google analytics tag">
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
      </head>
      <body>
        {children}
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
 */