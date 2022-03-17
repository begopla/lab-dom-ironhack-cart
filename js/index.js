// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  //console.log(price)
  const quantity = product.querySelector('.quantity input').value
  const priceValue=price.innerHTML
  //console.log(priceValue)
  const quantityValue = Number(quantity)
  //console.log(quantityValue)
 
  const subtotal = priceValue * quantityValue;
  //console.log(subtotal)
  const subtotalDOM = product.querySelector('.subtotal span')
  subtotalDOM.innerHTML = subtotal
  //console.log(subtotalDOM)
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
      // const singleProduct = document.querySelector('.product');
      // console.log(singleProduct)
      // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 
  const multipleProducts=document.querySelectorAll('.product')
  let total=0;
  multipleProducts.forEach(product => {
    //console.log(product)
    updateSubtotal(product)
  
    total=total+updateSubtotal(product)
    //console.log(total)
  })
  
  const totalValue=document.querySelector('#total-value span')
  totalValue.innerHTML = total;
 // console.log(totalValue)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  const parent = target.parentNode
  parent.parentNode.remove()
  

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  removeProductBtnArray=[...removeProductBtn]
  //console.log(productArray)

}
// ITERATION 5

function createProduct() {
  
  const newProductList = document.querySelectorAll('.product')
  const productArray=[...newProductList]
  //console.log(productArray)
 

  const cleanInputs = () => {
    nameInput.value = "";
    priceInput.value = "";
    nameInput.classList.remove('error-input');
    priceInput.classList.remove('error-input');
  }
 
     //productArray = "";//clean the list
   
  const nameInput = document.querySelector('#name-input');
  const priceInput = document.querySelector('#price-input'); 
  const newProductParent= document.querySelector('#products-parent')
      if(nameInput.value && priceInput.value ){
        const newProduct = document.createElement('tr');
        newProduct.className = "product"
        newProduct.innerHTML =`
        <td class="name">
          <span>${nameInput.value}</span>
        </td>
        <td class="price">$<span>${priceInput.value}</span></td>
        <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`

          

        const productRemoveBottonElement = newProduct.querySelector('button')
          //console.log(productRemoveBottonElement);
          //*!selects first button inside the newly created tr

        productRemoveBottonElement.addEventListener('click', removeProduct);
        productRemoveBottonElement.addEventListener('click', calculateAll)
        //*! sets an eventListener that callsback the removeProduct and calculateAll functions on this newly created product when the remove button is clicked 

        productArray.push(newProduct)
        //console.log(productArray)
        
        newProductParent.appendChild(newProduct);
       
        cleanInputs();
      }
  
      else{
        nameInput.classList.add('error-input')
        priceInput.classList.add('error-input')
      }
     
}
  

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  //console.log(calculatePricesBtn)
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  removeProductBtnArray=[...removeProductBtn]
 // console.log(removeProductBtnArray)
  removeProductBtnArray.forEach((button)=>{
    button.addEventListener('click', removeProduct )
    button.addEventListener('click', calculateAll)
       
  });
  
  
  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click',createProduct);
  addProductBtn.addEventListener('click', calculateAll)
  
  

  });

// window.addEventListener('DOMContentLoaded', ()=>{
//   const removeProductBtn = document.getElementsByClassName('btn-remove');
//   removeProductBtnArray=[...removeProductBtn]
//   removeProductBtnArray.forEach((button)=>{
//     button.addEventListener('click', removeProduct )
//     button.addEventListener('click', calculateAll)
// })
// }
//   );