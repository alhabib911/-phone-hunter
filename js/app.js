const allProducts = () => {
    
    
    document.getElementById("all-products").innerHTML = ""
    const searchValue = document.getElementById("search-box").value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch (url)
    .then(res => res.json())
    .then((data) => {showProductsDetails(data.data)
        document.getElementById("search-box").value= ""
    
    })
    
    
    // console.log(searchValue);
}

const showProductsDetails = (products) => {
    
 for(const product of products.slice(0, 20)){
    const parents = document.getElementById("all-products")
    const div = document.createElement('div')
    div.innerHTML = `<div>
    <div class=" card p-24 bg-zinc-100	mb-5 rounded-lg border border-green-900">
        <div class="product-pic flex justify-center ">
            <img src="${product.image}" alt="">
            </div>  
                <div class="my-5">
                <h4 class="text-center">Name: ${product.phone_name}</h4>
                <h6 class="text-center">Brand Name: ${product.brand}</h6>
                <div class="details_btn ml-7 mt-3">
                <button onclick="details('${product.slug}')" class="bg-green-800 text-white rounded px-5 py-2">Details</button>
                </div>
            </div>
            </div>
</div>`

    parents.appendChild(div)

    
    // console.log(product);
}  
}


const details = (info) => {
    // console.log(info);
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch (url)
        .then((res) => res.json())
        .then((data) => savedDetails(data.data)
        // console.log(data);
        )
}

const savedDetails = (info) => {

    console.log("info", info);

    document.getElementById("details-container").innerHTML = 
    `<div class="left-area ml-12 flex justify-center">
    <img class="" src="${info.image}" alt="">
    </div>
<div class="right-area ml-5">
    <div class="details">
        <div class="mt-8">
        <h2 class="font-semibold text-emerald-900 text-xl">Product details of ${info.name}</h2>
        <h4>Name: ${info.name}</h4>
        <h4>Brand: ${info.brand}</h4>
        <h4>Chipset:${info.mainFeatures.chipSet}</h4>
        <h4>Display Size: ${info.mainFeatures.displaySize}</h4>
        <h4>Memory: ${info?.mainFeatures.memory}</h4>
        <h4>Storage: ${info.mainFeatures.storage}</h4>
        <h4>Releage Date: ${info.releaseDate ? info.releaseDate : "No relase Date found." }</h4>
        <h3 class="font-semibold text-orange-900 text-xl">Others</h3>
        <h4>WLAN: ${info?.others?.WLAN ? info.others.WLAN : "No data found"}</h4>
        <h4>Bluetooth Date: ${info?.others?.Bluetooth ? info.others.Bluetooth : "No data found"}</h4>
        <h4>GPS: ${info?.others?.GPS ? info.others.GPS: "No data found"}</h4>
        <h4>Sensors: ${info.mainFeatures.sensors}</h4>
        </div>
        </div>
        </div>
</div>`
}