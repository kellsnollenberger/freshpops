(function () {
  var newsdayWordEl = document.querySelector("#newsday-word");
  if (newsdayWordEl) {
    var prefersReducedMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      var days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
      var idx = 0;
      window.setInterval(function () {
        idx = (idx + 1) % days.length;
        newsdayWordEl.textContent = days[idx];
      }, 5200);
    }
  }
})();
