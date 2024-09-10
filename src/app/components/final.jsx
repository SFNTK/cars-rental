'use client'
import React, { useEffect } from 'react';
import "./final.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Final = (props) => {
    const finalparagrape="Nous sommes votre partenaire de confiance. Notre engagement envers la qualité, l'innovation et la satisfaction de la clientèle nous distingue"
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
       if(window.innerWidth>1024){
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#bluecar",
                start: "top 0%",
                end: "top -50%",
                toggleActions: "play none none reverse",
                scrub:true

            }
        });
        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#txtfinal",
                start: "top 0%",
                end: "top -50%",
                toggleActions: "play none none reverse",
                scrub:true

            }
        });
        tls2.fromTo("#bluecar",{
            x:"40%"
        },{
           x:"28%",
            duration:10,
            ease:"power1.inOut",
      
        },"animcar")
        tls3.fromTo("#txtfinal",{
            x:-10,opacity:0
        },{x:0,opacity:1,duration:10,  ease:"power1.inOut"},"animcar")
       }
    },[])
    return (
        <div id='final'>
            <div id='txtfinal'>
                <h2>Prêt à commencer ?</h2>
                <p>{finalparagrape}</p>
           <div onClick={()=>{
            props.router.push('/contact')
           }}>CONTACTEZ NOUS</div>
            </div>
            <img src='./leftcar.png' id='bluecar' />

        </div>
    );
}

export default Final;
