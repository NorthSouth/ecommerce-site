function buildCart() {
  
  var compressedCartList="";
  

 
  if (numCartItems == 0) {
    clearCartUI();
   
    document.getElementById("checkout-link").href="#";
    document.getElementById("checkout-link").target="";
    
    createNullCartMsg();
   
  } else if (numCartItems > 0 ) {
    document.getElementById("cart-footer").style.visibility = "block";
    createCartUILeft();
    stockCart();
    createCartUIRight();
   
    document.getElementById("checkout-link").href="checkOut.html";
    document.getElementById("checkout-link").target="_blank";
    
  }
  updateCartInfo();
}

function toggleCartInfoVisibility() {

  if (numCartItems == 0) {
    /*document.getElementById("cart-footer").style.display = "none";*/
  } else {
    document.getElementById("cart-footer").style.visibility = "block";
  }

}

function createNullCartMsg() {

  var nullCartMsg;

  node = document.createElement("div");
  document.getElementById("cart-content-row").appendChild(node);
  element = document.getElementById("cart-content-row");
  node = element.lastChild;
  node.setAttribute("class", "nullCart");

  nullCartMsg = document.createTextNode("Your Cart Is Empty");
  node.appendChild(nullCartMsg);
  document.getElementById("cart-content-row").appendChild(node);

}

function updateCartInfo() {

  document.getElementById("cart-footer-items-qty").innerHTML = numCartItems;
  document.getElementById("cart-footer-total").innerHTML = "$" + cartItemTotal;
  modifyCartIcon();
}

function modifyCartIcon() {
 
  if (numCartItems > 0) {
    document.getElementById("cart-button-qty").innerHTML = numCartItems;
    document.getElementById("cart-button-qty").style.color = "white";
    document.getElementById("cart-icon").style.color = "white";
  } else {
    document.getElementById("cart-button-qty").innerHTML = "";
    document.getElementById("cart-button-qty").style.color = "";
    document.getElementById("cart-icon").style.color = "";
  }
}


function clearCart() {

  var menuChildList = document.getElementById("cart-items-wrapper");

  while (menuChildList.hasChildNodes()) {
    menuChildList.removeChild(menuChildList.firstChild);
  }

}

function clearCartUI() {

  var menuChildList = document.getElementById("cart-content-row");

  while (menuChildList.hasChildNodes()) {
    menuChildList.removeChild(menuChildList.firstChild);
  }

}

function createCartUILeft() {

  clearCartUI();

  // CREATE LEFT ARROW

  node = document.createElement("div");
  document.getElementById("cart-content-row").appendChild(node);
  element = document.getElementById("cart-content-row");
  node = element.lastChild;
  node.setAttribute("class", "move-left");
  node.setAttribute("id", "cart-arrow-left");

  node = document.createElement("i");
  document.getElementById("cart-arrow-left").appendChild(node);
  element = document.getElementById("cart-arrow-left");
  node = element.lastChild;
  node.setAttribute("class", "fa fa-caret-left");
  node.setAttribute("onclick", "shiftLeft();");

}

function createCartUIRight() {

  // CREATE RIGHT ARROW

  node = document.createElement("div");
  document.getElementById("cart-content-row").appendChild(node);
  element = document.getElementById("cart-content-row");
  node = element.lastChild;
  node.setAttribute("class", "move-right");
  node.setAttribute("id", "cart-arrow-right");

  node = document.createElement("i");
  document.getElementById("cart-arrow-right").appendChild(node);
  element = document.getElementById("cart-arrow-right");
  node = element.lastChild;
  node.setAttribute("class", "fa fa-caret-right");
  node.setAttribute("onclick", "shiftRight();");

}

function createCartItem(itemIndex, imgSource, imgTitle, productQuantity) {
 

  // create cart items wrapper div

  node = document.createElement("div");
  document.getElementById("cart-content-row").appendChild(node);
  element = document.getElementById("cart-content-row");
  node = element.lastChild;
  node.setAttribute("class", "d-flex flex-nowrap cart-items-wrapper");
  node.setAttribute("id", "cart-items-wrapper");


  // create main div for cart item

  node = document.createElement("div");
  document.getElementById("cart-items-wrapper").appendChild(node);

  element = document.getElementById("cart-items-wrapper");
  node = element.lastChild;
  node.setAttribute("class", " pl-2 pr-2 cart-item ");
  node.setAttribute("id", "cart-item-" + itemIndex);



  // create figure

  node = document.createElement("figure");
  document.getElementById("cart-item-" + itemIndex).appendChild(node);
  element = document.getElementById("cart-item-" + itemIndex);
  node = element.lastChild;
  node.setAttribute("id", "cart-figure-" + itemIndex);

 
  // create image for figure

  node = document.createElement("img");
  document.getElementById("cart-figure-" + itemIndex).appendChild(node);
  element = document.getElementById("cart-figure-" + itemIndex);
  node = element.lastChild;
  node.setAttribute("class", "cart-img");
  node.setAttribute("id", "cart-img-" + itemIndex);
  node.setAttribute("src", imgSource);
  node.setAttribute("alt", imgTitle);

  // create caption for figure

  node = document.createElement("figcaption");
  document.getElementById("cart-figure-" + itemIndex).appendChild(node);
  element = document.getElementById("cart-figure-" + itemIndex);
  node = element.lastChild;
  node.setAttribute("id", "cart-figcaption-" + itemIndex);
  node.setAttribute("class", "d-flex flex-nowrap justify-content-between  cart-fig-caption");


  node = document.createElement("span");

 
  node.appendChild(productQuantity);
  document.getElementById("cart-figcaption-" + itemIndex).appendChild(node);
  element = document.getElementById("cart-figcaption-" + itemIndex);
  node = element.lastChild;
  node.setAttribute("class", "cart-qty");
  node.setAttribute("id", "item-" + itemIndex + "-qty");

  /*node = document.createElement("i");*/
  node = document.createElement("img");
  document.getElementById("cart-figcaption-" + itemIndex).appendChild(node);
  element = document.getElementById("cart-figcaption-" + itemIndex);
  node = element.lastChild;
  /*node.setAttribute("class", "fa fa-trash trash-button");*/
  node.setAttribute("class", "trash-button");
  node.setAttribute("src","images/recycleBin.svg");
  node.setAttribute("height","20");
  node.setAttribute("alt","recycleBin");
  node.setAttribute("id", imgTitle);
  node.setAttribute("onclick", "removeItemFromCart(this.id);");
}

