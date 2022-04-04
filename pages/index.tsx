import type { NextPage } from 'next'
import { Popular } from './components/popular';
import { Slider } from './components/slider';


const Home: NextPage = () => {
  return (
    <>
      <div className='m-2'>
        <Slider/>
        <Popular/>
      </div>
    </>
  )
}

export default Home
