let slider = document.querySelector('#priority-slider');


slider.addEventListener("change", function () {
    if (slider.value == 1) {
        slider.classList.remove("slider1");
        slider.classList.remove("slider2");
        slider.classList.add("slider");
    }
    if (slider.value == 2) {
        slider.classList.remove("slider");
        slider.classList.remove("slider2");
        slider.classList.add("slider1");
    }
    if (slider.value == 3) {
        slider.classList.remove("slider");
        slider.classList.remove("slider1");
        slider.classList.add("slider2");
    }
});