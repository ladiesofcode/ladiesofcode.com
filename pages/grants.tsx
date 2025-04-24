{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh16380\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import Layout from '../components/Layout';\
import styles from '../styles/Polish.module.css';\
\
const Grants = () => \{\
  return (\
    <Layout>\
      <div className=\{styles.page\}>\
        <h1 className=\{styles.title\}>Grants & Funding Opportunities</h1>\
        <p className=\{styles.intro\}>\
          Looking for support to level up your work? We've curated a list of active grant programs from\
          leading technology foundations, DAOs, and non-profits.\
        </p>\
        <section className=\{styles.section\}>\
          <ul className=\{styles.list\}>\
            <li><a href="https://web3.foundation/grants/" target="_blank">Web3 Foundation Grants</a></li>\
            <li><a href="https://gitcoin.co/grants/" target="_blank">Gitcoin Grants</a></li>\
            <li><a href="https://ethereum.foundation/grants/" target="_blank">Ethereum Foundation Grants</a></li>\
            <li><a href="https://near.org/grants/" target="_blank">NEAR Foundation Grants</a></li>\
          </ul>\
        </section>\
        <p className=\{styles.cta\}>\
          Know of a grant we should feature? <a href="https://airtable.com/appGtffIghBhP0div/pag8ybGNzXmbhPZt9/form" target="_blank">Submit it via Airtable</a>.\
        </p>\
        <p className=\{styles.cta\}>\
          <strong>Add your grants program:</strong> <a href="https://airtable.com/appGtffIghBhP0div/pag8ybGNzXmbhPZt9/form" target="_blank">Submit here</a> if you're funding open source, education, or women in tech.\
        </p>\
      </div>\
    </Layout>\
  );\
\};\
\
export default Grants;\
}