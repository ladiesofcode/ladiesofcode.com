{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import Layout from '../components/Layout';\
import styles from '../styles/Polish.module.css';\
\
const Jobs = () => \{\
  return (\
    <Layout>\
      <div className=\{styles.page\}>\
        <h1 className=\{styles.title\}>Job Board</h1>\
        <p className=\{styles.intro\}>\
          Explore open roles from across the Web3 and tech ecosystem, curated by Ladies of Code.\
        </p>\
        <section className=\{styles.section\}>\
          <iframe\
            src="https://airtable.com/appGtffIghBhP0div/pagmH2w5k6xZWwtws/form"\
            width="100%"\
            height="800"\
            style=\{\{ border: 'none' \}\}\
            title="Job Listings Form"\
          ></iframe>\
        </section>\
      </div>\
    </Layout>\
  );\
\};\
\
export default Jobs;\
}