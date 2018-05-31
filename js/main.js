function createProductListing(itemNum, itemID, itemTitle, imgSource, itemDescription, itemPrice) {

  var node = document.createElement("div");
  var nodelist = document.getElementsByTagName("div").length;
  var id;
  var text;
  var containerID;
  var productID;
  var itemWrapperID;


  document.getElementById("item-grid").appendChild(node);

  element = document.getElementById("item-grid");
  node = element.lastChild;

  node.setAttribute("class", "item-wrapper");
  itemWrapperID = "itemWrapper-" + itemID
  node.setAttribute("id", itemWrapperID);

  /*NEW CODE*/
  node = document.createElement("div");
  document.getElementById(itemWrapperID).appendChild(node);
  element = document.getElementById(itemWrapperID);
  node = element.lastChild;

  node.setAttribute("class", "item-unit");
  node.setAttribute("id", itemID);


  node = document.createElement("H3");
  title = document.createTextNode(itemTitle);
  node.appendChild(title);

  document.getElementById(itemID).appendChild(node);

  node = document.createElement("IMG");
  nodelist = document.getElementsByTagName("img").length;

  document.getElementById(itemID).appendChild(node);
  document.getElementsByTagName("img")[nodelist].setAttribute("src", imgSource);
  document.getElementsByTagName("img")[nodelist].setAttribute("alt", itemTitle);

  node = document.createElement("P");
  text = document.createTextNode(itemDescription);
  node.appendChild(text);
  nodelist = document.getElementsByTagName("p").length;

  document.getElementById(itemID).appendChild(node);
  document.getElementsByTagName("p")[nodelist].setAttribute("class", "product-description");

  node = document.createElement("P");
  text = document.createTextNode(itemPrice);
  node.appendChild(text);
  nodelist = document.getElementsByTagName("p").length;

  document.getElementById(itemID).appendChild(node);
  document.getElementsByTagName("p")[nodelist].setAttribute("class", "product-price");

  /*Overlay*/

  containerID = "overlayContainer-" + itemID;
  node = document.createElement("div");
  document.getElementById(itemWrapperID).appendChild(node);
  element = document.getElementById(itemWrapperID);
  node = element.lastChild;
  node.setAttribute("class", "overlayContainer");
  node.setAttribute("id", containerID);

  node = document.createElement("div");
  document.getElementById(containerID).appendChild(node);
  element = document.getElementById(containerID);
  node = element.lastChild;
  node.setAttribute("class", "purchaseOverlay");

  purchaseOverlayID = "purchaseOverlay-" + itemID;
  node.setAttribute("id", purchaseOverlayID);

  node = document.createElement("i");
  document.getElementById(purchaseOverlayID).appendChild(node);
  element = document.getElementById(purchaseOverlayID);
  node = element.lastChild;
  node.setAttribute("class", "fa fa-shopping-cart buyMeIcon");

  productID = "product-" + itemID;
  /*node.setAttribute("id", productID);*/
  node.setAttribute("id", itemTitle);
  node.setAttribute("onclick", "addItemToCart(this.id);");

}

function shiftLeft() {
  var element = document.getElementById("cart-items-wrapper");
  var elementWidth = document.getElementById("cart-items-wrapper").offsetWidth;



  scrollIncrement = document.getElementById("cart-item-0").offsetWidth;

  element.scrollLeft -= scrollIncrement;


  clicksLeft++;



  if (element.scrollLeft <= 0) {
    clicksLeft = 0;
  }

  if (clicksRight > 0) {
    clicksRight--;
  }


  if (element.scrollLeft > 0) {
    var visibleCartItems = Math.floor(elementWidth / element.scrollLeft);
  } else {
    var visibleCartItems = Math.floor(elementWidth / cartItemWidth);
  }
  var numShifts = Math.floor(element.scrollLeft / scrollIncrement);
  var maxRight = Math.floor((numCartItems * cartItemWidth) / elementWidth) + 2;


  var itemWidthTest = (visibleCartItems * cartItemWidth);

  // WIP

  /* if (element.scrollLeft < elementWidth && element.scrollLeft > 0 ) {
      document.getElementById("cart-arrow-left").style.color = "black";
     document.getElementById("cart-arrow-right").style.color = "black";   
   } else if (element.scrollLeft == 0 ) {    
      document.getElementById("cart-arrow-left").style.color = "gray";
     document.getElementById("cart-arrow-right").style.color = "black"; 
   } else {    
      document.getElementById("cart-arrow-left").style.color = "black";
     document.getElementById("cart-arrow-right").style.color = "black"; 
   }*/
}

function shiftRight() {
  var element = document.getElementById("cart-items-wrapper");


  var elementWidth = document.getElementById("cart-items-wrapper").offsetWidth;


  scrollIncrement = document.getElementById("cart-item-0").offsetWidth;

  var maxRight = Math.floor((numCartItems * cartItemWidth) / elementWidth) + 2;

  if (clicksRight >= maxRight) {
    clicksRight = maxRight;
  }
  if (clicksLeft > 0) {
    clicksLeft--;
  }


  element.scrollLeft += scrollIncrement;
  

  clicksRight++;

 
  var numShifts = Math.floor(element.scrollLeft / scrollIncrement);


  cartItemWidth = document.getElementById("cart-item-1").offsetWidth;
  var itemWidthTest = (numCartItems * cartItemWidth);
  
  // WIP
  /* if ((numShifts >= maxRight || clicksRight >= maxRight) && (clicksRight >0)) {
     document.getElementById("cart-arrow-left").style.color = "black";    
     document.getElementById("cart-arrow-right").style.color = "gray";    
   } else if ((numShifts < (maxRight) || clicksRight < maxRight) && (clicksRight > 0 )){
     document.getElementById("cart-arrow-right").style.color = "black";
     document.getElementById("cart-arrow-left").style.color = "black";  
   } else if (clicksRight == 0){    
     document.getElementById("cart-arrow-right").style.color = "black";
     document.getElementById("cart-arrow-left").style.color = "gray";   
   }*/



}

