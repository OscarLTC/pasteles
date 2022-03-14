import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Popular } from './components/popular';
import { Slider } from './components/slider';
import { Header } from './layout/header';


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
