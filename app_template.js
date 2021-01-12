//your code here!
const inputNumber = Number(document.querySelector("#input-number").value)
const compute = document.querySelector("#button-compute");
const createTable = document.querySelector("#button-create-table");



compute.addEventListener("click", () => {
    console.log("i am in button");
    
    if (
        inputNumber.value === ""
    ) {
        alert("Please input Number !");
    }
    else{

        const tr = document.createElement("tr");
        const tdOutput = document.createElement("td");
        let id = 620610801 ;
        let Answer = 0 ;
        tdOutput.innerHTML = inputNumber.value;
        console.log(inputNumber);
        console.log(Answer);
        Answer = id - inputNumber ;
        console.log(Answer);
    }
} )


