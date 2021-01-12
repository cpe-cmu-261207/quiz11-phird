//your code here!
const inputNumber = document.querySelector("#input-number");
const compute = document.querySelector("#button-compute");
const createTable = document.querySelector("#button-create-table");



compute.addEventListener("click", () => {
    console.log("i am in button");
    let id = 620610801 ;
    if (
        inputNumber.value === ""
    ) {
        alert("Please input Number !");
    }
    else{

        const tr = document.createElement("tr");
        const tdOutput = document.createElement("td");
        tdOutput.innerHTML = inputNumber.value;

        tdAnswer.innerHTML = id - inputNumber.value ;
        console.log(tdAnswer);
    }
} )


