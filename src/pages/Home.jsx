import React from "react"
import MainContent from "../components/MainContent"
import Sidebar from "../components/Sidebar"
import "../styles/pages/app.scss"

const Home = () => {
  return (
    <section id="container">
      <div id="portfolio">
      <Sidebar/>
      <MainContent/>
      </div>
    </section>
  )
}

export default Home




