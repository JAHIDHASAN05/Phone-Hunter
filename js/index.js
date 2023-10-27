
const loadPhones= async(searchText ,dataLimit)=>{
    const url =  `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data= await res.json()
    displayPhones(data.data ,dataLimit)

}


const displayPhones=(phones ,dataLimit)=>{
     
// show less then 10
const showAllBtn=document.getElementById("show-all")
if( dataLimit && phones.length>10){
    phones=phones.slice(0,10)
    showAllBtn.classList.remove("d-none")

}



// no phone found massge funtion
    const NoPhonefound= document.getElementById("no-phone-found")
    if(phones.length ===0){
        NoPhonefound.classList.remove("d-none")
        showAllBtn.classList.add("d-none")

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
                      <button onclick="loadPhoneDetail('${phone.slug}')"  class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#phone-detail">Detail</button>
                    </div>
        `
        PhoneContainer.appendChild(phoneDiv);
        console.log(phone)
    })
    loadSpinner(false)

}

// search funtion--------------

const searchProcces=(dataLimit)=>{
    loadSpinner(true)
    const searchField=document.getElementById("search-field")
    const searchText=searchField.value ;
    loadPhones(searchText ,dataLimit)
}

document.getElementById("btn-search").addEventListener('click', function(){
   searchProcces(10)
})
// searh enter button funtion
document.getElementById("search-field").addEventListener("keypress", function(key){
    
    if(key.key == "Enter"){
        searchProcces(10)
    }
})

// show all btn all loading function

document.getElementById("btn-show-all").addEventListener("click", function(){
    searchProcces();
    const showAllBtn=document.getElementById("show-all")
    showAllBtn.classList.add("d-none")
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



// modal deatil button function starts
const loadPhoneDetail= async(id)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    const res=await fetch(url)
    const data=await res.json()
    displayPhonesDetail(data.data)

}
const displayPhonesDetail=(phone)=>{
    const detailTitle=document.getElementById("detail-title")
    detailTitle.innerText=phone.name;
    const DetailBody=document.getElementById("detail-body")
    DetailBody.innerHTML=`
    <img src="${phone.image}">
    <p> detail :
      <li>${phone.name}</li>
      <li>${phone.mainFeatures.storage}</li>
      <li>${phone.mainFeatures.displaySize}</li>
      <li>${phone.releaseDate}</li>                    
      <li>${phone.slug}</li>                    
    
    </p>
    `
console.log(phone)

}

loadPhones("a")