/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme

function button1Clicked() {

    let number = Math.random()*100;

    let buttonDiv = document.getElementByID("button-div");
    buttonDiv.innerHTML = number;
    console.log("Button 1 was clicked"); 
}

function button2Clicked() {

    let buttonCircle= document.getElementByID("random_num");
     
}