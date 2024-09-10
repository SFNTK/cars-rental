'use client'
import React, { useEffect, useState } from 'react';
import "./marques.css"
const Marques = () => {
    const[categor,setcategor]=useState(<></>)
    const marques=[{
        name:"Dacia",
        image:"./dacia.png"

    },
    {
        name:"Citroen",
        image:"./Citroen.svg"

    },{
        name:"Renault",
        image:"./Renault.png"

    },{
        name:"volkswagen ",
        image:"./volvas.png"

    },{
        name:"Hyundai",
        image:"./Hyundai.gif"

    },{
        name:"Range",
        image:"./range.png"

    },];

    useEffect(()=>{
        const categories=marques.map((data,index)=>{
            return  <div key={index} className='categorydv'>
            <div className='categpryimage' >
                <img src={data.image} />
            </div>
        
        </div>

        })
        setcategor(categories)

    },[])
    return (
        <div>
            <div className="categories">
                <div class="categories-slide">
                {categor}

                </div>

                <div className="categories-slide">
                    {categor}
                </div>
            </div>
        </div>
    );
}

export default Marques;
