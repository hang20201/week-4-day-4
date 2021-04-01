window.addEventListener("DOMContentLoaded", (event) => {

  const showCart = () => {
    const shopCart = document.getElementById("shopping-cart")

      // let item = document.getElementById('items');
      for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
         let elementContainer = document.createElement("div");
         elementContainer.innerHTML = key + ' '  + value;
         elementContainer.setAttribute("id", key);
        //  localStorage.push()
        // localStorage.getItem(element[i]);
        const remButton = document.createElement("button");
        remButton.innerHTML = "remove";
        remButton.setAttribute("class", "remove-button")
        remButton.setAttribute("id", key)
        elementContainer.appendChild(remButton)
        shopCart.appendChild(elementContainer);
      }

  };

  const storeItem = () => {
    const addItem = document.getElementById("add-to-cart")
    addItem.addEventListener('click', (event) => {
      let item = document.getElementById('items');
      let quantities = document.getElementById('quantity');
      let value =  item.value;
      let quantity = quantities.value;
      localStorage.setItem(value, quantity);
    })
    showCart();
  };

  const removeItem = () => {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((element) => {
      element.addEventListener("click", event => {
        console.log(event.target.id)
        localStorage.removeItem(event.target.id)
        location.reload();
      })
    })
  };
storeItem()
removeItem();
});
