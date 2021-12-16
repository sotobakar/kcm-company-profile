const copyButton = document.getElementById("phone-copy-button");
const phoneNumber = document.getElementById("phone-number");

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(phoneNumber.innerText)
    .then(() => {
      console.log("Copied");
    })
    .catch(() => {
      console.log("Fail to copy");
    });
});
