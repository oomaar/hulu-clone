
import Image from 'next/image'
import { GlobalHeadTag, Header, Navbar } from '../components'

export default function Home() {
  return (
    <div>
      <GlobalHeadTag title="hulu 2.0" />
      <Header />
      <Navbar />
    </div>
  )
}
