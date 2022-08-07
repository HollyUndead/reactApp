import React, { useState } from "react";
import FavriteDishPlate from "./favoriteDish";
import MyModular from "./MyModular";
import './plates.css'

function Plates () {
    // let fav = JSON.parse(localStorage.getItem('liked'))
    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')))

    const [modula, setModula] = useState(false)

    const removeDish = (like) => {
        setLiked(liked.filter(p => p.id !== like.id))
    }

    
    const createNewLiked = (newLiked) => {
        setLiked([...liked, newLiked])
    }

    function ShowMyModula(){
        setModula(true)
    }

    function hideMyModula(){
        setModula(false)
    }

    
    return(
        <div>
            <button id="CreateDish" onClick={ShowMyModula}>Create custom dish</button>
            <MyModular visible={modula} setVisible={setModula} create={createNewLiked} hide={hideMyModula}/>
            <div id='plates'>
                {liked.map(liked => 
                    <FavriteDishPlate liked = {liked} key = {liked.id} remove={removeDish}/>
                )}                
            </div>
        </div>
    )
}

export default Plates;