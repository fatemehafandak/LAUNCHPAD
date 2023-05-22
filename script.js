window.onload=function(){
    let header=document.querySelector('.headers')
    setInterval(() => {
        
        let star=document.createElement("span")
        star.setAttribute("class","star") 
        star.style.top=`${Math.floor(Math.random()*-600)}px`
        star.style.right="-200px"
        star.classList.add("animation")
        header.appendChild(star)
    
    }, 1000);
    //****************************** */
    setInterval(() => {
        let spiral=document.querySelector('.spiral')
        let hole=document.createElement("div")
        hole.setAttribute("class","hole1")
        spiral.appendChild(hole)
        setTimeout(() => {
            hole.style.display="none"
        }, 3900);
    }, 300);
//***********************8 */
setInterval(() => {
    let leftstop=document.querySelector('.left-top')
    let stone=document.createElement("div")
    stone.setAttribute("class","stone-left-top")
    stone.style.left=`${Math.floor(Math.random()*1)}px`
    stone.style.top=`${Math.floor(Math.random()*-300)}px`
    stone.style.clipPath=`polygon(12% ${25 + Math.random()*(50 - 25 + 1)}%, ${70 + Math.random()*(90 - 70 + 1)}% ${51 + Math.random()*(65 - 51 + 1)}%, ${70 + Math.random()*(80 - 70 + 1)}% ${70 + Math.random()*(90 - 70 + 1)}%, ${12 + Math.random()*(40 - 12 + 1)}% ${90 + Math.random()*(100 - 90 + 1)}%)`
    stone.style.filter="blur(5px)"
    console.log(stone)
    leftstop.appendChild(stone)
    setTimeout(() => {
        stone.remove()
    }, 1990);
}, 500);
setInterval(() => {
    let rightstop=document.querySelector('.right-top')
    let stone1=document.createElement("div")
    stone1.setAttribute("class","stone-right-top")
    stone1.style.right=`${Math.floor(Math.random()*1)}px`
    stone1.style.top=`${Math.floor(Math.random()*-300)}px`
    stone1.style.clipPath=`polygon(21% ${50 + Math.random()*(70 - 56 + 1)}%, ${80 + Math.random()*(100 - 80 + 1)}% ${30 + Math.random()*(50 - 30 + 1)}%, ${80 + Math.random()*(100 - 80 + 1)}% ${80 + Math.random()*(100 - 80 + 1)}%, ${10 + Math.random()*(40 - 14 + 1)}% ${80 + Math.random()*(90 - 70 + 1)}%)`
    
    rightstop.appendChild(stone1)
    setTimeout(() => {
        stone1.remove()
    }, 1990);
}, 500);

setInterval(() => {
    let leftsbottom=document.querySelector('.left-bottom')
    let stone3=document.createElement("div")
    stone3.setAttribute("class","stone-left-bottom")
    stone3.style.left=`${Math.floor(Math.random()*1)}px`
    stone3.style.bottom=`${Math.floor(Math.random()*-300)}px`
    stone3.style.clipPath=`polygon(12% ${25 + Math.random()*(40 - 25 + 1)}%, ${70 + Math.random()*(86 - 70 + 1)}% ${51 + Math.random()*(58 - 51 + 1)}%, ${70 + Math.random()*(79 - 70 + 1)}% ${76 + Math.random()*(90 - 74 + 1)}%, ${12 + Math.random()*(25 - 12 + 1)}% ${90 + Math.random()*(100 - 90 + 1)}%)`
    
    leftsbottom.appendChild(stone3)
    setTimeout(() => {
        stone3.remove()
    }, 1990);
}, 500);
setInterval(() => {
    let rightsbottom=document.querySelector('.right-bottom')
    let stone4=document.createElement("div")
    stone4.setAttribute("class","stone-right-bottom")
    stone4.style.right=`${Math.floor(Math.random()*1)}px`
    stone4.style.bottom=`${Math.floor(Math.random()*-300)}px`
    stone4.style.clipPath=`polygon(21% ${56 + Math.random()*(60 - 56 + 1)}%, ${90 + Math.random()*(100 - 90 + 1)}% ${30 + Math.random()*(40 - 30 + 1)}%, ${90 + Math.random()*(100 - 90 + 1)}% ${90 + Math.random()*(100 - 80 + 1)}%, ${10 + Math.random()*(25 - 14 + 1)}% ${80 + Math.random()*(90 - 80 + 1)}%)`
    
    rightsbottom.appendChild(stone4)
    setTimeout(() => {
        stone4.remove()
    }, 1990);
}, 500);

}
//****************************************************** */
let _client=document.querySelectorAll('.clients')
_client.forEach((item)=>{

   item.addEventListener("mouseover",(e)=>{
    let x=e.clientX-e.target.offsetLeft
    let z=x-e.target.offsetWidth
    let y=e.clientY-e.target.offsetTop
    let k=y-e.target.offsetHeight
    
    item.style.transform=`translateX(${z/5}px) translateY(${k/5}px)`
   })
   item.addEventListener("mouseout",()=>{
    item.style.transform=`translate(0px) `
   })

})
//****************************************************** */
let title2=document.querySelector(".title-2")
let _focus=document.querySelector(".focus")
let _grow=document.querySelector(".grow")
let _not=document.querySelector(".not")
let _h3=document.querySelector(".h3")
let start=document.querySelector('.start')
let ends=document.querySelector(".endtoend")
let explore=document.querySelector('.explore')
let logo2=document.querySelector('.logo2')
let automation=document.querySelector(".automation")
let hide=document.querySelectorAll(".hide")
let testimotional=document.querySelector(".testimotional")
let test=document.querySelectorAll(".test")
let our=document.querySelector(".our")
let ours=document.querySelectorAll(".our-group")


window.addEventListener("scroll",function(){

   if (window.scrollY>title2.offsetTop-200){
        _focus.style.opacity="1"
        _focus.style.transform="translateY(0)"
        _grow.style.opacity="1"
        _grow.style.transform="translateY(0)"
        _not.style.opacity="1"
        _not.style.transform="translateY(0)"
        _h3.style.opacity="1"
        _h3.style.transform="translateY(0)"

    }
    //*********************** */
    if (window.scrollY>start.offsetTop-200) {
        ends.style.transform='translateX(0)'
        ends.style.opacity=1
        explore.style.transform='translateX(0)'
        explore.style.opacity=1
        logo2.style.opacity=1
        
    }
    //***************************** */
    if (window.scrollY>automation.offsetTop-200) {
        hide.forEach(item=>{
            item.style.transform="translateY(0)"
            item.style.opacity=1
        })
        
    }
    //****************************** */
    if (window.scrollY>testimotional.offsetTop-200) {
        test.forEach(item=>{
            item.style.transform="translateY(0)"
            item.style.opacity=1
        })
        
    }
    //**************************** */
    if (window.scrollY>our.offsetTop-200) {
        ours.forEach(item=>{
            item.style.transform="translateY(0)"
            item.style.opacity=1
        })
        
    }

    

})
