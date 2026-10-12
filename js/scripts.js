function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("leftLeaning").setAttribute("class", "hidden");
  document.getElementById("center").setAttribute("class", "hidden");
  document.getElementById("rightLeaning").setAttribute("class", "hidden");
}

onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const womenRights = document.querySelector('input[name="womenRights"]:checked').value
    const immigrants = document.querySelector('input[name="immigrants"]:checked').value;
    const queerRights = document.querySelector('input[name="queers"]:checked').value;
    console.log(womenRights)
    if (womenRights && immigrants && queerRights) {
      if ()
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  };
};