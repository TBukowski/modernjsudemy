// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // hide results
    document.getElementById('results').style.display = 'none';

    // show loading gif
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 1500);
    
    e.preventDefault();
});

// calculate results
function calculateResults(){

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // calculations
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calcuatedPayments = parseFloat(years.value) * 12;

    // compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calcuatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x - 1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcuatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calcuatedPayments) - principal).toFixed(2);
    
        // show results
        document.getElementById('results').style.display = 'block';

        // hide loading gif
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers');
    }
}

// show error function
function showError(error){
    // show results
    document.getElementById('results').style.display = 'none';

    // hide loading gif
    document.getElementById('loading').style.display = 'none';

    // create div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds
    setTimeout(clearError, 3000);

}

// clear error function
function clearError(){
    document.querySelector('.alert').remove();
}