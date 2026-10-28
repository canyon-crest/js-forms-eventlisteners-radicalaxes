// ============================================ //
// Unit 8.7 – Forms & Event Listeners          //
// ============================================ //
// Complete each section below by following     //
// the STEP comments.                          //
//                                              //
// IMPORTANT: Use addEventListener() to wire your//
// buttons — do NOT add onclick in the HTML.    //
// ============================================ //

// ============================================ //
// WARM-UP: Shout It!                          //
// ============================================ //

// STEP 1: Get the "Shout" button by its ID ("btnShout")
const btnShout = document.getElementById("btnShout");

// STEP 2: Add a click event listener to the button.
btnShout.addEventListener("click", function() {
    // a) Get the text from the input with ID "shoutInput"
    const shoutInput = document.getElementById("shoutInput").value;
    
    // b) Convert the text to uppercase using .toUpperCase()
    const upperText = shoutInput.toUpperCase();
    
    // c) Add "!" to the end
    const resultText = upperText + "!";
    
    // d) Display the result in the element with ID "outShout"
    document.getElementById("outShout").innerHTML = resultText;
});


// ============================================ //
// MAIN: Pizza Builder                         //
// ============================================ //

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
const btnCalc = document.getElementById("btnCalc");

// Add a click event listener.
btnCalc.addEventListener("click", function() {
    // a) Get the selected size price:
    const radioButtons = document.getElementsByName("rg");
    let sizePrice = 0;
    
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            sizePrice = parseFloat(radioButtons[i].value);
            break;
        }
    }
    
    // b) Count checked toppings:
    const checkboxes = document.getElementsByName("cb");
    let checkedCount = 0;
    
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }
    const toppingsPrice = checkedCount * 0.50;
    
    // c) Get the service fee:
    const serviceType = document.getElementById("serviceSelect").value;
    let serviceFee = 0;
    
    if (serviceType === "dinein") {
        serviceFee = 0;
    } else if (serviceType === "takeout") {
        serviceFee = 1.50;
    } else if (serviceType === "delivery") {
        serviceFee = 3.00;
    }
    
    // d) Calculate total: size + toppings + service fee
    const total = sizePrice + toppingsPrice + serviceFee;
    
    // e) Get the customer name from the input with ID "myInput"
    let customerName = document.getElementById("myInput").value.trim();
    
    if (customerName === "") {
        customerName = "Customer";
    }
    
    // f) Display the result in the element with ID "myPara"
    document.getElementById("myPara").innerHTML = customerName + ", your total is $" + total.toFixed(2);
});


// STEP 4: Get the "Clear" button by ID ("clearBtn")
const clearBtn = document.getElementById("clearBtn");

// Add a click event listener.
clearBtn.addEventListener("click", function() {
    // a) Set the name input value to ""
    document.getElementById("myInput").value = "";
    
    // b) Set the Large radio (id "r3") to checked = true
    document.getElementById("r3").checked = true;
    
    // c) Uncheck ALL topping checkboxes (loop through them)
    const checkboxes = document.getElementsByName("cb");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    
    // d) Set the service dropdown value to "dinein"
    document.getElementById("serviceSelect").value = "dinein";
    
    // e) Set the output paragraph innerHTML to ""
    document.getElementById("myPara").innerHTML = "";
});
