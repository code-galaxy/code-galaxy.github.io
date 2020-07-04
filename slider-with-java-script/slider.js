// let slider = {
//     imageArray: [],
//     currentImageIndex: 0,

//     prevSliderBtn : document.getElementById("show-prev"),
//     nextSliderBtn : document.getElementById("show-next"),
//     sliderImg : document.getElementById("slider-img"),

    

//     init: function(){
//         let that= this;
//         // ====== subscribe to events ======
//         this.prevSliderBtn.addEventListener("click", function(event){
//             that.onPrevSliderBtnClick(event);
//         });
//         this.nextSliderBtn.addEventListener("click", function(event){
//         that.onNextSliderBtnClick();
//         });
        
//         // ====== create images array ======
//         imageArray.push("images/01.jpg");
//         imageArray.push("images/02.jpg");
//         imageArray.push("images/03.jpg");
//         imageArray.push("images/04.jpg");
//         imageArray.push("images/05.jpg");
//         imageArray.push("images/06.jpg");
//         imageArray.push("images/07.jpg");
//         imageArray.push("images/08.jpg");
        
        

//         this.sliderImg.src = this.imageArray[this.currentImageIndex];
//         this.prevSliderBtn.disabled  = true;
        
//     },

//     onPrevSliderBtnClick : function(event) {
//         this.currentImageIndex--;
//         this.sliderImg.src = this.imageArray[this.currentImageIndex];
//         this.nextSliderBtn.disabled == false;
    
//         if(this.currentImageIndex === 0){
//             prevSliderBtn.disabled == true;
//         }
//     },
    
//     onNextSliderBtnClick: function(event){
//         this.currentImageIndex++;
//         this.sliderImg.src = this.imageArray[this.currentImageIndex];
//         this.prevSliderBtn.disabled == false;
    
//         if(this.currentImageIndex === (this.imageArray.length-1) ){
//             this.nextSliderBtn.disabled = true;
//         }
//     },
// };