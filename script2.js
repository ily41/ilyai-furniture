

let productHeader = document.querySelector(".product-header") 
let productSub = document.querySelector(".product-sub") 
let productContainer = document.querySelector(".product-container")
let dropDownElements = document.querySelectorAll(".product-burger-text")
let dropDownContents = document.querySelectorAll(".dropDown-content")
let mainCategory

const allImages = Object.entries(data[4])
    .filter(([key, value]) => Array.isArray(value))
    .flatMap(([_, value]) => value); 

allImages.forEach((element) => {
    productContainer.innerHTML += `
        <div 
            class="product-element"
            style="background: url('${element.replace(/ /g, "%20")}') center/cover;">
        </div>`
});   

dropDownElements.forEach((element,index) => {
    element.addEventListener("click", function (event) {
        let dropdown = event.target.nextElementSibling;
        mainCategory = event.target; 
        
        let category = data.findIndex(element => element.category === mainCategory.id) 
        productContainer.innerHTML = ''
        
        const allImages = Object.entries(data[category])
        .filter(([key, value]) => Array.isArray(value))
        .flatMap(([_, value]) => value); 


        allImages.forEach((element) => {
            productContainer.innerHTML += `
                <div 
                    class="product-element"
                    style="background: url('${element.replace(/ /g, "%20")}') center/cover;">
                </div>`
        });  
        
        
        productHeader.innerHTML = event.target.innerText;
        productSub.style.display = "none";
        productHeader.style.marginBottom = "100px";
    
        let isCurrentlyOpen = dropdown.classList.contains("down");
    
        dropDownContents.forEach(element => {
            element.style.display = "none";
            element.classList.remove("down");
        });
    
        if (!isCurrentlyOpen) {
            dropdown.style.display = "flex";
            dropdown.classList.add("down");
        }

    });
    
    
});

let dropDownTextElements = document.querySelectorAll(".dropDown-text");
    dropDownTextElements.forEach(dropDownText => {
        dropDownText.addEventListener("click", function(event) {
            productHeader.style.marginBottom = "0px"            
            productSub.style.display = "block"
            productSub.innerHTML = event.target.innerHTML
            let category = data.find(element => element.category === mainCategory.id) 
            productContainer.innerHTML = ''
            category[event.target.id].forEach((element) => {
                productContainer.innerHTML += `
                    <div 
                        class="product-element"
                        style="background: url('${element.replace(/ /g, "%20")}') center/cover;">
                    </div>`
            });
        });
    });



    
    


    



