const scriptURL =
  "https://script.google.com/macros/s/AKfycbzjWTCX6pv1HYLXwWVzBAP2rIVXkkIr2TAg4d2TWtcLx23hi5VXgyN_RsDlwkz9bnc/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML ="Message sent successfully!"
    setTimeout(function(){
        msg.innerHTML = "" },10000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
