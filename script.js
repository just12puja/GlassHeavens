
//   site animation title
gsap.fromTo("#title",{
    scale : 7,
    y : -140
},{
    scale : 1,
    y : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#title",
        end : "bottom top",
        invalidateOnRefresh : true,
        scrub : 2,
        ease : "expoScale(0.5,1,7,none)",
}
 })
//  discover section animation
const discover_tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".slide",
        start : "top 20%",
        scrub : 2,
        ease : "ease"
}})
discover_tl.to(".slide1",{
    y : 200 
}); 
discover_tl.to(".slide2",{
    y : 200 
}); 
discover_tl.to(".slide3",{
    y : 200 
}); 
discover_tl.to(".slide4",{
    y : 200 
}); 
// image section animation
gsap.to("#image-section2",{
    clipPath : "circle(100% at 50% 50%)",
    scrollTrigger : {
        trigger : "#image-section > .container",
        start : "top top",
        end : "bottom bottom ",
        scrub : 2,
        pin: true,
        onEnter: () => {document.body.classList.add("dark-theme");},
        onLeaveBack: () => {document.body.classList.remove("dark-theme");}
    }

})
// furniture section animantion
// select all grid
const gridWrapper= gsap.utils.toArray(".grid-items");
gridWrapper.forEach(wrapper  => {
    // select all box elements within the current wrapper
    const boxes = wrapper.querySelectorAll('.box');
    // create GSAP Animation with each box element
    boxes.forEach(box => {
        // create gsap animation 
        gsap.from(box,{
            y : 500,
            duration : 0.5,
            scrollTrigger : {
                trigger : box,
                start :"top bottom",
                end : "bottom top",
                scrub : 4
            }

        })
    })

}); 
// change the text of Furniture section
const heading = document.querySelector(".furniture-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");

let text_h2=gsap.timeline(
    {
        scrollTrigger:{
            trigger: "#furniture-section > .container",
            start : "top 50%",
            end : "top 50%",
            scrub : 2,
            ease : "ease",
            // markers : true,
            onEnter : ()=>{
           
                gsap.set(heading,{position : "fixed", bottom : 0, zIndex : -1000})  
             
       
        },
        onEnterBack : () => {
          
            gsap.set(heading,{position : "relative", bottom:"0"})
            
        }
        }
    }
)
// change to text  on scroll
sections.forEach((section,i)=>{
    // create gsap animation
    ScrollTrigger.create({
        trigger: section,
        start : "bottom-=20% bottom",
        end : "bottom top",
        onEnter : () => {
            updateHeading(i)
            //    add dark theme class to body when index is 0
        if(i === 0){
            document.body.classList.remove("dark-theme")
        }
        },
        onEnterBack : () => {
            updateHeading(i)
             if(i===0){
            document.body.classList.add("dark-theme")
        }
        }
    })
})
// update the heading text based on index
function updateHeading(index){
    const headingTexts = ["Furniture","Galleries","Interiors","Bedroom"];
    heading.textContent = headingTexts[index];
}