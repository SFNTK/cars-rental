'use client'
import React, { useEffect } from 'react';
import './hero.css';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';
// useRouter
import { useRouter } from 'next/navigation'
 




const Hero = () => {
    const router = useRouter()
 

    useEffect(()=>{
        const text = SplitType.create('#herotxt h1');
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
tls2.fromTo("#hero .char",{
    opacity:0,
    y:50
},{
    y:0,
    opacity:1,
    duration:1,
    ease:"power1.inOut",
    stagger:.05
},"firstanim").fromTo("#herotxt p",{
    opacity:0,y:5
},{opacity:1,ease:"power1.inOut",duration:2,y:0},"firstanim").fromTo("#heribtn",{
    x:-10,opacity:0
},{x:0,opacity:1,ease:"power1.inOut",duration:.5},'firstanim')
    }
    ,[])

    return (
        <div id='hero'>
          <div id='herotxt'>
          <h1>Location de voitures Marrakech</h1>
           <p>Louez la voiture parfaite en quelques clics et prenez la route en toute sérénité avec nos offres flexibles et abordables, adaptées à tous vos besoins.</p>
<div id='heribtn' onClick={()=>{
    router.push('/cars', { scroll: false })
}}>RESERVER MAINTENANT</div>
          </div>
          <div id='overlay'></div>
            
        </div>
    );
}

export default Hero;
