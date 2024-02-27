const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim(){
    let tl= gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.4,
        ease:Expo.easeInOut

    })
    .to(".elements",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:0.2
    });
    tl.from("#home-footer",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:0.5,
        
    })

}

function circleslim(){
    let xscale=1;
    let yscale=1;
      
    let xpreval=0;
    let ypreval=0;
    window.addEventListener("mousemove",function(dets){
        // clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX-xpreval);
        yscale= gsap.utils.clamp(0.8,1.2,dets.clientY-ypreval);
    xpreval=dets.clientX;
    ypreval=dets.clientY;        
       movecircle(xscale,yscale);
       timeout= setTimeout(function(){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}x,${dets.clientY}px) scale(1,1)`;
       },100);
    })
}
function movecircle(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale,yscale})`;
    })
    
};


circleslim();
firstPageAnim();
movecircle();

// let plug = document.querySelector(".elem");
// let boximg =document.querySelector("#elemimg1");
// let mini= document.querySelector("#minicircle");

// plug.addEventListener("mousemove",function(dets){
//     boximg.style.opacity=1;
//     boximg.style.left=dets.x+"px";
//     boximg.style.top=dets.y+"px";
//     boximg.style.ease=power1; 
    
// })

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });