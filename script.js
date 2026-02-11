const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

function restyleMailerLiteForm() {
  const root = document.querySelector("#signup");
  if (!root) return;

  const fields = root.querySelectorAll('input[type="email"], input[type="text"], input[type="tel"]');
  fields.forEach((field) => {
    field.style.setProperty("background-color", "#fffaec", "important");
    field.style.setProperty("border", "1px solid #572d2d", "important");
    field.style.setProperty("border-radius", "0", "important");
    field.style.setProperty("color", "#572d2d", "important");
    field.style.setProperty("box-shadow", "none", "important");
  });

  const submitBtn = root.querySelector(".ml-form-embedSubmit button, input[type='submit']");
  if (submitBtn) {
    submitBtn.style.setProperty("background-color", "#753742", "important");
    submitBtn.style.setProperty("border", "1px solid #753742", "important");
    submitBtn.style.setProperty("color", "#fffaec", "important");
    submitBtn.style.setProperty("border-radius", "0", "important");
    submitBtn.style.setProperty("box-shadow", "none", "important");
    submitBtn.style.setProperty("text-transform", "uppercase", "important");
    submitBtn.style.setProperty("letter-spacing", "0.08em", "important");
  }
}

setTimeout(restyleMailerLiteForm, 400);
setTimeout(restyleMailerLiteForm, 1200);

const signupRoot = document.querySelector("#signup");
if (signupRoot) {
  const mlObserver = new MutationObserver(() => restyleMailerLiteForm());
  mlObserver.observe(signupRoot, { childList: true, subtree: true });
}
