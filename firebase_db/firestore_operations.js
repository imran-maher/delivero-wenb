import { Product } from "../add_product/product";



var app;
var db;

export function initFirestore(initializeApp , getFirestore){
    var config = {
        apiKey: "AIzaSyBHpXuuqzmVRifeH_KkuBEL9qGmj4KcZJg",
        authDomain: "hsaiuei.firebaseapp.com",
        projectId: "hsaiuei",
        storageBucket: "hsaiuei.appspot.com",
        messagingSenderId: "621050448509",
        appId: "1:621050448509:web:92ae486a843abfd1eb3f14",
        measurementId: "G-NDJE1GG56E"
    };

    app = initializeApp(config);
    db = getFirestore(app);
}

export function addProduct(){

}

export function getProducts(){

}