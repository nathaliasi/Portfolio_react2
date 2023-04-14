import React from "react"
import MainContent from "../components/MainContent"
import Sidebar from "../components/Sidebar"
import "../styles/pages/app.scss"

const Home = () => {
  return (
    <section id="container">
    <h1>Nathália Sardou</h1>
      <div id="portfolio">
      <Sidebar/>
      <MainContent/>
    </div>
    </section>
  )
}

export default Home




