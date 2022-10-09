import React from "react";
import './favoritDish.css'

function FavriteDishPlate({likes, remove})
{
    let ClassNam = 'withIMG';
    if (likes.img === 'https://raw.githubusercontent.com/HollyUndead/reactApp/main/public/place.png')
    {
        ClassNam='withoutIMG'
    }

    return (
        <div className="dishPlate" id="dishPlates">
            <img src={likes.img} alt="" id={ClassNam}></img>
            <h3 className="dishName" id="dishName">{likes.dishName}</h3>
            <p className="dishRecipte" id="dishRecipte">{likes.dishRecipte}</p>
            <button id="delete" onClick={ev => remove(likes)}>Delete</button>
        </div>
    )
}

export default FavriteDishPlate;