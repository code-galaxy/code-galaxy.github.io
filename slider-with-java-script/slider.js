let slider = {
    imageArray: [],
    currentImageIndex: 0,

    prevSliderBtn: document.getElementById("show-prev"),
    nextSliderBtn: document.getElementById("show-next"),
    sliderImg: document.getElementById("slider-img"),

    start: function () {
        let that = this;

        // ====== subscribe to events ======

        this.prevSliderBtn.addEventListener("click", function(event) {
            that.onPrevSliderBtnClick(event);
        });

        this.nextSliderBtn.addEventListener("click", function(event){
            that.onNextSliderBtnClick(event);
        });
        

        // ====== create images array ======
        this.imageArray.push("images/01.jpg");
        this.imageArray.push("images/02.jpg");
        this.imageArray.push("images/03.jpg");
        this.imageArray.push("images/04.jpg");
        this.imageArray.push("images/05.jpg");
        this.imageArray.push("images/06.jpg");


        this.sliderImg.src = this.imageArray[this.currentImageIndex];
    },

        onPrevSliderBtnClick: function(event) {
            this.currentImageIndex--;
            this.sliderImg.src = this.imageArray[this.currentImageIndex];

            if (this.currentImageIndex < 0) {
                this.currentImageIndex = (this.imageArray.length - 1);
                this.currentImageIndex--;
                this.sliderImg.src = this.imageArray[this.currentImageIndex];
            }
        },

        onNextSliderBtnClick: function(event) {
            this.currentImageIndex++;
            this.sliderImg.src = this.imageArray[this.currentImageIndex];

            if (this.currentImageIndex === this.imageArray.length - 1) {
                this.currentImageIndex = -1;
                this.currentImageIndex++;
                this.sliderImg.src = this.imageArray[this.currentImageIndex];
            }
        },
    };
