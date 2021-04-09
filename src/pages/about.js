import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head pageTitle="About" />
      <span className={aboutStyles.pagetitle}>About</span>
      <h1>👋 The Introspection</h1>
      <p>
        Hi my names Faesel Saeed, I'm a software engineer with over a decade of experience working across the stack from a spectrum ranging from backend infrastructure
        to frontend CSS and all the bits in-between. If you stick around you can learn a bit more about me.
      </p>
      <h1>💪 How I got into software engineering</h1>
      <p>My interest in everything digital began very early on playing computer games on my <a href="https://en.wikipedia.org/wiki/Amiga" rel="nofollow" target="_blank">Amiga Commodore</a>,
        and generally messing with things I didn't know about. Having later upgraded to a desktop with Windows 95 my adolescent brain was blown as I entertained myself 
        with minesweeper, connecting to the internet using my dialup connection and being amused by Clippy in Microsoft Word whilst doing my homework. From that point 
        on my career path had been set in stone as I recognised I had to get a job that involved tech!</p>
      <p>My first introduction to anything Software Engineer related was actually in college as I was first introduced to a language called <a href="https://en.wikipedia.org/wiki/Pascal_(programming_language)" rel="nofollow" target="_blank">Pascal</a>.
      I still vividly remember carrying out my assignment in printing out numbers from 1 to 100 and feeling like a true hacker.</p>
      <p>Having progressed to university I later studied Computer Science with Games Technology, as then I thought I was going to be a games developer. I kind of got close to that career path as I worked as a games tester at SAGA during my summer holidays (I even feature in the credits that nobody reads of some of their games, <a href="https://wiki.totalwar.com/w/Credits_(M2TW).html">Medieval Total War</a>.</p>
      <p>University had introduced me to Java (this was before the days Microsoft had gone opensource and had free dev tools), and C++ which is predominantly used with game engines due to the memory efficiencies. I later also picked up C# whilst working on my final year thesis project.</p>
      <backquote>Its time to take off these academic shekels and venture into the working world</backquote>
      <p>As soon as I wrapped up university in 2008 the <a href="https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008">financial crisis</a> happened , which made finding a job challenging. It was at this point that I pivoted from games technology which only really had a few companies in the UK (this was before mobile games exploded), to web applications and have been loving it since!</p>
      <h1>💻 My Professional Career</h1>
      <p>Landing my first job as a Junior Software Engineer, I started with C# .NET 2.0, ASP.NET Web Forms and SQL (simple times ... ), and have since evolved my plethora of languages and tools as the spectrum has widened over time.</p>
      <blockquote>Software engineers will always remain students of their profession, with every passing year there's always something new to learn.</blockquote>
      <p>Having worked my way up the career ladder and gained seniority I've had the pleasure to mentor younger engineers from apprentices into fully-fledged software engineers, leading teams of various sizes and abilities. As well as shaping products with a very KPI orientated midframe.</p>
      <p>Being a stickler of software engineering processes (and have having beared witness to some serious horrors), I've helped mould company culture and refined processes.</p>
      <p>You can read more about my career history on my <a href="https://www.linkedin.com/in/faesel-saeed-%F0%9F%92%BB-a97b1614/ page">Linked In profile</a></p>
      <h1>🧾 Writing my blog</h1>
      <p>Having got better at self-directed learning, I started to document everything I learned in One Note and began to build up a reference point for things like useful commands, best practices and gotchas. Over time I realised that my notes could be a good source of information for others too, so I started blogging some of my findings, and that's how this blog came into creation (you could say it's more for me than for others). Whatever I write on my blog are content and opinions of my own.</p>
      <h1>📦 Open Source Projects</h1>
      <p>I recently started getting involved in my own opensource projects, you can check them out on my <a href="https://www.faesel.com/projects">projects page</a>. Do give me a star if you think their of some value ... it helps motivate me 😉.</p>
      <h1>🙏 Thank You</h1>
      <p>If you got this far thank you for reading up about me, if you want to get in contact I'm on several social platforms. You can get a full list <a href="https://www.faesel.com/contact">here</a></p>
    </Layout>
  )
}

export default AboutPage
