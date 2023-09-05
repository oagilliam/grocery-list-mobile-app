import{ initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import{ getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://grocery-store-app-c4216-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items");

const addBtn = document.getElementById("add-button");
const inputFld = document.getElementById("input-field");
const shoppingLst = document.getElementById("shopping-list");


addBtn.addEventListener("click", function(){
    let inputValue = inputFld.value;
    push(itemsInDB, inputValue);
    clearInputFld()
    appendItemToShoppingList(inputValue)
})

onValue(shoppingLstInDB, function(snapshot){
    let newArray = Object.values(snapshot.val());

    clearShoppingList()

    for(let i=0; i < newArray.length; i++){
        appendItemToShoppingList(newArray[i])
    }

})

function clearShoppingList(){
    shoppingLst.innerHTML = '';
}

function clearInputFld() {
    inputFld.value = ''
}

function appendItemToShoppingList(itemValue) {
    shoppingLst.innerHTML += `<li>${itemValue}</li>`
}
