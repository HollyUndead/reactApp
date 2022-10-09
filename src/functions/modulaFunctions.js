let dish = {
    img: null,
    dishName: null,
    dishRecipte: null,
    id: null
};

export function CloseModula(setModula){
    setModula(false)
    dish = {
        img: null,
        dishName: null,
        dishRecipte: null,
        id: null
    };
    document.getElementById('inputDishName').value = ''
    document.getElementById('inputDishRecipte').value = ''
}


export function saveRecipte(liked, setLiked, setModula)
{
    if (document.getElementById('inputDishName').value === '' && document.getElementById('inputDishRecipte').value === ''){
        CloseModula(setModula)
        return;
    }
    if (document.getElementById('inputDishName').value === '' && document.getElementById('inputDishRecipte').value !== ''){
        alert('Please, enter dish name')
        return;
    }
    if (document.getElementById('inputDishRecipte').value === '' && document.getElementById('inputDishName').value !== ''){
        alert('Please, enter dish recipte')
        return;
    }

    let like = localStorage.getItem('liked');
    dish.dishName = document.getElementById('inputDishName').value;
    dish.dishRecipte = document.getElementById('inputDishRecipte').value;
    dish.img = 'https://raw.githubusercontent.com/HollyUndead/reactApp/main/public/place.png'
    dish.id = Date.now();
    if (like === null)
    {
        like.push(dish)
        localStorage.setItem('liked', JSON.stringify(like))
        setLiked(like)
        CloseModula(setModula)
    }else{
    like = JSON.parse(localStorage.getItem('liked'))
    setLiked([...liked, dish])
    like.push(dish);
    localStorage.setItem('liked', JSON.stringify(like))
    CloseModula(setModula)
    }
}