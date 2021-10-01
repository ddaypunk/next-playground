import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomeCard } from './components/HomeCard'

// Add a form with input and form with text area like in React examples
// Add a select like in React examples

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Selenium Playground</title>
        <meta name="A place to learn selenium" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Selenium Playground!
        </h1>

        <div className={styles.grid}>
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

          <HomeCard
              heading = "Component Model"
              description = "Something something description"
              page = "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
