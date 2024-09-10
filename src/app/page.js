'use client'
import Cars from "./components/cars";
import Comment from "./components/comment";
import Final from "./components/final";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Marques from "./components/marques";
import Nav from "./components/nav";
import Quality from "./components/quality";
import Why from "./components/why";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
  <>
 
 
  <Hero router={router}/>
  <Marques/>
  <Comment/>
  <Cars router={router}/>
  <Why/>
  <Quality router={router}/>
  <Final router={router}/>

  </>
  );
}
