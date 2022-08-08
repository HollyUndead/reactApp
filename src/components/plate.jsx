import React, { useState } from "react";
import FavriteDishPlate from "./favoriteDish";
import "./plates.css"

const Plates = () =>{

    let dish = {
        img: null,
        dishName: null,
        dishRecipte: null,
        id: null
    };

    const [modula, setModula] = useState(false)

    let rootClass = 'myModula'
    if (modula){
        rootClass += ' active'
    }

    function removeDish(like)
    {
        setLiked(liked.filter(p => p.id !== like.id))
    }

    function ShowMyModula()
    {
        setModula(true)
        dish = {
            img: null,
            dishName: null,
            dishRecipte: null,
            id: null
        };
        document.getElementById('DishName').value = '';
        document.getElementById('DishRecipte').value = '';
    }

    function HideMyModula()
    {
        setModula(false)
    }

    function saveRecipte()
    {
        if (document.getElementById('DishName').value === '' && document.getElementById('DishRecipte').value === ''){
            HideMyModula();
            return;
        }
        if (document.getElementById('DishName').value === '' && document.getElementById('DishRecipte').value !== ''){
            alert('Please, enter dish name')
            return;
        }
        if (document.getElementById('DishRecipte').value === '' && document.getElementById('DishName').value !== ''){
            alert('Please, enter dish recipte')
            return;
        }

        let like = localStorage.getItem('liked');
        dish.dishName = document.getElementById('DishName').value;
        dish.dishRecipte = document.getElementById('DishRecipte').value;
        dish.img = 'https://raw.githubusercontent.com/HollyUndead/reactApp/main/public/place.png'
        dish.id = Date.now();
        if (like === null)
        {
            like.push(dish)
            localStorage.setItem('liked', JSON.stringify(like))
            setLiked(like)
            HideMyModula()
        }else{
        like = JSON.parse(localStorage.getItem('liked'))
        setLiked([...liked, dish])
        like.push(dish);
        localStorage.setItem('liked', JSON.stringify(like))
        HideMyModula()
        }
    }

    let likedT = JSON.parse(localStorage.getItem('liked'))

    const [liked, setLiked] = useState(likedT)

    if (localStorage.getItem('liked') === null || localStorage.getItem('liked') === '[]'){
        return (
            <div>
            <button id="CreateDish" onClick={ShowMyModula}>Create custom dish</button>
            <div id="likeEmpty">
                    Like list is empty
            </div>
            <div id="myModula" className={rootClass}>
                <div className="MyModulaContent">
                    Dish name
                    <input type="text" id="DishName" /><br />
                    Dish recipte
                    <textarea type="text" id="DishRecipte" /><br />
                    <button onClick={saveRecipte}>Submit</button>
                </div>
            </div>
        </div>
        )
    }

    return(
        <div>
            <button id="CreateDish" onClick={ShowMyModula}>Create custom dish</button>
            <div id="plates">
                    {liked.map(liked => <FavriteDishPlate liked = {liked} key = {liked.id} remove={removeDish}/>)}
            </div>
            <div id="myModula" className={rootClass}>
                <div className="MyModulaContent">
                    Dish name
                    <input type="text" id="DishName" /><br />
                    Dish recipte
                    <textarea type="text" id="DishRecipte" /><br />
                    <button onClick={saveRecipte}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Plates;