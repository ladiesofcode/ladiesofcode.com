{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh16380\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import Layout from '../components/Layout';\
import styles from '../styles/Polish.module.css';\
\
const Chapters = () => \{\
  return (\
    <Layout>\
      <div className=\{styles.page\}>\
        <h1 className=\{styles.title\}>Start a Local Chapter</h1>\
        <p className=\{styles.intro\}>\
          Ladies of Code chapters are active in cities around the world. Our local organizers host meetups,\
          workshops, and community events. Find your city or start your own!\
        </p>\
        <section className=\{styles.section\}>\
          <ul className=\{styles.list\}>\
            <li><a href="https://www.meetup.com/ladiesofcode-london/" target="_blank">London</a></li>\
            <li><a href="https://www.meetup.com/ladiesofcode-manchester/" target="_blank">Manchester</a></li>\
            <li><a href="https://www.meetup.com/ladiesofcode-paris/" target="_blank">Paris</a></li>\
            <li><a href="https://www.meetup.com/ladiesofcode-berlin/" target="_blank">Berlin</a></li>\
            <li><a href="https://www.meetup.com/ladiesofcode-nyc/" target="_blank">New York</a></li>\
          </ul>\
        </section>\
        <p className=\{styles.cta\}>\
          <strong>Lead a community:</strong> <a href="https://airtable.com/appGtffIghBhP0div/paggUeP28Hdp5nqTN/form" target="_blank">Apply via Airtable</a> \'97 we\'92ll help with funding, mentorship, and promotion.\
        </p>\
      </div>\
    </Layout>\
  );\
\};\
\
export default Chapters;\
}