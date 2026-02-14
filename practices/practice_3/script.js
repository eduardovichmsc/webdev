const MAX_CHARS = 200;

const textarea = document.querySelector("textarea");
const charCount = document.querySelector(".char_count");
const wordCount = document.querySelector(".word_count");
const warning = document.querySelector("#limit_warning");
const clearBtn = document.querySelector("#clear_btn");

const updateCounts = () => {
  const lengthCounter = textarea.value.length;
  const wordCounter = textarea.value.split(" ").length;
  charCount.innerHTML = `Character: ${lengthCounter} / 200`;
  wordCount.innerHTML = `Words: ${wordCounter} / 200`;

  if (lengthCounter >= MAX_CHARS) {
    warning.classList.add("danger");
    warning.innerHTML = "Character limit reached!";
  } else if (lengthCounter >= MAX_CHARS * 0.8) {
    warning.classList.add("warning");
    warning.innerHTML = "Approaching limit!";
  } else {
    warning.classList.remove("danger");
    warning.classList.remove("warning");
    warning.innerHTML = "";
  }
};

textarea.addEventListener("input", () => updateCounts());

clearBtn.addEventListener("mousedown", () => {
  textarea.value = "";
  updateCounts();
});
