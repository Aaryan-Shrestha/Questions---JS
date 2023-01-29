// TRYING MYSELF

// const plusBtn = document.querySelectorAll(".plus-icon");
// const minusBtn = document.querySelectorAll(".minus-icon");
// const question = document.querySelectorAll(".question");

// FIRST TRY
// FOLLOWING CODES ONLY WORKS FOR FIRST ARTICLE TAG IN HTML USING QUERYSELECTOR() METHOD:::::
// plusBtn.addEventListener("click", function () {
//   question.classList.toggle("show-text");
// });
// minusBtn.addEventListener("click", function () {
//   question.classList.toggle("show-text");
// });

// SECOND TRY
// FOLLOWING CODES WORKS SUPER FINE USING QUERYSELECTORALL() METHOD THAT (TRANVERSES THROUGH THE DOM i.e [moving up and down in the DOM tree]) AND TOGGLES THE CLASS "show-text" IN THE ARTICLE TAG IN HTML, BUT IT'S VERY CHEAP AND UNEFFICIENT WAY OF DOING IT::::::

// plusBtn.forEach(function (plus) {
//   plus.addEventListener("click", function (e) {
//     const variable = e.currentTarget.parentElement.parentElement.parentElement;
//     variable.classList.toggle("show-text");
//   });
// });
// minusBtn.forEach(function (plus) {
//   plus.addEventListener("click", function (e) {
//     const variable = e.currentTarget.parentElement.parentElement.parentElement;
//     variable.classList.toggle("show-text");
//   });
// });

// HOW A PRO DOES THE ABOVE CODE WITH MUCH MORE EFFICIENCY AND NEATLY USING THE TWO FOLLOWING WAYS:::::
//using selectors inside the element
// traversing the dom

// 1ST WAY: (traversing the dom) -> EASY TO UNDERSTAND LOGIC

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

// 2ND WAY: (using selectors inside the element) -> ADVANCE LOGIC USED
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
