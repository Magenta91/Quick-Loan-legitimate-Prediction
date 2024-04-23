// Define the path to your CSV file (update this with the actual location)
const csvFilePath = 'https://raw.githubusercontent.com/Magenta91/Quick-Loan-legi.-Prediction/main/dataset/NBFCsandARCs10012023%20(1)%20(1).csv';

function calculateLoanPrediction() {
  const data = {
    rating: 0,
    access_photos: 0,
    access_contacts: 0,
    less_than_30_days: 0,
    between_30_and_660_days: 0,
    above_rbi_limit_interest_rate: 0,
    points: 0
  };

  // Add logic code here
  // Assuming 'data' is already loaded into a JavaScript object
  // Add placeholders for other features (consider adding more based on your needs)

  // Get user input for NBFC name
  var nbfc_name = prompt("Enter the NBFC name:");

  // Check if user entered a value
  if (!nbfc_name) {
      alert("Please enter the NBFC name.");
      return; // Exit the function if no input
  }

  // Check if the NBFC name is present in the dataset
  if (data.some(row => row['NBFC Name'] === nbfc_name)) {
    console.log("NBFC name found in the list. Adding 3 points.");
    data['points'] += 3;
  } else {
    console.log("NBFC name not found in the list. Deducting 3 points.");
    data['points'] -= 3;
  }

  // Get user input for other loan details (interest rate, repayment time, etc.)
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const repaymentTime = parseInt(document.getElementById("repaymentTime").value);
  const accessPhotosContacts = parseInt(document.getElementById("accessPhotosContacts").value);
  const loanAmount = parseInt(document.getElementById("loanAmount").value); // Assuming you added an input for loan amount
  const repaymentDuration = parseInt(document.getElementById("repaymentDuration").value); // Assuming you added an input for repayment duration

  // Calculate points based on interest rate
  data['points'] += (interestRate <= 10) ? 2 : (interestRate <= 15) ? 1 : 0;

  // Calculate points based on repayment time (replace with your logic)
  if (repaymentTime <= 365) {
    data['points'] += 2;
  } else if (repaymentTime <= 730) {
    data['points'] += 1;
  } else {
    data['points'] -= 1;
  }

  // Calculate points based on access to photos/contacts
  data['points'] += (accessPhotosContacts === 0) ? -1 : 0;  // Deduct a point if access is requested

  // ... rest of your code ... (e.g., displaying recommendation)
}

// Load data from a local CSV file
fetch(csvFilePath) // Use the defined path here
  .then(response => response.text())
  .then(csvData => {
    // Parse the CSV data into a JavaScript object
    const data = parseCsvData(csvData);

    // Now you can execute your existing code with the loaded data
    data['rating'] = 0;
    data['access_photos'] = 0;
    // Add the rest of your existing code here...
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });

// Function to parse CSV data into a JavaScript object
function parseCsvData(csvData) {
  // Implement your CSV parsing logic here
  // This is a basic example assuming CSV has header row and comma-separated values
