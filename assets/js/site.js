(function () {
  function signupHasLiveForm(root) {
    return !!root.querySelector(
      ".ml-form-embedWrapper, .ml-form-successBody, .ml-form-embedSubmit button, input[type='email'], input[type='submit']"
    );
  }

  function setSignupFallbackVisibility(root, shouldShow) {
    var wrap = root.querySelector(".signup-form-wrap");
    var fallback = root.querySelector(".signup-fallback");
    if (!wrap || !fallback) return;

    wrap.classList.toggle("is-fallback-visible", shouldShow);
    wrap.classList.toggle("has-live-form", !shouldShow && signupHasLiveForm(root));
    fallback.hidden = !shouldShow;
  }

  function restyleMailerLiteForm() {
    var root = document.querySelector("#signup");
    if (!root) return;

    var hasLiveForm = signupHasLiveForm(root);
    if (hasLiveForm) {
      setSignupFallbackVisibility(root, false);
    }

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

    if (!hasLiveForm && window.__freshPopsMailerLiteFailed) {
      setSignupFallbackVisibility(root, true);
    }
  }

  setTimeout(restyleMailerLiteForm, 350);
  setTimeout(restyleMailerLiteForm, 1200);
  setTimeout(function () {
    var root = document.querySelector("#signup");
    if (!root || signupHasLiveForm(root)) return;
    setSignupFallbackVisibility(root, true);
  }, 2800);

  var signupRoot = document.querySelector("#signup");
  if (signupRoot && window.MutationObserver) {
    var observer = new MutationObserver(restyleMailerLiteForm);
    observer.observe(signupRoot, { childList: true, subtree: true });
  }

  window.addEventListener("mailerlite:failed", function () {
    var root = document.querySelector("#signup");
    if (!root || signupHasLiveForm(root)) return;
    setSignupFallbackVisibility(root, true);
  });

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
