import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="vh-100 ph3 flex flex-column items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="ph3 flex flex-auto flex-column items-center justify-center">
        <h1 className="f-subheadline">
          Welcome to{" "}
          <a href="https://nextjs.org" className="blue no-underline">
            Next.js!
          </a>
        </h1>

        <p className="f4">
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className="flex items-center justify-center flex-wrap mw7 mt5">
          <Card href="https://nextjs.org/docs">
            <h2 className="mt0 mb3">Documentation &rarr;</h2>
            <p className="f5 lh-copy ma0">
              Find in-depth information about Next.js features and API.
            </p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h2 className="mt0 mb3">Learn &rarr;</h2>
            <p className="f5 lh-copy ma0">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/master/examples">
            <h2 className="mt0 mb3">Examples &rarr;</h2>
            <p className="f5 lh-copy ma0">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </Card>

          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2 className="mt0 mb3">Deploy &rarr;</h2>
            <p className="f5 lh-copy ma0">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </div>
      </main>

      <footer className="h4 bt b--light-gray w-100 flex items-center justify-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
