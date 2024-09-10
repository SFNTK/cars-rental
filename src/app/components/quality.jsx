'use client'
import React, { useEffect, useState } from 'react';
import './quality.css';

const Quality = (props) => {
    const qualitycard=[{
        id:1,
        image:'./email(2).png',
        para:"Des offres exceptionnelles et des prix imbattables "
    },{
        id:2,
        image:'./electric-car.png',
        para:"Large choix de voitures très bien entretenues "
    },{id:3,
        image:'./assurance.png',
        para:"Assurance tout risques"
    },{id:4,
        image:'./support.png',
        para:"Services et Assistances 24/24h et 7/7j "
    },{id:5,
        image:'./delivery-car.png',
        para:"Livraison disponible et le paiement à la livraison"
    }];
    const [cardquality,setquality]=useState(<div></div>)
    useEffect(()=>{
      
      
        const cardtest=qualitycard.map(data=>{
          return  <div  className='servcard' key={data.id}>
            <img src={data.image} />
            <span>{data.para}</span>
         
        </div>

        })
        setquality(cardtest)

    },[])
    return (
        <div id='quality'>
      <div id='qualitytxt'>
      <span>POURQUOI NOUS</span>
            <h2>Tout le meilleur Service que nous avons Pour vous</h2>
            <p>Expérience, qualité, dévouement - tout est réuni dans nos Services pour vous.</p>
            <div id='reserve' onClick={()=>{

                props.router.push('/cars')
            }}> RESERVEZ MAINTENANT</div>
      </div>

      <div id='cardsservcontainer'>
      {cardquality}
        </div>
        </div>
    );
}

export default Quality;
