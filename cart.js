// let cart = document.querySelector('#cart-count');
// let atc = document.querySelector('.atc');

// let cartcount=0;


//  console.log(atc.length);
//   for(let i=0 ; i<atc.length; i++){
//     };

//     function addCount(){
    
//         cart.innerHTML = cartcount++;

//     }

// atc.addEventListener("click",addCount)

// let cartcount =0;
// document.querySelectorAll('.atc').addEventListener('click',addToCart);

// function addToCart(){
//     cartcount++;

//     document.getElementById('cart-count').innerText=cartcount;

// }
let cartcount = 0;
const atc = document.querySelectorAll('.atc');
for (let i =0; i<atc.length; i++) {
    atc[i].addEventListener('click',addToCart);
}

function addToCart(){
    cartcount++;

    document.getElementById('cart-count').innerHTML = cartcount;
}

function toggleCard() {
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = cardContainer.style.display === "none" ? "block" : "none";
  }

  // Add click event listener to the toggle button
  document.getElementById("cart-count").addEventListener("click", toggleCard);