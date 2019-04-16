var slider = document.querySelector('#priority');


slider.addEventListener("change", function () {
    if (slider.value == 1) {
        slider.style.backgroundColor = "rgb(69, 173, 73)";
        console.log(slider.value);
    }
    if (slider.value == 2) {
        slider.style.backgroundColor = "rgb(223, 179, 35)";
        console.log(slider.value);
    }
    if (slider.value == 3) {
        slider.style.backgroundColor = "rgb(212, 19, 19)";
        console.log(slider.value);
    }
})