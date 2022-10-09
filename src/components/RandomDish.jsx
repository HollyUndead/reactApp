import React from "react";
import { useEffect} from "react";
import { rerol, addToFavorite } from "../functions/randomDishFunction";
import "./RandomDish.css"

function RandomDish() {

    // useEffect(() => {
        rerol()
    // },[])

    return (
        <div id="dishPlate">
            <img src="" alt="" id="dishImg"></img>
            <p id="dishName" className="RandomDish">dish name</p>
            <p id="dishRecipte">Dish recipte</p>
            <div id="buttons">
                <button onClick={rerol}>Skip</button>
                <button onClick={addToFavorite}>Like</button>
            </div>
        </div>
    )
}

export default RandomDish;