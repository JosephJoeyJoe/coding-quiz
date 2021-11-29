var questions = [
    {
        title: "Which of the following is correct about features of JavaScript?",
        choices: ["JavaScript is is complementary to and integrated with HTML.", "JavaScript is open and cross-platform.", "All of the above.", "None of the above."],
        answer: "All of the Above."
    },
    {
        title: "Which of the following function of String object creates an HTML hypertext link that requests another URL?",
        choices: ["link()", "sub()", "sup()", "small()"],
        answer: "link()"
    },
    {
        title: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["You should not use any of the JavaScript reserved keyword as variable name.", "JavaScript variable names should not start with a numeral (0-9).", "All of the above.", "None of the above."],
        answer: "All of the Above."
    },
    {
       title: "Can you pass a anonymous function as an argument to another function?",
       choices: ["True", "False"],
       answer: "True"
    },
]

document.addEventListener('DomContentLoaded', (quizTime) => {
const beginTimer = 75;
var time = 20;
var starScore= 0;
var score = 0;
var count = 0;

document.querySelector('#quiz p').innerHTML = questions[0].title;
    document.querySelector('#quiz ol li:nth-of-type(1) div').innerHTML = `1. ${questions[Count].choices[0]}`;
    document.querySelector('#quiz ol li:nth-of-type(2) div').innerHTML = `2. ${questions[Count].choices[1]}`;
    document.querySelector('#quiz ol li:nth-of-type(3) div').innerHTML = `3. ${questions[Count].choices[2]}`;
    document.querySelector('#quiz ol li:nth-of-type(4) div').innerHTML = `4. ${questions[Count].choices[3]}`;


var timer = () => {
    if(time > 0 ) {
    time = time - 1;
    document.getElementById('time').innerHTML = time;
  } else{
    clearInterval(clock);
    document.getElementById('score').innerHTML = score;
    document.getElementById('complete').classList.remove('hide');
    document.getElementById('quiz').classList.add('hide');
  }
  }

  var clock;
    document.querySelector("nav button").addEventListener("click", (e) =>{
        document.getElementById('nav').classList.add('hide');
        document.getElementById('quiz').classList.remove('hide');
        clock = setInterval(timer, 1000);
  });

  var answers = document.querySelectorAll('#quiz ol li div');

  Array.from(answers).forEach(check => {
    check.addEventListener('click', function(quizTime) {
      if( this.innerHTML.substring(3,this.length) === questions[count].answer ){
      console.log(questions[count].answer);
      console.log(this.innerHTML.substring(3,this.length));
      }
    });
});
});
