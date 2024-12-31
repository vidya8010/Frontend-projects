document.addEventListener("DOMContentLoaded", () => {
    
    const Randomnumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);//to generate a random number...
    };

    // Get the DOM elements
    const questionElement = document.querySelector('.question');
    const questionform = document.getElementById('QuestionForm');
    const scoreEL = document.getElementById('score')

    let storeAns; // To store the correct answer
    let score=0;
    let questiontype;
    let question;
    let answer;

    // Generate a new question
    const generateQuestion = () => {
        const randomnumber1 = Randomnumber(1, 10); // Random number between 1 and 10
        const randomnumber2 = Randomnumber(1, 10);
        questiontype=Randomnumber(1,4);
        switch(questiontype){
            case 1: 
                question = `Q. What is ${randomnumber1} multiply by ${randomnumber2}?`;
                answer = randomnumber1 * randomnumber2;
                break;
    
            case 2:
                question = `Q. What is ${randomnumber1} added with ${randomnumber2}?`;
                answer = randomnumber1 + randomnumber2; 
                break;

            case 3:
                question = `Q. What is ${randomnumber1} divided by ${randomnumber2}?`;
                answer = randomnumber1 / randomnumber2;
                break;

            case 4:
                question = `Q. What is ${randomnumber1} substract from ${randomnumber2}?`;
                answer = randomnumber1 - randomnumber2; 
                break;

        }
        return [question, answer]; // Return both the question and the answer
       
    };
   
    // Display the generated question in the DOM
    const showQuestion = () => {
        const [question, answer] = generateQuestion(); // Destructure the returned values
        questionElement.innerHTML = question; // Update the DOM element's content
        storeAns = answer; // Store the correct answer
    };

    showQuestion(); // Show the question after the DOM is loaded

    // Check the user's answer
    const checkAnswer = (event) => {
        event.preventDefault(); // Prevent form submission
        const formdata = new FormData(questionform);
        const userAnswer = formdata.get("answer"); // Get the user's input
        console.log('User Answer:', userAnswer);
        console.log('Correct Answer:', storeAns);

        if (parseInt(userAnswer) === storeAns) {
            score+=1;
            alert("Correct! Well done.");
        } else {
            score-=1;
            alert("Incorrect. Try again.");
        }
        scoreEL.innerHTML=score;
        showQuestion(); // Generate a new question
        questionform.reset(); // Reset the input field
    };

    // Attach the event listener
    questionform.addEventListener("submit", checkAnswer);
});
