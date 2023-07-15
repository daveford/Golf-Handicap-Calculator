import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react';
import { calculateGolfHandicap } from '../logic/calculation';

export default function Home() {
  const [slopeRating, setSlopeRating] = useState(0.0);
  const [courseRating, setCourseRating] = useState(0.0);
  const [scoresInput, setScoresInput] = useState("");
  const [handicap, setHandicap] = useState(0.0);

  function performCalculation(){
    console.log(scoresInput);
    const scores = scoresInput.split(",");
    const result = calculateGolfHandicap(scores, courseRating, slopeRating);
    setHandicap(result);

    setSlopeRating(0.0);
    setCourseRating(0.0);
    setScoresInput("");
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Enter a comma seperated list of 9 hole golf scores.
        </p>
        <input id="scoreListInput" value={scoresInput} onChange={e => {setScoresInput(e.currentTarget.value)}}></input>

        <p className="description">
          Enter the course slope rating
        </p>
        <input id="courseSlopeRatingInput" value={slopeRating} onChange={e => {setSlopeRating(e.currentTarget.value)}}></input>

        <p className="description">
          Enter the course rating
        </p>
        <input id="courseRatingInput" value={courseRating} onChange={ e => {setCourseRating(e.currentTarget.value)}}></input>
        <br/>
        <button id="calculateHandicapBtn" onClick={() => performCalculation()}>Submit</button>
        <p className="description">Handicap: {handicap}</p>
      </main>

      <Footer />
    </div>
  )
}
