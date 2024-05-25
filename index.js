const bars = document.getElementById("bars")
const Property = document.querySelector(".header-list")
bars.addEventListener('click', () => {
    Property.classList.toggle("active")
    bars.classList.toggle("fa-remove")
})

window.addEventListener("scroll" , () =>{
    document.querySelector(".side-menu").classList.toggle
    ("window-scroll", window.scrollY > 2000)
    console.log("vikram")
})

const chatbottoggler = document.querySelector(".chatbot-toggler")
const login = document.querySelector(".login-register-modal")
const remove = document.getElementById("remove")

chatbottoggler.addEventListener('click',() => {
    login.classList.add("active")
   })
   
remove.addEventListener("click" , () => {
    login.classList.remove("active")
})



function myFunction(placeholder){
    document.querySelector('#placeholder').placeholder = `"search" ${placeholder}`
}