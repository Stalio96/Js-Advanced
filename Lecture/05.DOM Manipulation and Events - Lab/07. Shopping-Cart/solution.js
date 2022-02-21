function solve() {
   
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', onCalc);
   const cart = [];

   function onClick(ev){
      if(ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')){
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         })

         document.getElementsByTagName('textarea')[0].value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   function onCalc(ev){
      const products = new Set();
      cart.forEach(p => products.add(p.name));

      const total = cart.reduce((t, c) => t + c.price, 0);

      document.getElementsByTagName('textarea')[0].value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
   }
}