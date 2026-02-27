const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

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

const newsdayWordEl = document.querySelector("#newsday-word");
if (newsdayWordEl) {
  const days = [
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
  ];
  let dayIndex = 0;
  setInterval(() => {
    dayIndex = (dayIndex + 1) % days.length;
    newsdayWordEl.textContent = days[dayIndex];
  }, 5600);
}

const weekdayLineEl = document.querySelector("#weekday-line");
const weekdayLine2El = document.querySelector("#weekday-line-2");
if (weekdayLineEl && weekdayLine2El) {
  const options = [
    "Turn your weekday into a strong day.",
    "You worked Monday. Monday owes you a drink.",
    "Wednesday called. It needs a drink too.",
    "The weekend starts when we say it does.",
    "We do not wait for Friday.",
    "Weekends are for amateurs.",
    "Open nightly. Judging no one.",
    "We peak on Tuesdays.",
    "Come as you are. Come any day you are.",
  ];

  const shuffled = [...options].sort(() => Math.random() - 0.5);
  weekdayLineEl.textContent = shuffled[0];
  weekdayLine2El.textContent = shuffled[1];
}
