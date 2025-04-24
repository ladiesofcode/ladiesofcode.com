{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh16380\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import Layout from '../components/Layout';\
import styles from '../styles/Polish.module.css';\
\
const Tutorials = () => \{\
  return (\
    <Layout>\
      <div className=\{styles.page\}>\
        <h1 className=\{styles.title\}>Free Learning Resources</h1>\
        <p className=\{styles.intro\}>\
          Stay sharp and up to date with the best free resources from across the web.\
          We curate tutorials and guides on emerging technologies, open source tools,\
          and modern engineering practices.\
        </p>\
\
        <section className=\{styles.section\}>\
          <h2 className=\{styles.subtitle\}>\uc0\u55356 \u57104  Web Development</h2>\
          <ul className=\{styles.list\}>\
            <li><a href="https://frontendmasters.com" target="_blank">Frontend Masters</a></li>\
            <li><a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a></li>\
            <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>\
            <li><a href="https://www.theodinproject.com" target="_blank">The Odin Project</a></li>\
            <li><a href="https://web.dev" target="_blank">web.dev by Google</a></li>\
          </ul>\
        </section>\
\
        <section className=\{styles.section\}>\
          <h2 className=\{styles.subtitle\}>\uc0\u55357 \u56599  Web3 & Blockchain</h2>\
          <ul className=\{styles.list\}>\
            <li><a href="https://useweb3.xyz" target="_blank">useWeb3</a></li>\
            <li><a href="https://speedrunethereum.com" target="_blank">Speed Run Ethereum</a></li>\
            <li><a href="https://learn.figment.io" target="_blank">Figment Learn</a></li>\
            <li><a href="https://wiki.polkadot.network/docs/learn-polkadot-academy" target="_blank">Polkadot Blockchain Academy</a></li>\
          </ul>\
        </section>\
\
        <p className=\{styles.cta\}>\
          Got a resource we should add? <a href="https://airtable.com/appGtffIghBhP0div/pagatZKcaPsuUJ1cD/form" target="_blank">Submit it via Airtable</a>!\
        </p>\
      </div>\
    </Layout>\
  );\
\};\
\
export default Tutorials;\
}