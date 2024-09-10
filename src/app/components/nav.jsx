'use client'
import React, { useEffect, useRef } from 'react';
import "./nav.css";
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const Nav = () => {
    const phonenav = useRef(null);
    const router = useRouter()
    
    useEffect(()=>{
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#nav",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
        tls2.fromTo(".livl",{
            y:2,
            opacity:0
        },{y:0,opacity:1,duration:.4,stagger:.5})

    },[])
    return (
        <div id='navcontainer'>
            <div id='headertop'>
                <a href='https://www.facebook.com/profile.php?id=100093431059884'><img src='./facebook.png' />Facebook</a>
                <a href='mailto:Saidakourida@gmail.com'><img src='./footermail.png' />Saidakourida@gmail.com</a>
                <a href='tel:+212661222330'><img src='./footerphone.png' /> 0661-222330</a>
            </div>

            <div id='nav'>
                <img src='./location.png' onClick={()=>{
                     router.push('/')
                }} />
                <ul>
                    <li className='livl' onClick={()=>{
                        router.push('/')
                    }}>Home</li>
                    <li className='livl' onClick={()=>{
                        router.push('/about')
                    }}>About Us</li>
                    <li className='livl' onClick={()=>{
                        router.push('/cars')
                    }}>Reservation</li>
                    <li className='livl' onClick={()=>{
                        router.push('/contact')
                    }}> Contact Us</li>
                </ul>
                <img src='./menu.png' id='burger' onClick={() => {

                    phonenav.current.style.transform = "scaleY(1)";

                }} />
            </div>
            <div id='navphone' ref={phonenav}>
                <img src="./close.png" alt="" onClick={() => {
                    phonenav.current.style.transform = "scaleY(0)";
                }} />
                
                <ul>
                    <li className='livl' onClick={()=>{
                        router.push('/', { scroll: false })
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>Home</li>
                    <li className='livl' onClick={()=>{
                        router.push('/about', { scroll: false })
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>About Us</li>
                    <li className='livl' onClick={()=>{
                        router.push('/cars', { scroll: false })
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>Reservation</li>
                    <li className='livl' onClick={()=>{
                        router.push('/contact', { scroll: false })
                        phonenav.current.style.transform = "scaleY(0)";
                    }}> Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
