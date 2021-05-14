
import Image from 'next/image'
import { GlobalHeadTag, Header, Navbar, Results } from '../components'

export default function Home() {
  return (
    <div>
      <GlobalHeadTag title="hulu 2.0" />
      <Header />
      <Navbar />
      <Results />
    </div>
  )
}
