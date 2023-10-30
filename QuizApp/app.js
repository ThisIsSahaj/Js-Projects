const questions = [
    {
    'que': 'Which is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JS',
    'd': 'PHP',
    'correct': 'a'
    },
    {
    'que': 'What year was JS launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None of the above',
    'correct': 'b'
    },
    {
    'que': 'What does CSS stand for?',
    'a': 'Coloring Style Sheets',
    'b': 'Cascading Style Sheets',
    'c': 'Cascade Styling Sheets',
    'd': 'Cascading Styling Sheets',
    'correct': 'b'
    },
]

let index = 0;
let total = questions.length;  //total no. of questions
let right=0, wrong=0;
const showQue = document.getElementById("queBox")
const optionInput = document.querySelectorAll('.options') //calling "options" class of input


const loadQuestion = () => {

    if(index === total)
    {
        return endQuiz();
    }
    reset();                                                   //to reset the checkmark of previos question
    const data = questions[index]
    // console.log(data);
    showQue.innerHTML = `${index+1}) ${data.que}`;             //taking que from data and showing in html of queBox element , using backticks `` coz we want to display index
    
    optionInput[0].previousElementSibling.innerText = data.a;  //calling 1st input element and setting the innerText of it's just previous sibling element
    optionInput[1].previousElementSibling.innerText = data.b;
    optionInput[2].previousElementSibling.innerText = data.c;
    optionInput[3].previousElementSibling.innerText = data.d;

} 

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct)
    {
     right++;
    }
    else{
        wrong++;
    }
    //going to next question
    index++; 
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                // console.log(input.value);
                answer = input.value; //a b c or d
            }
        }
    )
    return answer;
}


const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
            }
       )  
}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thankyou for playing the quiz</h3>
    <h2> Correct: ${right} </h2>
    <h2> Wrong: ${wrong} </h2>
    <button class="btn" style="margin: 20px 0px" onclick="window. location. reload()">Retake</button>
    </div>
    `
}
//init call
loadQuestion();
