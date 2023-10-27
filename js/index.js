
const loadPhones= async(searchText)=>{
    const url =  `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data= await res.json()
    displayPhones(data.data)

}


const displayPhones=(phones)=>{




    const NoPhonefound= document.getElementById("no-phone-found")
    if(phones.length ===0){
        NoPhonefound.classList.remove("d-none")
    }
    else{
        NoPhonefound.classList.add("d-none")
    }

    const PhoneContainer= document.getElementsByClassName("phone-container")[0];
    PhoneContainer.innerHTML="";
    phones.forEach(phone=>{
        const phoneDiv=document.createElement('div')
        phoneDiv.innerHTML=`
        <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a  class="btn btn-primary">Detail</a>
                    </div>
        `
        PhoneContainer.appendChild(phoneDiv);
        console.log(phone)
    })
    loadSpinner(false)

}

// search funtion--------------

document.getElementById("btn-search").addEventListener('click', function(){
    loadSpinner(true)
    const searchField=document.getElementById("search-field")
    const searchText=searchField.value ;
    loadPhones(searchText)
})
// searh enter button funtion
document.getElementById("search-field").addEventListener("keypress", function(key){
    
    if(key.key == "Enter"){
        loadSpinner(true)
        const searchField=document.getElementById("search-field")
        const searchText=searchField.value ;
        loadPhones(searchText)
    }
})

// loadSpinnerFunction---------------

const loadSpinner=(isLoading)=>{
 const loder =document.getElementById("loader")
   if(isLoading){
    loder.classList.remove("d-none")
   }
   else{
    loder.classList.add("d-none")
   }
    
}

loadPhones("a")