function stockCart() {
  var howMany;
  var imgSource;
  var imageTitle;
  var cartItemIndex;
  var quantityPreText;
  var materialPreText;
  var priceClassText;
  var itemPriceBase;
  var itemPrice;
  var itemTitleBase;
  var itemTitle;
  var itemMaterial;
  var itemMaterialBase;



  // Generate HTML for each entry in cart

  for (itemIndex = 0; itemIndex < cartItemList.length; itemIndex++) {

    cartItemIndex = cartItemList[itemIndex][0].productNum;

    imgSource = "images/" + productsScarvesOld[cartItemIndex].imageTitle;

    imgTitle = productsScarvesOld[cartItemIndex].name;
    itemTitleBase = imgTitle;
    itemTitle = itemTitleBase.replace(/(^|\s)[a-z]/g, function (f) {
      return f.toUpperCase();
    });

    itemQuantity = cartItemList[itemIndex][0].quantity;
    productQuantity = document.createTextNode("Qty: " + itemQuantity);

    createCartItem(itemIndex, imgSource, imgTitle, productQuantity);
  }
}

function findItemIndex(itemName) {

  // This finds the index of product in the original product list productsScarvesOld

  var neutralName = itemName.toLowerCase();
  var itemIndexMatch = -1;
 

  for (index = 0; index < productsScarvesOld.length; index++) {
    if (neutralName == productsScarvesOld[index].name.toLowerCase()) {
      itemIndexMatch = index;
    
      return index;
    }
  }
}

function findCartItemIndex(itemNum) {
  var itemIndexMatch = -1;

  for (index = 0; index < cartItemList.length; index++) {
    if (cartItemList[index][0].productNum == itemNum) {
      itemIndexMatch = index;
    }
  }
  return itemIndexMatch;
}

function addItemToCart(itemName) {
  var howMany;
  var imgSource;
  var imageTitle;
  var cartItemIndex;
  var quantityPreText;
  var materialPreText;
  var priceClassText;
  var itemPriceBase;
  var itemPrice;
  var itemTitleBase;
  var itemTitle;
  var itemMaterial;
  var itemMaterialBase;



  var itemIndex = findItemIndex(itemName);
  var refIndex=productsScarvesOld[itemIndex].refNum;
  refIndex--;

  var cartItemIndex = findCartItemIndex(itemIndex);

  
  if (cartItemIndex == -1) {
    
    numCartItems++;
    var newCartItem = [
      {
      /*  "productNum": itemIndex,*/
        "productNum": refIndex,
        "quantity": 1
      }
    ]
 
    
    cartItemList.unshift(newCartItem); // add new product to start of cart list
        
    itemPrice=productsScarvesOld[itemIndex].price;
    
    newItemTotal=fixTotal(cartItemTotal+itemPrice);
    cartItemTotal=newItemTotal;
    
   /* cartItemTotal+=productsScarvesOld[itemIndex].price;*/
      
    buildCart();

  } else {
    
  
    numCartItems++;
    // update quantity of item in cart
    itemQuantity = cartItemList[cartItemIndex][0].quantity;
   
    
    itemPrice=productsScarvesOld[itemIndex].price;
  
    newItemTotal=cartItemTotal+(itemQuantity*itemPrice);
    cartItemTotal=newItemTotal;
    
     itemQuantity++;
    cartItemList[cartItemIndex][0].quantity=itemQuantity;   
  
    
  
    buildCart();
  }
  
  modifyCartIcon();
}

function fixTotal(price){

  return parseFloat(price.toFixed(2));
}

function removeItemFromCart(itemName) {
  
 
  var itemIndex = findItemIndex(itemName);
  var itemQty;
  var itemPrice;
  var newItemTotal;
  
  var cartItemIndex = findCartItemIndex(itemIndex);
  
  if (cartItemIndex != -1 ){
    itemPrice=productsScarvesOld[itemIndex].price;
    itemQty=cartItemList[cartItemIndex][0].quantity;
    
    itemQty--;
    
   /* newItemTotal=fixTotal(cartItemTotal-(itemQty*itemPrice));*/
    newItemTotal=fixTotal(cartItemTotal-itemPrice);
    cartItemTotal=newItemTotal;
    
    /*numCartItems-=itemQty;*/
    numCartItems--;
    
    if (itemQty == 0) {
      cartItemList.splice(cartItemIndex,1);  // if item count goes to zero remove     
    }    else {
      cartItemList[cartItemIndex][0].quantity=itemQty; // update cart list with new qty
    }
  
    buildCart();
    modifyCartIcon();
    
  }
}