let userInput = [];
let maxSize = 10;
let outputArray = [];
let input = document.querySelector("input");
let button = document.querySelector("sortbutton");
//button.disabled = false;
let parent = document.querySelector(".output");
let inputArray = document.querySelector(".inputarray");

const algorithms = ["selection sort", "bubble sort", "merge sort", "quick sort", "insertion sort", "shell sort"];
const parentElement = document.getElementById('sortAlgorithms');

let algorithmIndex = 0;
let charIndex = 0;

function displayAlgorithms() {
    if (algorithmIndex < algorithms.length) {
        const algorithm = algorithms[algorithmIndex];
        if (charIndex < algorithm.length) {
            const char = algorithm[charIndex];
            const span = document.createElement('span');
            span.textContent = char;
            parentElement.appendChild(span);
            charIndex++;
        } else {
            algorithmIndex++;
            charIndex = 0;
            parentElement.innerHTML = ''; 
        }
    } else {
        algorithmIndex = 0;
        charIndex = 0;
        parentElement.innerHTML = '';
    }
}

setInterval(displayAlgorithms, 200); 



function getNumbers() {
  
    const numbers = input.value;
    if (numbers.length > maxSize) {
        alert('Execeeds maximum size!');
        return;
    }

    for(num of numbers)
  {
     userInput.push(num);
    // button.disabled = true;
  }

    let output = document.querySelector(".output");
      bubbleSort(userInput);
   outputArray = [].concat(userInput);

   let index = 0;
      setInterval (()=>{
            if(index < outputArray.length){
             //   output.innerHTML = outputArray[index];
         //    output.innerHTML += outputArray[index] + "  ";
            let element = document.createElement("div");
            element.textContent = outputArray[index];
            output.appendChild(element);

                index++;
            }
      } , 2000);

  //  output.innerHTML = userInput.join("  ");

}

function bubbleSort(userInput) {
    const size = userInput.length;
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            if (userInput[j] > userInput[j + 1]) {
                const temp = userInput[j];
                userInput[j] = userInput[j + 1];
                userInput[j + 1] = temp;
            }
        }
    }
    return userInput;
}
