import React, { useState } from "react";
import { deleteDish } from "../functions/deleteDish";
import FavriteDishPlate from "./favoritDish";
import ModulaCreateRecipte from "./modula";
import "./plate.css"


function Plates() {

    const [modula, setModula] = useState(false)

    const [liked, setLiked] = useState(JSON.parse(localStorage.getItem('liked')))


    function ShowMyModula(){
        setModula(true)
    }

    const modular = <ModulaCreateRecipte modula={modula} liked={liked} setLiked={setLiked} setModula={setModula}/>;

    if (localStorage.getItem('liked') === null || localStorage.getItem('liked') === '[]'){
        return (
            <div>
            <button id="CreateDish" onClick={ShowMyModula}>Create custom dish</button>
            <div id="likeEmpty">
                    Like list is empty
            </div>
            {modular}
        </div>
        )
    }

    return(
        <div>
            <button id="CreateDish" onClick={ShowMyModula}>Create custom dish</button>
            <div id="plates">
                    {liked.map(like => <FavriteDishPlate likes = {like} key = {like.id} remove={ev => deleteDish(like, liked, setLiked)}/>)}
            </div>
            {modular}
        </div>
    )
}

export default Plates;