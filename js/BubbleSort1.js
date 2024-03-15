function bubbleSort(userInput) {
    const n = userInput.length;
    let moves = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            moves.push({ comparison: [j, j + 1], swap: userInput[j] > userInput[j + 1], arr: [...userInput] });
            if (userInput[j] > userInput[j + 1]) {
                const temp = userInput[j];
                userInput[j] = userInput[j + 1];
                userInput[j + 1] = temp;
            }
        }
    }

    return userInput;
}

function sortAndDisplay() {
    var inputElement = document.getElementById("numberInput");
    var userInput = inputElement.value.trim().split(" ").map(Number);
    var outputElement = document.getElementById("output");
    
    var sortedArray = bubbleSort(userInput);
    outputElement.innerHTML = "";
    
    for (let i = 0; i < sortedArray.length; i++) {
        setTimeout(() => {
            displayArray(outputElement, sortedArray, [], false);
        }, i * 1000);
    }
}


function displayArray(outputElement, arr, comparison, swap) {
    let html = "<div class='array'>";
    for (let i = 0; i < arr.length; i++) {
        if (i === comparison[0] || i === comparison[1]) {
            html += "<span class='highlight'>" + arr[i] + "</span>";
        } else {
            html += arr[i];
        }
        if (i < arr.length - 1) {
            html += " ";
        }
    }
    html += "</div>";
    if (swap) {
        html += "<div class='arrow'></div>";
    }
    outputElement.innerHTML += html;
};

