import { GetStaticProps } from 'next';
import Head from 'next/head'
import data from "../public/cars.json";
import { Home } from '../components/Home/HomeComponent'

export default function HomePage(){
  return (
    <div>
      <Head>
        <title>Exotic Cars</title>
      </Head>
      <Home data={data}/>
    </div>
  )
}