import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { cardProductsAPI } from './Utils/apis/Api'
import './Cards.css'

function Cards() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get(cardProductsAPI).then((res) => { setCards(res.data) })
    }, [])
    return (
        cards &&
        <div className="main-card">
            {
                cards.map((items) => (
                    <div className="inside-card">
                        <div className="img-div" style={{boxShadow:"0 2px 2px #ccc", marginTop:"-24px", width:"319px", marginLeft:"-24px", backgroundColor:"#bdadad", borderRadius:"19px", paddingTop:"5px", paddingBottom:"8px"}}>
                            <img src={items?.images?.main}/>
                        </div>
                        <div style={{backgroundColor:"#fff", marginTop:"2px", marginLeft:"-24px", padding:"18px", width:"280px",borderRadius:"19px",height:"328px"}}>
                            <p className="name"><b>First Name :</b> {items?.name?.first}</p>
                            <p className="name"><b>Middle Name : </b>{items?.name?.middle}</p>
                            <p className="name"><b>Last Name :</b> {items?.name?.last}</p>
                            <p>{items?.images?.headshot}</p>
                            <p><b>Gender : </b> {items.gender}</p>
                            <p><b>Species : </b> {items.species}</p>
                            <p><b>Homeplanet :</b> {items.homePlanet}</p>
                            <p><b>Occupation : </b> {items.occupation}</p>
                            <p className="sayins">{items.sayings}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Cards
