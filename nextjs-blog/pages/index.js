import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
        <p>I'm a fourth year computer science student at NTNU who likes to play Tennis as much as he can and make <Link href="/sculptures"> sculptures  </Link> when time is available. </p>
           <br />
        
       
        <p> The last year I have mostly developed cryptocurrency applications such as  <a href="https://sure.claims/"> Sure Protocol </a> and  <a href="https://www.minta.world/"> MINTA </a> , but I do also have smaller coding projects, where some could be found on my 
        <a href="https://github.com/AdamSioud"> GitHub</a>. </p>
        
        <br />

        <p> If you want to know more, have a look at my CV, or send me a message on  <a href="https://www.linkedin.com/in/adam-sioud-316b48191/?originalSubdomain=no"> Linkedin</a>  or <a href="mailto:privatadammail@gmail.com">mail</a>. </p>
          


        <br />
        <p>
        Whilst I have a diverse set of interests, finance is the discipline where I by far have spent the most time. Researching, watching and especially had some skin in the game with. 
        As a result I find it suitable to write articles about different topics within finance I find interesting not only to convey but also to learn myself. 
        Hence the blog posts below will mostly regard the finance sector.

       
        </p>
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}