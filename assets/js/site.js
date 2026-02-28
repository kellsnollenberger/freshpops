(function () {
  function restyleMailerLiteForm() {
    var root = document.querySelector("#signup");
    if (!root) return;

    var emailInputs = root.querySelectorAll('input[type="email"]');
    emailInputs.forEach(function (input, index) {
      if (!input.getAttribute("aria-label")) {
        input.setAttribute("aria-label", "Email address");
      }
      if (!input.id) {
        input.id = "signup-email-" + index;
      }
      input.setAttribute("autocomplete", "email");
    });

    var submitBtn = root.querySelector(".ml-form-embedSubmit button, input[type='submit']");
    if (submitBtn && !submitBtn.getAttribute("aria-label")) {
      submitBtn.setAttribute("aria-label", "Join Fresh Pops email updates");
    }
  }

  setTimeout(restyleMailerLiteForm, 350);
  setTimeout(restyleMailerLiteForm, 1200);

  var signupRoot = document.querySelector("#signup");
  if (signupRoot && window.MutationObserver) {
    var observer = new MutationObserver(restyleMailerLiteForm);
    observer.observe(signupRoot, { childList: true, subtree: true });
  }

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
