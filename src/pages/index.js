import React, { useState, useEffect } from "react"
//import { Link } from "gatsby"
import Clock from "react-live-clock"
//import Layout from "../components/layout"
import MainLayout from "../components/mainLayout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import axios from "axios"

export const MyCurrentTime = () => {
  const myDefaultTimezone = "US/Pacific"
  const [currentTimezone, setCurrentTimezone] = React.useState(
    myDefaultTimezone
  )
  return (
    <div>
      <h2>My Current Time</h2>
      <h3>
        <Clock format={"dddd, MMMM Mo"} timezone={currentTimezone} />
      </h3>
      <h4>
        <Clock
          format={`h:mm:ss A z`}
          ticking={true}
          timezone={currentTimezone}
        />
      </h4>
    </div>
  )
}

export const VisitorClock = () => {
  const [visitorTimezone, setVisitorTimezone] = useState("")

  useEffect(() => {
    axios({
      method: "get",
      url: "https://ipapi.co/json",
    })
      .then(response => {
        console.log(response)
        setVisitorTimezone(response.data.timezone)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2>Your Current Time</h2>
      <h4>
        <Clock
          format={"h:mm:ss A zz"}
          ticking={true}
          timezone={`${visitorTimezone}`}
        />
        {visitorTimezone}
      </h4>
    </div>
  )
}

/* const IndexPage = () => (
  <div>
    <MainLayout>
      <SEO title="Home" />
      <h1> Gamer, Nerd, Dreamer </h1>
      <MyClock />
      <VisitorClock />
      <p>Welcome to my personal website!</p>
      <p>Thanks for wanting to learn more about me. </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </MainLayout>
  </div>
) */

const IndexPage = () => {
  return (
    <div>
      <MyCurrentTime></MyCurrentTime>
      <VisitorClock />
      <MainLayout></MainLayout>
    </div>
  )
}

export default IndexPage
