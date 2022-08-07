import React from "react";
import "./randomDish.css"

let dish = {
    img: null,
    dishName: null,
    dishRecipte: null,
    id: null
};

function RandomDish() {

    const ById = (id) => {return document.getElementById(id)}

    rerol();

    function rerol(){
        let x = new XMLHttpRequest();
        x.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true)
        x.onload = () => {
            let Dish = JSON.parse(x.response);
            ById('dishImg').src = Dish.meals[0].strMealThumb;
            dish.img = Dish.meals[0].strMealThumb;
            ById('dishName').innerText = Dish.meals[0].strMeal;
            dish.dishName = Dish.meals[0].strMeal;
            ById('dishRecipte').innerText = Dish.meals[0].strInstructions;
            dish.dishRecipte = Dish.meals[0].strInstructions;
            dish.id = Dish.meals[0].idMeal;
        }
        x.send(null)
    }

    function addToFavorite() {
        let liked = localStorage.getItem('liked');        
        if (liked == null){
            liked = [];
            liked.push(dish)
        }
        else{
            liked = JSON.parse(liked)
            for (let i=0; i<liked.length; i++){
                if (liked[i].dishName === dish.dishName){
                    rerol()
                    return;
                }
            }
            liked.push(dish);
        }
        localStorage.setItem('liked', JSON.stringify(liked))
        rerol();
    }

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