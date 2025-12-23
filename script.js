const inputbox = document.getElementById("inputbox");
const button = document.getElementById("btn");
const image = document.querySelector("img");
const mainbox = document.querySelector(".container");
const qrbox = document.querySelector(".box2")

button.addEventListener("click", () => {
    const inputvalue = inputbox.value.trim();
    if (inputvalue == "") {
        alert("Please Enter something");
        return
    }
    else {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        image.onclick = () => {
            mainbox.style.display="none";
            qrbox.style.display="block";
            qrbox.style.width="100%";
            image.style.width="100%"
            window.print();  
        };
        inputbox.value = "";

    }
})

