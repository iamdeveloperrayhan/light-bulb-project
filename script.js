const bulbControl = document.querySelector("section.lamp_section .bulb");
const lampControl = document.querySelector("section.lamp_control .btn");
const colorPicker = document.getElementById("color");
const bulb = document.querySelector(".click_bulb_color");

colorPicker.addEventListener("input", function () {
    bulb.style.setProperty('--bulb-color', this.value);
});

lampControl.addEventListener("click", () => {
    bulbControl.classList.toggle("click_bulb");
    if (lampControl.textContent === "ON") {
        lampControl.textContent = "OFF";
    } else {
        lampControl.textContent = "ON";
    }
});
