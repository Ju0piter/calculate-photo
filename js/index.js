window.addEventListener("scroll", e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY/2}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper:'.wrapper', 
    content:'.content'
})
