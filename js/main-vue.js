var appIndex = new Vue({
  el: '#app-index',
  data: {
    scarves: productsScarves,
  },
  methods: {
    nameI: function (e) {
      return e.name;
    },
    priceI: function (e) {
      return e.price;
    },
    url: function (e) {
      return e.url;
    },
    itemWrapper: function (e) {
      return ("itemWrapper-item-" + e.refNum);
    },
    itemNum: function (e) {
      return ("item-" + e.refNum);
    },
    srcI: function (e) {
      return ("images/" + e.imageTitle);
    },
    overlayContainer: function (e) {
      return ("overlayContainer-item-" + e.refNum);
    },
    overlayPurchase: function (e) {
      return ("purchaseOverlay-item-" + e.refNum);
    },
    filterItems: function (e) {
      console.log("sort value: ", document.getElementById("inputState").value);
      let sortVal = document.getElementById("inputState").value;
      switch (sortVal) {
        case "material":
          {
            productsScarves.sort(function (a, b) {
            if (a.material.toLowerCase() < b.material.toLowerCase()) //sort string ascending
              return -1
            if (a.material.toLowerCase() > b.material.toLowerCase())
              return 1
            return 0 //default return value (no sorting)
          })
          }
          break;
        case "price": {
            productsScarves.sort(function (a, b) {
            return a.price - b.price
          });
        }
          break;
        default:
          {
            alert("Please select how you'd like to view our products.");
          }
      }
    }
  }
})