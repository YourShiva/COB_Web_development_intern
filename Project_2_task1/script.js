function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    let result;


    if (isNaN(inputValue) || inputValue < 0) {
        // Handle invalid or negative input
        alert("Please enter a positive number.");
        return;
    }

    // Perform unit conversion calculations here
    if (unitFrom === 'meters' && unitTo === 'feet') {
        result = inputValue * 3.28084;
    } else if (unitFrom === 'meters' && unitTo === 'kilometers') {
        result = inputValue / 1000;
    } else if (unitFrom === 'meters' && unitTo === 'miles') {
        result = inputValue * 0.000621371;
    } else if (unitFrom === 'meters' && unitTo === 'centimeters') {
        result = inputValue * 100;
    } else if (unitFrom === 'meters' && unitTo === 'meters') {
        result = inputValue * 1;


    } else if (unitFrom === 'feet' && unitTo === 'meters') {
        result = inputValue / 3.28084;
    } else if (unitFrom === 'feet' && unitTo === 'kilometers') {
        result = inputValue * 0.0003048;
    } else if (unitFrom === 'feet' && unitTo === 'miles') {
        result = inputValue / 5280;
    } else if (unitFrom === 'feet' && unitTo === 'centimeters') {
        result = inputValue * 30.48;
    } else if (unitFrom === 'feet' && unitTo === 'feet') {
        result = inputValue * 1;    
        

    } else if (unitFrom === 'kilometers' && unitTo === 'miles') {
        result = inputValue * 0.621371;
    } else if (unitFrom === 'kilometers' && unitTo === 'meters') {
        result = inputValue * 1000;
    } else if (unitFrom === 'kilometers' && unitTo === 'centimeters') {
        result = inputValue * 100000;
    } else if (unitFrom === 'kilometers' && unitTo === 'feet') {
        result = inputValue * 3280.84;
    } else if (unitFrom === 'kilometers' && unitTo === 'kilometers') {
        result = inputValue * 1;


    } else if (unitFrom === 'miles' && unitTo === 'kilometers') {
        result = inputValue / 0.621371;
    } else if (unitFrom === 'miles' && unitTo === 'meters') {
        result = inputValue * 1609.34;
    } else if (unitFrom === 'miles' && unitTo === 'centimeters') {
        result = inputValue * 160934;
    } else if (unitFrom === 'miles' && unitTo === 'feet') {
        result = inputValue * 5280;
    } else if (unitFrom === 'miles' && unitTo === 'miles') {
        result = inputValue *1;


    } else if (unitFrom === 'centimeters' && unitTo === 'kilometers') {
        result = inputValue * 0.00001;
    } else if (unitFrom === 'centimeters' && unitTo === 'meters') {
        result = inputValue * 0.01;
    } else if (unitFrom === 'centimeters' && unitTo === 'centimeters') {
        result = inputValue * 1;
    } else if (unitFrom === 'centimeters' && unitTo === 'feet') {
        result = inputValue * 0.0328084;
    } else if (unitFrom === 'centimeters' && unitTo === 'miles') {
        result = inputValue * 0.00000621;




        
    } else {
        // Handle unsupported conversions or display an error message
        result = 'Unsupported conversion';
    }

    document.getElementById('result').innerText = `${inputValue} ${unitFrom} is equal to ${result} ${unitTo}`;
}
