'use client'
import React from 'react';
import "./about.css";
import { useRouter } from 'next/navigation'

const About = () => {
    const router2 = useRouter()

    return (
        <div id='about'>
            <div id='aboutpart1'>
                <h2>A PROPOS</h2>
                <p>Notre service de location de voitures vous propose un large choix de véhicules modernes adaptés à vos besoins : économiques, luxueux, SUV ou utilitaires. Réservez en ligne en quelques clics et profitez de tarifs compétitifs. Nous offrons des options flexibles de location (journalière, hebdomadaire, mensuelle) . Assistance 24/7 pour une expérience sans souci. Voyagez en toute sérénité avec notre service fiable et pratique.</p>
            <div id='aboutpart12'>
                <div onClick={()=>{
                     router2.push('/contact')
                }}>CONTACTEZ NOUS</div>
                <div onClick={()=>{
                     router2.push('/cars')
                }}>FAIRE UNE RESERVATION</div>
            </div>
            </div>
            <img id='locationabout' src='./loc.jpeg'/>

            
        </div>
    );
}

export default About;
