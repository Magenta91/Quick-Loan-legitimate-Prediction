function calculateLoanPrediction() {
    const nbfcName = document.getElementById("nbfcName").value;
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const repaymentTime = parseInt(document.getElementById("repaymentTime").value);
    const accessPhotosContacts = parseInt(document.getElementById("accessPhotosContacts").value);
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const repaymentDuration = parseInt(document.getElementById("repaymentDuration").value);

    // Your logic code goes here
    // You can use the variables above to simulate user inputs and calculate the loan prediction

    // For demonstration, let's assume the totalPoints and recommendation are calculated
    let totalPoints = 0; // Calculate total points
    let recommendation = "";
    if (totalPoints >= 4) {
        recommendation = "The deal is good, you should take the loan.";
    } else if (totalPoints >= 2) {
        recommendation = "Our prediction tells us this is not the best for you, try to find a better deal.";
    } else {
        recommendation = "This deal is very sketchy, try to avoid it.";
    }

    document.getElementById("result").innerText = recommendation;
}
