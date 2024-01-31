import React from 'react'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const CardFlip = ()=>{

    const [isfliped, setIsFlipped] = useState(false)
    const [isAnimate, setIsAnimate] = useState(false)

    function handleFlip(){
        if (!isAnimate) {
            setIsFlipped(!isfliped)
            setIsAnimate(true)
        }
    }


    return(
        <div>
            <h1>Card Flipp.</h1>
        </div>
    );

}

export default CardFlip