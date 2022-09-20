import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';


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
        <p>I'm a fourth year data science student at NTNU. I like to play tennis, I like to make <a href="https://nextjs.org/learn"> sculptures</a>. I like to endeavour in many things.</p>

        <p> I have mostly developed full applications for crypto sphere such as sure and minta, but also have my own smaller projects such as</p>

        <p>You can connect with me on twitter @si0ud or here <a href="https://www.linkedin.com/in/adam-sioud-316b48191/?originalSubdomain=no"> Linkedin</a> or shoot me an email.</p>
        <p>
        All blog posts below are for now only concerend financial matters as I'm highlity interested in that field of research too.{' '}
          
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}