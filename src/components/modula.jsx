import React from "react";
import { CloseModula, saveRecipte } from "../functions/modulaFunctions";
import './modula.css'

function ModulaCreateRecipte({liked, setLiked, modula, setModula}){


    return (
        <div className={modula ? 'modal active' : 'modal'} onClick={ev => CloseModula(setModula)}>
            <div className={modula ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div>
                    <label htmlFor="inputDishName">Dish name</label><br />
                    <input type="text" name="inputDishName" id="inputDishName" />
                </div>
                <div>
                    <label htmlFor="inputDishRecipte">Dish recipte</label><br />
                    <textarea name="inputDishRecipte" id="inputDishRecipte" cols="50" rows="10"></textarea>
                </div> 
                <button onClick={ev => saveRecipte(liked, setLiked, setModula)}>Create dish</button>
                <button onClick={ev => CloseModula(setModula)}>Cancel</button>
            </div>
        </div>
    )
}


export default ModulaCreateRecipte;