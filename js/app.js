// Fetch data from the API
fetch('http://127.0.0.1:8000/products/')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('productsContainer'); // Assuming you have a container div with this id

    // Loop through the results and create product elements
    data.results.forEach(product => {
      // Create a div with class "col-sm-6 col-md-4 col-lg-3"
      const colDiv = document.createElement('div');
      colDiv.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

      // Create a div with class "box"
      const boxDiv = document.createElement('div');
      boxDiv.classList.add('box');

      // Create an anchor element with an empty href for now
      const anchor = document.createElement('a');
      anchor.href = '';

      // Create a div with class "img-box"
      const imgBoxDiv = document.createElement('div');
      imgBoxDiv.classList.add('img-box');

      // Create an img element and set its src attribute from the API data
      const img = document.createElement('img');
      img.src = product.images[0].image; // Assuming the image URL is in the first image object

      // Create a div with class "detail-box"
      const detailBoxDiv = document.createElement('div');
      detailBoxDiv.classList.add('detail-box');

      // Create an h6 element for the product title
      const h6Title = document.createElement('h6');
      h6Title.textContent = product.title;

      // Create an h6 element for the price and a span element with the price value
      const h6Price = document.createElement('h6');
      h6Price.textContent = 'Price';
      const priceSpan = document.createElement('span');
      priceSpan.textContent = `$${product.price}`;

      // Append the priceSpan to the "h6Price" element
      h6Price.appendChild(priceSpan);

      // Create a div with class "new" and a span element with "New"
      const newDiv = document.createElement('div');
      newDiv.classList.add('new');
      const newSpan = document.createElement('span');
      newSpan.textContent = 'New';

      // Append the newSpan to the "new" div
      newDiv.appendChild(newSpan);

      // Append the elements to the DOM hierarchy
      imgBoxDiv.appendChild(img);
      detailBoxDiv.appendChild(h6Title);
      detailBoxDiv.appendChild(h6Price);
      anchor.appendChild(imgBoxDiv);
      anchor.appendChild(detailBoxDiv);
      anchor.appendChild(newDiv);
      boxDiv.appendChild(anchor);
      colDiv.appendChild(boxDiv);
      productsContainer.appendChild(colDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




// let productListPromise = fetch("http://127.0.0.1:8000/products/");
// const productContainer = document.getElementById("product-container");


// productListPromise.then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         const productListPromise = document.getElementById("product-list");
//         data.results.forEach((product) => {
//             const productDiv = document.createElement('div');
//             productDiv.setAttribute('id', 'product-list-detail');
//             productDiv.innerHTML = `
//         <h4>Product Name:   ${product.title}</h4>
//         <p>Price:           ${product.price}</p>
//         <p>Price With Tax:  ${product.price_with_tax}</p>
//         <p>Inventory:       ${product.inventory}</p>
//         <p>Description:     ${product.description}</p>
//         <p>Catagory:        ${product.catagory}</p>
//         `;
//             if (product.images.length > 0) {
//                 const imageContainer = document.createElement('div');
//                 imageContainer.setAttribute('id', 'product-image')
//                 product.images.forEach((image) => {
//                     const imgElement = document.createElement('img');
//                     imgElement.src = image.image;
//                     imgElement.alt = product.title;
//                     imageContainer.appendChild(imgElement);
//                 });
//                 productDiv.appendChild(imageContainer);
//             }
//             productListPromise.appendChild(productDiv);
//         });
//     }).catch(error => console.log(error))



// const catagoryListPrommise = fetch("http://127.0.0.1:8000/catagoryproduct/")
// const catagoryList = document.getElementById("catagory-list")

// catagoryListPrommise.then((response)=> response.json())
// .then((data)=>{
//     console.log(data)
//     data.forEach((catagory)=>{
//         const catagoryProduct = document.createElement('div')
//         catagoryProduct.setAttribute('id','catagory-product')
//         catagoryProduct.innerHTML = `
//         <h4>Catagory Name:  ${catagory.title}</h4>
//         `
//         if (catagory.products.length>0){
//             catagory.products.forEach((product)=>{
//                 const productDetails = document.createElement('dev')
//                 productDetails.setAttribute('id','product-details')
//                 productDetails.innerHTML=`
//                 <h5>Product Name:   ${product.title}</h5>
//                 <p>Price:           ${product.price}</p>
//                 `
//                 if (product.images.length>0){
//                     const imageContainer = document.createElement('div');
//                     imageContainer.setAttribute('id', 'product-image')
//                     product.images.forEach((image)=>{
//                         const imgElement = document.createElement('img');
//                         imgElement.src = image.image|| placeholderImageUrl;
//                         imgElement.alt = product.title;
//                         imageContainer.appendChild(imgElement);
//                     })
                    
//                     productDetails.appendChild(imageContainer)
//                 }else {
//                     // Use a placeholder image when there are no images available
//                     const placeholderImgElement = document.createElement('img');
//                     placeholderImgElement.src ="https://placehold.co/400";
//                     placeholderImgElement.alt = 'Image Not Available';
//                     productDetails.appendChild(placeholderImgElement);
//                 }
//                 catagoryProduct.appendChild(productDetails)
//             })
            
//         }
        
//         catagoryList.appendChild(catagoryProduct)
//     })

// })
