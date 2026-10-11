"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    if (!quizForm || !quizResult) return;

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const questions = [
            ...quizForm.querySelectorAll(".quiz-question")
        ];

        let score = 0;
        let attempted = 0;

        questions.forEach((question) => {
            const correctAnswer = question.dataset.answer;
            const selected = question.querySelector(
                'input[type="radio"]:checked'
            );

            const feedback = question.querySelector(
                ".answer-feedback"
            );

            if (!selected) {
                feedback.textContent =
                    "Not attempted. Correct answer: " +
                    correctAnswer.toUpperCase();

                feedback.style.color = "#b54708";
                return;
            }

            attempted++;

            if (selected.value === correctAnswer) {
                score++;

                feedback.textContent = "Correct answer!";
                feedback.style.color = "#198754";
            } else {
                feedback.textContent =
                    "Incorrect. Correct answer: " +
                    correctAnswer.toUpperCase();

                feedback.style.color = "#dc3545";
            }
        });

        quizResult.textContent =
            `Your score: ${score}/${questions.length}. ` +
            `Attempted: ${attempted}/${questions.length}.`;
    });
});