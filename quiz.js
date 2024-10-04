  // Function Declaration
  function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if any answer is selected
    if (!userAnswer) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    // Access the value property of the selected radio button
    const userAnswerValue = userAnswer.value;

    // Compare the User’s Answer with the Correct Answer
    if (userAnswerValue === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
