
import Image from 'next/image'
import { GlobalHeadTag, Header, Navbar, Results } from '../components'
import requests from '../helpers/requests';

export default function Home({ results }) {
  return (
    <div>
      <GlobalHeadTag title="hulu 2.0" />
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  )
};

export async function getServerSideProps (context) {
  const genre = context.query.genre;

  const request = await 
  fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  };
};
