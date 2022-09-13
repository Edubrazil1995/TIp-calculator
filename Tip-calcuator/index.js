const calculateTip = (b) => {
    let bill = document.getElementById("inp-bill").value
    console.log(bill, "bill")
    let tipPercent = b;
    let noOfPerson = document.getElementById("inp-people").value
    console.log(noOfPerson, "noOfPerson")
    let totalTip = bill * tipPercent
    let tipPerPerson = totalTip/noOfPerson;
    console.log(totalTip ,"totalTip", tipPerPerson, "tipPerPerson")
    document.getElementById("tipAmount-price").innerHTML = '$' + totalTip.toFixed(2); 
    document.getElementById("totalPerson-price").innerHTML = '$' + tipPerPerson.toFixed(2);
}

const handleChange = () =>{
    let customTip = document.getElementById("inp-custom").value
    calculateTip(customTip)
}

const reset = () => {
    document.getElementById("tipAmount-price").innerHTML = '$' + 0; 
    document.getElementById("totalPerson-price").innerHTML = '$' + 0;
    document.getElementById("inp-bill").value = 0;
    document.getElementById("inp-people").value = 0;

}