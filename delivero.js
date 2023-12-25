
  
 class Product{
  constructor(img,name,details,price,qty,button){
      this.img = img;
      this.name = name;
      this.details= details;
      this.price = price;
      this.qty= qty;
      this.button = button;
  }
}


const Productdiv = document.getElementById('productlist');

var productList = [
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),

   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart'),
   new Product(`https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg`,`SAMSUNG S23 ULTRA`, `High performance Product`, `Rs. 559,999`,100, 'Add to cart')
];

function update(){
  
  for(i = 0 ; i<productList.length ; i++){
   
      var cardDiv = document.createElement('div');
      cardDiv.classList.add('card')
      
      var imgDiv = document.createElement('img');
      imgDiv.classList.add('img')
      imgDiv.src = productList[i].img;
      

      var nameDiv = document.createElement('h3');
      nameDiv.classList.add('name')
      console.log(productList[i].img);
      nameDiv.innerHTML = productList[i].name;

      var detailsDiv = document.createElement('p');
      detailsDiv.classList.add('details')
      detailsDiv.innerHTML = productList[i].details;

      var priceDiv = document.createElement('h3');
      priceDiv.classList.add('price')
      priceDiv.innerHTML = productList[i].price;


      var qtyDiv = document.createElement('p');
      qtyDiv.classList.add('qty')
      qtyDiv.innerHTML = productList[i].qty;

      var cartBtn = document.createElement('button');
      cartBtn.classList.add('atc')
      cartBtn.innerHTML = "Add to cart";
      cartBtn.innerHTML = productList[i].button;


      cardDiv.appendChild(imgDiv);
      cardDiv.appendChild(nameDiv);
      cardDiv.appendChild(detailsDiv);
      cardDiv.appendChild(priceDiv);
      cardDiv.appendChild(qtyDiv);
      cardDiv.appendChild(cartBtn);


      Productdiv.appendChild(cardDiv);
  }}
  update();
  
  
  