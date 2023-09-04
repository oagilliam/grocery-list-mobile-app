import{ initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import{ getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://grocery-store-app-c4216-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

let addBtn = document.getElementById("add-button");
let inputFld = document.getElementById("input-field");


addBtn.addEventListener("click", function(){
    let inputValue = inputFld.value
    push(itemsInDB, inputValue)
})