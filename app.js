var tes = gsap.timeline()

tes.from("nav" , {

    x:300,
    opacity:0,
    duration:1,
    delay:0.5,
    
})

var types = gsap.timeline()

types.from(".header-content",{

    y:100,
    opacity:0,
    duration:1,
    stagger: 0.3,
    
})

var icon = gsap.timeline()

icon.from(".faq",{

    x:80,
    opacity:0,
    duration:1,
    
})


gsap.from(".text-col h2",{
    opacity:0,
    duration:2,
    x:-200,
    scrollTrigger:{
        trigger:".text-col h2",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        
        

    }

 })

gsap.from(".footer",{
    opacity:0,
    duration:2,
    y:500,
    

})


// gsap.from("#bantext h5",{
//     opacity:0,
//     duration:2,
    
//     y:500,
//     scrollTrigger:{
//         trigger:"bantext h5",
//         scroller:"body",
//         start:"top 50%",
        

//     }

// })