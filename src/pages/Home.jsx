import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { request } from '../request'

function Home() {
  return (
    <>
      <Main />
      <Row rowID='1' title='Trending' fetchURL={request.requestTrending} />
      <Row rowID='2' title='Up Coming' fetchURL={request.requestUpComing} />
      <Row rowID='3' title='Popular' fetchURL={request.requestPopular} />
      <Row rowID='4' title='Horror' fetchURL={request.requestHorrorMovies} />
      <Row rowID='5' title='Top Rated' fetchURL={request.requestTopRate} />
    </>
  )
}

export default Home