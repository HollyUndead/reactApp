(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),i=a(6),c=a.n(i),r=(a(17),{img:null,dishName:null,dishRecipte:null,id:null});var m=function(){var e=function(e){return document.getElementById(e)};function t(){var t=new XMLHttpRequest;t.open("GET","https://www.themealdb.com/api/json/v1/1/random.php",!0),t.onload=function(){var a=JSON.parse(t.response);e("dishImg").src=a.meals[0].strMealThumb,r.img=a.meals[0].strMealThumb,e("dishName").innerText=a.meals[0].strMeal,r.dishName=a.meals[0].strMeal,e("dishRecipte").innerText=a.meals[0].strInstructions,r.dishRecipte=a.meals[0].strInstructions,r.id=a.meals[0].idMeal},t.send(null)}return t(),n.a.createElement("div",{id:"dishPlate"},n.a.createElement("img",{src:"",alt:"",id:"dishImg"}),n.a.createElement("p",{id:"dishName",className:"RandomDish"},"dish name"),n.a.createElement("p",{id:"dishRecipte"},"Dish recipte"),n.a.createElement("div",{id:"buttons"},n.a.createElement("button",{onClick:t},"Skip"),n.a.createElement("button",{onClick:function(){var e=localStorage.getItem("liked");if(null==e)(e=[]).push(r);else{e=JSON.parse(e);for(var a=0;a<e.length;a++)if(e[a].dishName===r.dishName)return void t();e.push(r)}localStorage.setItem("liked",JSON.stringify(e)),t()}},"Like")))},s=a(7),d=a(3);a(19);var u=function(e){var t=e.liked,a=e.remove,l="withIMG";return"https://raw.githubusercontent.com/HollyUndead/reactApp/main/public/place.png"===t.img&&(l="withoutIMG"),n.a.createElement("div",{className:"dishPlate",id:"dishPlates"},n.a.createElement("img",{src:t.img,alt:"",id:l}),n.a.createElement("h3",{className:"dishName",id:"dishName"},t.dishName),n.a.createElement("p",{className:"dishRecipte",id:"dishRecipte"},t.dishRecipte),n.a.createElement("button",{id:"delete",onClick:function(){a(t);var e=JSON.parse(localStorage.getItem("liked"));e=e.filter(function(e){return e.id!==t.id}),localStorage.setItem("liked",JSON.stringify(e))}},"Delete"))},o=(a(21),function(){var e={img:null,dishName:null,dishRecipte:null,id:null},t=Object(l.useState)(!1),a=Object(d.a)(t,2),i=a[0],c=a[1],r="myModula";function m(e){N(f.filter(function(t){return t.id!==e.id}))}function o(){c(!0),e={img:null,dishName:null,dishRecipte:null,id:null},document.getElementById("DishName").value="",document.getElementById("DishRecipte").value=""}function p(){c(!1)}function h(){if(""!==document.getElementById("DishName").value||""!==document.getElementById("DishRecipte").value)if(""!==document.getElementById("DishName").value||""===document.getElementById("DishRecipte").value)if(""!==document.getElementById("DishRecipte").value||""===document.getElementById("DishName").value){var t=localStorage.getItem("liked");e.dishName=document.getElementById("DishName").value,e.dishRecipte=document.getElementById("DishRecipte").value,e.img="https://raw.githubusercontent.com/HollyUndead/reactApp/main/public/place.png",e.id=Date.now(),null===t?(t.push(e),localStorage.setItem("liked",JSON.stringify(t)),N(t),p()):(t=JSON.parse(localStorage.getItem("liked")),N([].concat(Object(s.a)(f),[e])),t.push(e),localStorage.setItem("liked",JSON.stringify(t)),p())}else alert("Please, enter dish recipte");else alert("Please, enter dish name");else p()}i&&(r+=" active");var E=JSON.parse(localStorage.getItem("liked")),g=Object(l.useState)(E),v=Object(d.a)(g,2),f=v[0],N=v[1];return null===localStorage.getItem("liked")||"[]"===localStorage.getItem("liked")?n.a.createElement("div",null,n.a.createElement("button",{id:"CreateDish",onClick:o},"Create custom dish"),n.a.createElement("div",{id:"likeEmpty"},"Like list is empty"),n.a.createElement("div",{id:"myModula",className:r},n.a.createElement("div",{className:"MyModulaContent"},"Dish name",n.a.createElement("input",{type:"text",id:"DishName"}),n.a.createElement("br",null),"Dish recipte",n.a.createElement("textarea",{type:"text",id:"DishRecipte"}),n.a.createElement("br",null),n.a.createElement("button",{onClick:h},"Submit")))):n.a.createElement("div",null,n.a.createElement("button",{id:"CreateDish",onClick:o},"Create custom dish"),n.a.createElement("div",{id:"plates"},f.map(function(e){return n.a.createElement(u,{liked:e,key:e.id,remove:m})})),n.a.createElement("div",{id:"myModula",className:r},n.a.createElement("div",{className:"MyModulaContent"},"Dish name",n.a.createElement("input",{type:"text",id:"DishName"}),n.a.createElement("br",null),"Dish recipte",n.a.createElement("textarea",{type:"text",id:"DishRecipte"}),n.a.createElement("br",null),n.a.createElement("button",{onClick:h},"Submit"))))}),p=a(4),h=a(0);a(23);var E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",null,n.a.createElement("header",null,n.a.createElement(p.b,{to:"reactApp/"},"Random dish"),n.a.createElement(p.b,{to:"reactApp/favorite"},"Favorite dish"))),n.a.createElement(h.c,null,n.a.createElement(h.a,{index:!0,element:n.a.createElement(m,null)}),n.a.createElement(h.a,{path:"reactApp/",element:n.a.createElement(m,null)}),n.a.createElement(h.a,{path:"reactApp/favorite",element:n.a.createElement(o,null)})))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p.a,null,n.a.createElement(E,null))))},8:function(e,t,a){e.exports=a(25)}},[[8,2,1]]]);
//# sourceMappingURL=main.e9d21026.chunk.js.map