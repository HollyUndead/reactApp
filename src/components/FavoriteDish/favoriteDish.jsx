import React from "react";
import './favoriteDish.css'

function FavriteDishPlate({liked, remove}) {
    let b;
    if (liked.img != null){
        b = liked.img;
    }
    else{
        b = "./place.png"
    }
    function deleteDish(){
        remove(liked)
        let likes = JSON.parse(localStorage.getItem('liked'))
        likes = likes.filter(p => p.id !== liked.id)
        localStorage.setItem('liked', JSON.stringify(likes))


        // liked.filter(p => p.id !== like.id)
    }

    return (
        <div className="dishPlate" id="dishPlates">
            <img className="dishImg" src={b} alt="" id="dishImg1"></img>
            <h3 className="dishName" id="dishName">{liked.dishName}</h3>
            <p className="dishRecipte"id="dishRecipte">{liked.dishRecipte}</p>
            <button id="delete" onClick={deleteDish}>Delete</button>
        </div>
    )
}

export default FavriteDishPlate;