console.log("Pixel Wave Studio Website Loaded!");
function openImage(src){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
  if (count < target) {
    counter.innerText = Math.ceil(count + increment);
    setTimeout(updateCounter, 20);
} else {
    if (target >= 1000) {
        counter.innerText = (target / 1000) + "K+";
    } else if (target == 100) {
        counter.innerText = "100%";
    } else {
        counter.innerText = target;
    }
}