function filterProducts() {
  event.preventDefault();
  var sortedChoice = document.filterForm.dropDown.value;

  clearProducts();
  prepProducts(sortedChoice);


}

function clearProducts() {
  var productChildList = document.getElementById("item-grid");


  while (productChildList.hasChildNodes()) {
    productChildList.removeChild(productChildList.firstChild);
  }

}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var sortChoice = getCookie("sortedBy");

  if (sortChoice == "") {
    document.cookie = "sortedBy=unsorted";
  }
}

function prepProducts(sortedChoice) {


  switch (sortedChoice) {
    case "price":
      productsScarves.sort(function (a, b) {
        return a.price - b.price
      });
      break;
    case "material":
      productsScarves.sort(function (a, b) {
        if (a.material.toLowerCase() < b.material.toLowerCase()) //sort string ascending
          return -1
        if (a.material.toLowerCase() > b.material.toLowerCase())
          return 1
        return 0 //default return value (no sorting)
      })
      break;
  }

  /*auto-populate the page with sorted products*/


  for (i = 0; i < productsScarves.length; i++) {
    itemNum = i;

    itemID = "item-" + productsScarves[itemNum].refNum;
    itemTitle = productsScarves[itemNum].name;
    imgSource = "images/" + productsScarves[itemNum].imageTitle;
    itemDescription = productsScarves[itemNum].description;
    itemPrice = productsScarves[itemNum].price;


    createProductListing(itemNum, itemID, itemTitle, imgSource, itemDescription, itemPrice);
  }

  /* productsScarves=productsScarvesOld;*/
}

function resizeHandler() {
  setCartWidth();
  /* centerCartItems();*/
}

function unfurlCart() {
  var element = document.getElementById("cart-items-wrapper");

  element.scrollLeft = 0;


  clicksLeft = 0;
  clicksRight = 0;
  resizeHandler();
}

function setCartWidth() {
  var elementWidth = document.getElementById("cart-items-wrapper").offsetWidth;
  var elementWidth = document.getElementById("nav-container").offsetWidth;
  var cartScaling = .95;
  var cartItemsOffset = 0;


  var element = document.getElementById("cart-items-wrapper");
  scrollIncrement = document.getElementById("cart-item-1").offsetWidth;

  cartItemWidth = document.getElementById("cart-item-1").offsetWidth;

  var adjustedCartSize = (elementWidth * cartScaling - cartItemsOffset) / cartItemWidth;

  var beforeDecimal = Math.floor(adjustedCartSize);
  var afterDecimal = adjustedCartSize - beforeDecimal;

  var cartItemWidthOld = cartItemWidth;

  /* oldScrollIncrement=scrollIncrement;*/
  if (cartItemWidth == 0) {
    cartItemWidth = cartItemWidthOld;
  }


  cartWidth = (Math.floor(adjustedCartSize) + 1) * cartItemWidth;

  if (cartWidth <= 0) {
    cartWidth = cartItemWidth;
  }
  document.getElementById("cart-items-wrapper").style.width = cartWidth + "px";



  if (element.scrollLeft > 0) {
    var visibleCartItems = Math.floor(elementWidth / element.scrollLeft);
  } else {
    var visibleCartItems = Math.floor(elementWidth / cartItemWidth);
  }

  var maxRight = Math.floor((numCartItems * cartItemWidth) / elementWidth) + 2;
  var numShifts = Math.floor(element.scrollLeft / scrollIncrement);

  var itemWidthTest = (visibleCartItems * cartItemWidth);

  // WIP
  /* 
   if (element.scrollLeft < elementWidth && element.scrollLeft > 0 ) {
      document.getElementById("cart-arrow-left").style.color = "black";
     document.getElementById("cart-arrow-right").style.color = "black";   
   } else if (element.scrollLeft == 0 ) {    
      document.getElementById("cart-arrow-left").style.color = "gray";
     document.getElementById("cart-arrow-right").style.color = "black"; 
   } else {    
      document.getElementById("cart-arrow-left").style.color = "black";
     document.getElementById("cart-arrow-right").style.color = "black"; 
   }
   */

}

function centerCartItems() {
  var totalClicks = clicksRight - clicksLeft;
  var numCartItems = Math.floor(cartWidth / cartItemWidth);
  var totalCartItemWidth = numCartItems * cartItemWidth;

  /*var cartPositionOffet=Math.floor((cartWidth - totalCartItemWidth));*/

  var element = document.getElementById("cart-items-wrapper");

  var oldScrollLeft = element.scrollLeft;

  element.scrollLeft = 0;


  var newCartPosition = oldScrollLeft;

  element.scrollLeft = newCartPosition;


}

var itemNum;
var itemID;
var itemTitle;
var imgSource;
var itemDescription;
var itemPrice;
var cookieName = "sortedBy";

var sortedChoice = "unsorted";


var cartItemWidth = 104;
var scrollIncrement = 104;
var clicksLeft = 0;
var clicksRight = 0;
var lastCartWidth = -1;
var cartWidth;

var numCartItems = 0;
var cartItemTotal = 0;
var oldScrollIncrement = scrollIncrement;

var cartItemList = [];


var compressedCartList;



/*prepProducts(productsScarves, sortedChoice);*/