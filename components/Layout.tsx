{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React from 'react';\
import Link from 'next/link';\
\
const Layout = (\{ children \}: \{ children: React.ReactNode \}) => \{\
  return (\
    <div>\
      <nav style=\{\{ padding: '1rem', backgroundColor: 'var(--purple)', color: 'white' \}\}>\
        <Link href="/" style=\{\{ marginRight: '1rem', fontWeight: 600 \}\}>Home</Link>\
        <Link href="/events" style=\{\{ marginRight: '1rem' \}\}>Events</Link>\
        <Link href="/jobs" style=\{\{ marginRight: '1rem' \}\}>Jobs</Link>\
        <Link href="/grants" style=\{\{ marginRight: '1rem' \}\}>Grants</Link>\
        <Link href="/tutorials" style=\{\{ marginRight: '1rem' \}\}>Tutorials</Link>\
        <Link href="/chapters">Chapters</Link>\
      </nav>\
      <main style=\{\{ padding: '2rem' \}\}>\{children\}</main>\
      <footer style=\{\{ textAlign: 'center', padding: '2rem', backgroundColor: '#f2f2f2' \}\}>\
        \'a9 Ladies of Code \{new Date().getFullYear()\} | Built with \uc0\u55357 \u56476 \
      </footer>\
    </div>\
  );\
\};\
\
export default Layout;\
}