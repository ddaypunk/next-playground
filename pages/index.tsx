import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { HomeCard } from '../components/HomeCard'
import { CounterButton } from '../components/CounterButton'
import {Layout} from "../components/Layout";

// Add a form with input and form with text area like in React examples
// Add a select like in React examples

const Home: NextPage = () => {
  return (
      <Layout>
        <h1 className={styles.title}>
          Welcome to the Selenium Playground!
        </h1>

        <div className={styles.grid}>
          <HomeCard
              heading = "Inputs"
              description = "Test your scripts against different inputs"
              page = "/inputs"
          />

          <HomeCard
              heading = "Documentation"
              description = "Find in-depth information about Next.js features and API."
              page = "https://nextjs.org/docs"
          />

          <HomeCard
              heading = "Learn"
              description = "Learn about Next.js in an interactive course with quizzes!"
              page = "https://nextjs.org/learn"
          />

          <HomeCard
              heading = "Examples"
              description = "Discover and deploy boilerplate example Next.js projects"
              page = "https://github.com/vercel/next.js/tree/master/examples"
          />

          <CounterButton />
          <CounterButton isDisabled={true}/>
        </div>
      </Layout>
  )
}

export default Home
