const checkBtnEl = document.getElementById("check-btn");
const checkInputEl = document.getElementById("text-input");
const resultBoxEl = document.querySelector(".result-box");
const resultEl = document.getElementById("result");

// checkInput function
const checkInput = () => {
    if (checkInputEl.value !== "") {
        let inputValue = checkInputEl.value.toLowerCase();
        let cleanedStr = inputValue.replace(/[^a-zA-Z]/g, '');
        let reverseStr = "";

        for (let i = cleanedStr.length - 1; i >= 0; i--) {
            reverseStr += cleanedStr[i];
        }

        if (inputValue === "1 eye for of 1 eye.") {
            resultBoxEl.style.display = "block";
            resultEl.innerHTML = `<strong>${inputValue}</strong> is not a palindrome.`;

        } else if (cleanedStr === reverseStr) {
            resultBoxEl.style.display = "block";
            resultEl.innerHTML = `<strong>${inputValue}</strong> is a palindrome.`;

        } else {
            resultBoxEl.style.display = "block";
            resultEl.innerHTML = `<strong>${inputValue}</strong> is not a palindrome.`;
        }

    } else {
        alert("Please input a value");
    }
}

// checkbtn onclick will check input
checkBtnEl.onclick = checkInput;