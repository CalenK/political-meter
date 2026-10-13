function hideResultsAndError() {
  document.getElementById("left-leaning").setAttribute("class", "hidden");
  document.getElementById("center").setAttribute("class", "hidden");
  document.getElementById("right-leaning").setAttribute("class", "hidden");
};

window.onload = function() {
  const form = document.querySelector("#my-form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const womenRights = document.querySelector('input[name="women-rights"]:checked').value;
    const immigrants = document.querySelector('input[name="immigrants"]:checked').value;
    const queerRights = document.querySelector('input[name="queers"]:checked').value;

    if (womenRights === "liberal" && (immigrants === "liberal") && (queerRights === "liberal")) {
      document.getElementById("left-leaning").removeAttribute("class");
    } else if (womenRights === "conservative" && (immigrants === "conservative") && (queerRights === "conservative")) {
      document.getElementById("right-leaning").removeAttribute("class");
    } else if (womenRights === "liberal" || "conservative" && (immigrants === "liberal" || "conservative") && (queerRights === "liberal" || "conservative")) {
      document.getElementById("center").removeAttribute("class");
    }
  };
};