
const loadPhones= async()=>{
    const url =  `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url)
    const data= await res.json()
    displayPhones(data.data)

}


const displayPhones=(phones)=>{
    const PhoneContainer= document.getElementsByClassName("phone-container")[0]
    phones.forEach(phone=>{
        const phoneDiv=document.createElement('div')
        phoneDiv.innerHTML=`
        <div class="card" style="width: 18rem;">
                    <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Detail</a>
                    </div>
        `
        PhoneContainer.appendChild(phoneDiv)
        console.log(phone)
    })

}


loadPhones()