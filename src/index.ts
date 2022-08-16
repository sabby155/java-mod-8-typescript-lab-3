// your code here

const button = document.getElementById("btn") as HTMLButtonElement;
const input1 = document.getElementById("firstInput") as HTMLInputElement;
const input2 = document.getElementById("secondInput") as HTMLInputElement;

button!.addEventListener("click", function () {
    console.log(prepend(input1!.value, input2!.value));
});

function prepend(inputString: string, numSpaces: number | string) {
    // your code here
    let space = "";

    for (let i = 0; i < numSpaces; i++) {
        //Putting underscore vs sace so you can see it in output
        space += " ";
    }
    return `${space}${inputString}`;
}



console.log(prepend("happy", 10));