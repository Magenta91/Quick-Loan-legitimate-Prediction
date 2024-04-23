// Load data from a local CSV file
fetch('https://raw.githubusercontent.com/Magenta91/Quick-Loan-legi.-Prediction/main/dataset/NBFCsandARCs10012023%20(1)%20(1).csv')
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
  const lines = csvData.split('\n');
  const headers = lines[0].split(',');
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const row = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j];
    }
    data.push(row);
  }
  return data;
}

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
// Add placeholders for other features
data['rating'] = 0;
data['access_photos'] = 0;
data['access_contacts'] = 0;
data['less_than_30_days'] = 0;
data['between_30_and_660_days'] = 0;
data['above_rbi_limit_interest_rate'] = 0;

// Calculate points based on additional conditions
data['points'] = 0;
data['points'] += (data['above_rbi_limit_interest_rate'] <= 30 && data['above_rbi_limit_interest_rate'] >= 2) ? 1 : 0;
data['points'] -= (data['above_rbi_limit_interest_rate'] > 30 || data['above_rbi_limit_interest_rate'] < 2) ? 1 : 0;

// Get user input for NBFC name (Assuming you have a function to get user input)
var nbf_name = prompt("Enter the NBFC name:");

// Check if the NBFC name is present in the dataset
if (data['NBFC Name'].includes(nbf_name)) {
  console.log("NBFC name found in the list. Adding 3 points.");
  data['points'] += 3;
} else {
  console.log("NBFC name not found in the list. Deducting 3 points.");
  data['points'] -= 3;
}

// Similarly, convert the remaining user inputs and conditions to JavaScript
// Print the deal recommendation based on 'total_points'

  const total_points = data.points;
  let recommendation = "";
  if (total_points >= 4) {
    recommendation = "The deal is good, you should take the loan.";
  } else if (total_points >= 2) {
    recommendation = "Our prediction tells us this is not the best for you, try to find a better deal.";
  } else {
    recommendation = "This deal is very sketchy, try to avoid it.";
  }

  // Display recommendation
  document.getElementById("recommendation").innerHTML = recommendation;
}
