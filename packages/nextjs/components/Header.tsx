import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu } from "~~/components/Menu";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header = () => (
  <>
    <Head>
      <title>Mercs</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <meta
        name="description"
        content="Funding BuidlGuidl Mercs with oETH streams for quietly having important impact on Ethereum."
      />
      <meta property="og:title" content="Mercs" />
      <meta
        property="og:description"
        content="Funding BuidlGuidl Mercs with oETH streams for quietly having important impact on Ethereum."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="https://mercs.buidlguidl.com/thumbnail.png" />
      <meta property="twitter:image" content="https://mercs.buidlguidl.com/thumbnail.png" />
    </Head>
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 p-4 items-start">
      <div className="flex-col items-start">
        <p className="m-0 text-xl md:text-3xl font-bold text-secondary !leading-7">
          <Link href="/">Mercs</Link>
        </p>
        <p className="m-0 text-secondary leading-5 opacity-50"></p>
      </div>
      <div className="navbar-end flex-grow">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
    <Menu />
  </>
);
