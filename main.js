
const iteim = [
    {
        img:'img/1',
        description:'An annual plant that reproduces by seed, (generally)',
        weight:'500g',
        price:'5.00$'
    },
    {
        img:'img/2',
        description:'orange root vegetable, typically eaten raw or cooked',
        weight:'200g',
        price:'3.00$'
    },
    {
        img:'img/4',
        description:'edible tuber that comes from the plant Solanum tuberosum.',
        weight:'100g',
        price:'6.00$'
    },
    {
        img:'img/3',
        description:'Beef is the culinary name for meat from cattle ',
        weight:'1000g',
        price:'15.00$'
    },
    {
        img:'img/7.jpg.crdownload',
        description:'An annual plant that reproduces by seed',
        weight:'500g',
        price:'5.00$'
    },
];
const card = document.querySelector(".card");
let row = "";
iteim.map(function(iteim){
    return row +=`
            <div class="card-body w-56 h-96 text-center rounded-2xl justify-items-center bg-white ">
                <div class="image ">
                    <img src="${iteim.img}" alt="" class="w-52 rounded-2xl object-contain">
                </div>
                <div class="content">
                    <h3 class="text-sky-950">${iteim.description}</h3>
                    <p>${iteim.weight}</p>
                    <h1 class="text-2xl font-bold font-sans">${iteim.price}</h1>
                    <div class="flex justify-evenly mt-5">
                     <button class="border-2 border-sky-950 rounded-md w-20 h-8 hover:bg-sky-950 hover:text-lime-50">View</button>
                     <button class="bg-yellow-400 rounded-md w-20 h-8">Add</button>
                    </div>
                   
                </div>
            </div>
    `;
});
card.innerHTML = row;

// popup card
const iteimpop = [
    {
        name:"Cabbage",
        img1:"img/1",
        img2:"img/1",
        img3:"img/1",
        description:"Cabbage, comprising several cultivars of Brassica oleracea,is a leafy green, red (purple),or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads.  It is descended from the wild cabbage (B. oleracea var.)",
        price:"5.00$"
    },
    {
        name:"Potato",
        img1:"img/2",
        img2:"img/3",
        img3:"img/4",
        description:"A potato is a starchy, edible tuber that grows underground on the plant Solanum tuberosum. Potatoes are a member of the nightshade family, which also includes tomatoes and eggplants. ",
        price:"3.00$"
    },
    {
        name:"Carrot",
        img1:"img/4",
        img2:"img/4",
        img3:"img/4",
        description:"Carrots are a root vegetable, typically orange in color, though varieties exist in purple, black, red, white, and yellow. They are a good source of beta-carotene, fiber, vitamin K1, potassium, and antioxidants.",
        price:"6.00$"
    },
];

const cardBodies = document.querySelectorAll(".card-body");
const popup = document.querySelector(".popup");
const cardbody = document.querySelector(".card-body");
const concel = document.getElementById("concel");

cardBodies.forEach((card, index) => {
    card.addEventListener("click", function () {
        const data = iteimpop[index];

        
        document.getElementById("popup-main-img").src = data.img1;
        document.getElementById("thumb1").src = data.img1;
        document.getElementById("thumb2").src = data.img2;
        document.getElementById("thumb3").src = data.img3;

        document.getElementById("popup-desc").innerText = data.description;
        document.getElementById("popup-price").innerText = data.price;
        document.getElementById("name").innerText = data.name;

        popup.classList.add("show");
    });
});

// close outside

const popupMainImg = document.getElementById("popup-main-img");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        popupMainImg.src = thumb.src;
    });
});


cardbody.addEventListener("click",function(){
     popup.classList.add("show");
});
concel.addEventListener("click",function(){
    popup.classList.remove("show");
});

// login
const user = document.getElementById("user");
const login = document.querySelector(".login");
let i = 1;
user.addEventListener("click",function(){
    if(i==1){
        login.classList.add("logshow");
        i = 0;
    }else{
        login.classList.remove("logshow");
        i = 1;
    }
});

// confirm login with user and pass
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const erroru = document.getElementById("erroru");
const errorp = document.getElementById("errorp");
submit.disabled=true;

function confirmu(){

    if(username.value === ""){
        erroru.classList.add("errorshow");
    }else{
        erroru.classList.remove("errorshow");
        submit.disabled=false;
    }
};
function confirmp(){
    if(password.value === ""){
        errorp.classList.add("errorshow");
    }else{
        errorp.classList.remove("errorshow");
    }
};

submit.addEventListener("click",function(){
    if(username.value === ""){
        erroru.classList.add("errorshow");
    }else{
        erroru.classList.remove("errorshow");
    }
});

// sibar
const sibar = document.getElementById("sibar");
const sibarcon = document.getElementById("sibarcontent");
sibar.addEventListener("click",function(){
    if(i==1){
        sibarcon.classList.add("errorshow");
        i = 0;
    }else{
        sibarcon.classList.remove("errorshow");
        i = 1;
    }
});

fetch('https://dummyjson.com/products')
  .then(Response => Response.json())
  .then(Response =>{
    let data = Response.products;
    console.log(data);
    const card1 = document.querySelector(".card1");
    let row1 = "";
    data.map(function(data){
        return  row1 +=`
        <div class="card-body w-56 h-96 mt-5 text-center rounded-2xl justify-items-center bg-white">
            <div class="image object-cover">
                <img src="${data.images && data.images[0] ? data.images[0] : 'default-image.jpg'}" alt="" class="w-52 h-48 rounded-2xl object-cover">
            </div>
            <div class="content">
            <p>${data.title}</p>
            <p>${data.weight}g</p>
                <h1 class="text-2xl font-bold font-sans">${data.price}$</h1>
                 <div class="mt-5">
                     <button class="border-2 border-sky-950 rounded-md w-20 h-8 hover:bg-sky-950 hover:text-lime-50">View</button>
                     <button class="bg-yellow-400 rounded-md w-20 h-8">Add</button>
                </div>
            </div>
        </div>
    `;
    });
    card1.innerHTML = row1;
  })
  .catch(err => console.log(err));

  cardBodies.forEach((card, index) => {
    card.addEventListener("click", function () {
        const data = iteimpop[index];

        
        document.getElementById("popup-main-img").src = data.img1;
        document.getElementById("thumb1").src = data.img1;
        document.getElementById("thumb2").src = data.img2;
        document.getElementById("thumb3").src = data.img3;

        document.getElementById("popup-desc").innerText = data.description;
        document.getElementById("popup-price").innerText = data.price;
        document.getElementById("name").innerText = data.name;

        popup.classList.add("show");
    });
});

// close outside

