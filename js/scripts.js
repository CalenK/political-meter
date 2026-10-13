function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("leftLeaning").setAttribute("class", "hidden");
  document.getElementById("center").setAttribute("class", "hidden");
  document.getElementById("rightLeaning").setAttribute("class", "hidden");
};

window.onload = function() {
  console.log("onload");
  const form = document.querySelector("#my-form");
  console.log(form);
  form.onsubmit = function(event) {
    event.preventDefault();
    console.log("has prevented default");
    hideResultsAndError();
    const womenRights = document.querySelector('input[name="women-rights"]:checked').value;
    const immigrants = document.querySelector('input[name="immigrants"]:checked').value;
    const queerRights = document.querySelector('input[name="queers"]:checked').value;
    console.log(womenRights);
    // if (womenRights && immigrants && queerRights) {
    //   if () {
    //     document.getElementById("left-leaning").removeAttribute("class");
    //   } else if () {
    //     document.getElementById("right-leaning").removeAttribute("class");
    //   } else {
    //     document.getElementById("center").removeAttribute("class");
    //   }
    // } else {
    //   document.getElementById("error-message").removeAttribute("class");
    // }
  };
};