window.addEventListener("DOMContentLoaded", (event) => {

  const showCart = () => {
    const shopCart = document.getElementById("shopping-cart")
    document.addEventListener('click', (event) => {
      // let item = document.getElementById('items');
      for(let i = 0; i < localStorage.length; i++) {
        let element = localStorage.key(i);
         let elementContainer = document.createElement("div");
         elementContainer.setAttribute("id", element);
        //  localStorage.push()
        // localStorage.getItem(element[i]);
        shopCart.appendChild(elementContainer);
      }
    })
  };

  const storeItem = () => {
    const addItem = document.getElementById("add-to-cart")
    addItem.addEventListener('click', (event) => {
      let item = document.getElementById('items');
      let value =  item.value;
      localStorage.setItem(item, value);
    })
  };

  const removeItem = () => {

  };
storeItem()
showCart()
});
