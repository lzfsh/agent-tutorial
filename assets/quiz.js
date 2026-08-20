/* ============================================================
   quiz.js — 可复用测验组件
   用法：在 HTML 里写
     <div class="quiz" data-answer="1">
       <div class="quiz-q">问题文本</div>
       <button class="quiz-opt">选项 A</button>
       <button class="quiz-opt">选项 B</button>
       <div class="quiz-feedback" data-correct="答对的解释" data-wrong="答错的提示"></div>
     </div>
   data-answer 是正确选项的下标（从 0 开始）。
   设计目标：即时反馈，收紧 feedback loop，服务 storage strength。
   ============================================================ */

document.querySelectorAll(".quiz").forEach(function (quiz) {
  var answer = parseInt(quiz.getAttribute("data-answer"), 10);
  var opts = Array.prototype.slice.call(quiz.querySelectorAll(".quiz-opt"));
  var feedback = quiz.querySelector(".quiz-feedback");
  var answered = false;

  opts.forEach(function (opt, i) {
    opt.addEventListener("click", function () {
      if (answered) return;
      answered = true;

      opts.forEach(function (o, j) {
        if (j === answer) o.classList.add("correct");
      });

      if (i === answer) {
        if (feedback) feedback.textContent = feedback.getAttribute("data-correct") || "答对了。";
      } else {
        opt.classList.add("wrong");
        if (feedback) feedback.textContent = feedback.getAttribute("data-wrong") || "再想想。正确答案已高亮。";
      }
    });
  });
});
