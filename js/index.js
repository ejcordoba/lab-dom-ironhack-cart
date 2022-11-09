// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = quantity.value * parseFloat(price.innerHTML);
  return parseFloat(subTotal.innerHTML);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 & // ITERATION 3
  const productsArray = document.querySelectorAll('.product');
  let calculateTotal = 0;
  
  productsArray.forEach(element => {
    calculateTotal += updateSubtotal(element);
    document.querySelector('#total-value span').innerHTML = calculateTotal.toString();
  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const buttonRow = target.parentNode;
  const deleteTarget = buttonRow.parentNode;
  deleteTarget.removeChild(buttonRow);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const createProductRow = document.querySelector('.create-product');
  const productNameValue = createProductRow.querySelector('input[type=text]').value;
  const productPriceValue = createProductRow.querySelector('input[type=number]').value;
  const tableRef = document.getElementById('cart').getElementsByTagName('tbody')[0];
  const rowRef = tableRef.insertRow(-1);
  const nameCell = rowRef.insertCell(0);
  nameCell.classList.add("name");
  const priceCell = rowRef.insertCell(1);
  priceCell.classList.add("price");
  const quantityCell = rowRef.insertCell(2);
  quantityCell.classList.add("quantity");
  const subTotalCell = rowRef.insertCell(3);
  subTotalCell.classList.add("subtotal");
  const actionCell = rowRef.insertCell(4);
  actionCell.classList.add("action");
  
  nameCell.innerHTML = `<span>${productNameValue}</span>`
  priceCell.innerHTML = `$<span>${parseFloat(productPriceValue)}</span>`
  quantityCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`
  subTotalCell.innerHTML = `$<span>0</span>`
  actionCell.innerHTML = `<button class="btn btn-remove">Remove</button>`
  const removeProductBtnArray = document.querySelectorAll('.action');
  for (const btn of removeProductBtnArray) {
    btn.addEventListener('click', removeProduct);
  }
  
  
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtnArray = document.querySelectorAll('.action');
  for (const btn of removeProductBtnArray) {
    btn.addEventListener('click', removeProduct);
  }
  
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  
});

