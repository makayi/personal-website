import type { NextPage } from "next";
import Head from "next/head";
import {IconContext} from 'react-icons'
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn, FaMediumM}  from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mbuyu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between"> 
            <h1 className="text-xl text-lime-400">Developyed by</h1>
            <ul className="flex items-center">
              <li>
                <a className="text-lime-400 px-6 py-2" href="#">Resume</a>
              </li>

              <li>
                <a className="text-lime-400 " href="#">Email</a>
              </li>
            </ul>
          </nav>

          <div id="main" className="text-center p-10">
             <p className="text-md py-5 text-white font-medium text-start">Hi there! My name is</p>
            <h2 className="text-5xl py-5 text-lime-400 font-medium text-start"> Mbuyu Makayi</h2>
            <p className="text-md py-5 text-white font-medium text-start ">
              I am a Backend Software Engineer, Tech Community Builder, <br></br>currently building stuff to get the next billion of Africans financially included.
              </p>
            <h3 className="text-3xl text-lime-400 text-start py-5">See more about me</h3>
          </div>

          <div className="text-3xl flex justify-start gap-16 py-3 px-8">
           <IconContext.Provider value={{color:"white"}}>
           <a href="https://www.twitter.com/mbuyu_"><FaTwitter/></a>
           <a href="https://github.com/makayi"><FaGithub/></a>
           <a href="https://www.instagram.com/mbuyu__/"><FaInstagram/></a>
           <a href="https://medium.com/@mbuyu"> <FaMediumM/></a>
           <a href="https://www.linkedin.com/in/mbuyu/"><FaLinkedinIn/></a>
           </IconContext.Provider>
          </div>
        </section>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
