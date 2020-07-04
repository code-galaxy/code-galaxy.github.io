// slider.init();


// ====== find element ======
let prevSliderBtn = document.getElementById("show-prev");
let nextSliderBtn = document.getElementById("show-next");
let sliderImg = document.getElementById("slider-img");

// ====== subscribe to events ======
prevSliderBtn.addEventListener("click", onPrevSliderBtnClick);
nextSliderBtn.addEventListener("click", onNextSliderBtnClick);

// ====== create images array ======


let imageArray =[];
imageArray.push("images/01.jpg");
imageArray.push("images/02.jpg");
imageArray.push("images/03.jpg");
imageArray.push("images/04.jpg");
imageArray.push("images/05.jpg");
imageArray.push("images/06.jpg");



let currentImageIndex = 0;

sliderImg.src = imageArray[currentImageIndex];


// ====== function definitions ======

function onPrevSliderBtnClick(){
    currentImageIndex--;
    sliderImg.src = imageArray[currentImageIndex];
    
    if(currentImageIndex < 0) {
        currentImageIndex = (imageArray.length-1);
        currentImageIndex--;
        sliderImg.src = imageArray[currentImageIndex];
    }
}
function onNextSliderBtnClick(){
    currentImageIndex++;
    sliderImg.src = imageArray[currentImageIndex];
 
    if(currentImageIndex === imageArray.length-1 ){
        currentImageIndex = -1;
        currentImageIndex++;
        sliderImg.src = imageArray[currentImageIndex];
    }
}