import React from "react";
import "./MyModular.css"

function MyModular({visible, setVisible, create, Plates, hide}) {

    let rootClass = 'myModula'
    if (visible){
        rootClass += ' active'
    }

    let dish = {
        img: null,
        dishName: null,
        dishRecipte: null,
        id: null
    };

    function saveRecipte(){
        if (document.getElementById('DishName').value == '' && document.getElementById('DishRecipte').value == ''){
            hide();
            return;
        }
        if (document.getElementById('DishName').value == '' && document.getElementById('DishRecipte').value != ''){
            alert('Please, enter dish name')
            return;
        }
        if (document.getElementById('DishRecipte').value == '' && document.getElementById('DishName').value != ''){
            alert('Please, enter dish recipte')
            return;
        }
        let Newid = Date.now();
        let liked =JSON.parse(localStorage.getItem('liked'))
        dish.dishName = document.getElementById('DishName').value;
        dish.dishRecipte = document.getElementById('DishRecipte').value;
        dish.img = './place.png'
        dish.id = Newid;
            if (liked == null){
            localStorage.setItem('liked', JSON.stringify(liked))
            hide();
            Plates();
            create(dish)
            document.getElementById('DishName').value = '';
            document.getElementById('DishRecipte').value = '';
            return;
        }
        create(dish)
        liked.push(dish)
        localStorage.setItem('liked', JSON.stringify(liked))
        hide();
        document.getElementById('DishName').value = '';
        document.getElementById('DishRecipte').value = '';
    }

    return (
        <div id="myModula" className={rootClass}>
            <div className="MyModulaContent">
                Dish name
                <input type="text" id="DishName" /><br />
                Dish recipte
                <input type="text" id="DishRecipte" /><br />
                <button onClick={saveRecipte}>Submit</button>
            </div>
        </div>
    )
}

export default MyModular;