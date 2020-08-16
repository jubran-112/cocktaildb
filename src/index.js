import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import $ from "jquery";


// es6
const menu = document.getElementById("menu");
menu.innerText = "MENU TEH  BOHAY";
menu.style.fontWeight = "bold";
menu.style.fontSize = "30px"
menu.style.textAlign = "center";
menu.style.paddingTop = "50px"

setInterval(function () {
    menu.style.color = "red";

    setTimeout(function () {
        menu.style.color = "blue";

    }, 500)
}, 1000);


// fetch API
const pencarian = document.getElementById('pencarian');

function main() {

    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const getDrinks = async () => {
        try {
            const reponse = await fetch(`${baseUrl}/random`);
            const responsJson = await reponse.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);

            } else {
                renderAllDrinks(responseJson.drinks);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }

    const renderAllDrinks = (drinks) => {

        data.drinks.forEach(function (element) {
            const dafatrMenu = document.getElementById('daftarmenu').append = `
    <div class="col-md-4"><dic class="card-mb-3><img src="` + element.strDrinkThumb + `" class="card-img-top" ><div class="card-body"><h5 class="card-title"> ` + element.strDrink + ` </h5><p class="card-text">` + element.strInstructions + `</p></div></div>`;
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };


}

/*    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responeText);
            const data = JSON.parse(this.response);

            data.drinks.forEach(function (element) {
                document.getElementById('daftarmenu').innerHTML = `
            <div class="card">
<img src="` + element.strDrinkThumb + `" class="card-img-top" >
<div class="card-body">
<h5 class="card-title"> ` + element.strDrink + ` </h5>
<p class="card-text">` + element.strInstructions + `</p>
</div>
</div>
            `;
            })

        }
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/", true);
        xhr.send();
    }


 */



// custom element

class FootApp extends HTMLElement {
    constructor() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
        h3 {
            color: white;
            padding-bottom: 10px;
            
        }
        </style>
        <marquee>Jl. raya desa sudimampir</marquee>`
    }
}
customElements.define("foot-app", FootApp);