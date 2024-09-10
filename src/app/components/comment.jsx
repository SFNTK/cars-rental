'use client'
import React, { useEffect } from 'react';
import "./comment.css";
import gsap from 'gsap';

const Comment = () => {
    useEffect(()=>{
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#cardscont",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",
             
            }
        });
        tls2.fromTo(".card",{opacity:.5,y:10},{opacity:1,y:0,duration:.5,  ease:"power1.Out",stagger:0.5})
    },[])
    return (
        <div id='comment'>
            <h2>Comment Ça Marche</h2>
           <div id='cardscont'> 
           <div className='card'>
            <img src='./location(1).png' />
                   <div>
                   <span>
                    Choisissez votre emplacement
                    </span>
                    <p>
                    Choisissez votre emplacement et trouvez votre meilleure voiture

                    </p>
                   </div>
            </div>
            <div className='card'>
            <img src='./schedule.png' />
                   <div>
                   <span>
                    date/heure de prise en charge
                    </span>
                    <p>
                    sélectionnez votre date et heure de prise en charge pour réserver votre voiture

                    </p>
                   </div>
            </div>
            <div className='card'>
            <img src='./electric-car.png' />
                 <div>
                 <span>
                    réservez la voiture de votre choix
                    </span>
                    <p>
                    nous vous le livrerons directement

                    </p>
                 </div>
            </div>
           </div>
        </div>
    );
}

export default Comment;
