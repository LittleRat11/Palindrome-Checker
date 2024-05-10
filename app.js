const checkBtn = document.querySelector("#checkBtn");
const inputText = document.querySelector("#userInput");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (text.length === 0) {
        document.querySelector("#input-error").innerHTML = `<span class="msg">Input cannot be empty</span>`;
        return;
    }
    // *Remove any non-alphanumeric characters and convert to lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // *Check if the cleaned text is a palindrome by comparing the original and reversed strings
    const isPalindrome = cleanText === cleanText.split("").reverse("").join("");

    const message = isPalindrome ?
        `<span>Yes.</span>It's a palindrome!` :
        `<span>No.</span>It isn't a palindrome!`;
    result.innerHTML = message;
    result.classList.remove("error", "success");
    setTimeout(() => {
        result.classList.add(isPalindrome ? "success" : "error");
    }, 10);
})