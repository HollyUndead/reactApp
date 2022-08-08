import React from "react";
import './favoriteDish.css'

function FavriteDishPlate({liked, remove})
{
    let ClassNam = 'withIMG';
    if (liked.img === 'https://raw.githubusercontent.com/HollyUndead/reactApp/main/public/place.png')
    {
        ClassNam='withoutIMG'
    }

    function deleteDish()
    {
        remove(liked)
        let likes = JSON.parse(localStorage.getItem('liked'))
        likes = likes.filter(p => p.id !== liked.id)
        localStorage.setItem('liked', JSON.stringify(likes))
    }

    return (
        <div className="dishPlate" id="dishPlates">
            <img src={liked.img} alt="" id={ClassNam}></img>
            <h3 className="dishName" id="dishName">{liked.dishName}</h3>
            <p className="dishRecipte" id="dishRecipte">{liked.dishRecipte}</p>
            <button id="delete" onClick={deleteDish}>Delete</button>
        </div>
    )
}

export default FavriteDishPlate;