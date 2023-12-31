alert(`Answer 1: ${answer1}, Answer 2: ${answer2}, Answer 3: ${answer3}`);
  
  function checkAnswers() {
    // Your logic to check the answers goes here
    const answer1 = document.getElementById("answer1").value.toLowerCase();
    const answer2 = document.getElementById("answer2").value.toLowerCase();
    const answer3 = document.getElementById("answer3").value.toLowerCase();
  
    // You can customize the correct answers
    const correctAnswer1 = "a";
    const correctAnswer2 = "a";
    const correctAnswer3 = "a";
  
    if (answer1 === correctAnswer1 && answer2 === correctAnswer2 && answer3 === correctAnswer3) {
      window.location.href = "message.html";
    } else {
      alert("Incorrect answers. Try again!");
    }
  }
  
  function goBack() {
    window.location.href = "index.html";
  }

  let audio = document.getElementById("backgroundAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
