//TODO>> Exam Grader
function getGrade(score) {
  //  A(85-100)/B(70-85)/C(60-70)/D(50-60)/F(0-50)
  if (score >= 0 && score < 50) {
    return "F";
  } else if (score >= 50 && score < 60) {
    return "D";
  } else if (score >= 60 && score < 70) {
    return "C";
  } else if (score >= 70 && score < 85) {
    return "B";
  } else if (score >= 85 && score <= 103) {
    return "A";
  } else {
    return false;
  }
}
function getExamGradeAndStatus() {
  //! initial status
  let grade = "F";
  let stuStatus = "Fail";
  //! inputs
  // score
  let score = +prompt("Enter your score...");
  // is good attendance
  let isAttend = confirm("Is he a good attendance");
  //! process
  // 1-if attendance score + 3
  if (isAttend) {
    score += 3;
  }
  // 2-calculate grade
  grade = getGrade(score);
  // 3-recalculate status if score >= 50 then state = PASS;
  if (score >= 50 && score <= 103) {
    stuStatus = "PASS";
  }
  //! output
  if (grade) {
    document.writeln(`
        <link rel="stylesheet" href="./index.css">
    
        <a href="" class="grade">
            <p>
                Your grade is: <span>${grade}</span>
            </p>
            <p>
                Your status is: <span>${stuStatus}</span>
            </p>
        </a>
      `);
  } else {
    document.writeln(`
        <link rel="stylesheet" href="./index.css">
    
        <a href="" class="grade">
            <p class="error-msg">
                Error: Enter a valid grade (0 => 100)
            </p>
        </a>
      `);
  }
}

//TODO>> Mobile Recharge
function rechargeMobileBalance() {
  //! inputs
  // amount
  let rechargeAmount = +prompt("Enter recharge amount...");
  //! process
  // apply 2% service fee
  let fee = (2 / 100) * rechargeAmount;
  rechargeAmount += fee;
  // add 14% vat
  let vat = (14 / 100) * rechargeAmount;
  rechargeAmount += vat;

  //! output => final price
  document.writeln(`
    <link rel="stylesheet" href="./index.css">

    <a href="" class="recharge">
        <p>
            Service fee: <span>${fee}</span>
        </p>
        <p>
            vat 14 % : <span>${vat}</span>
        </p>
        <p>
            Total fee: <span>${rechargeAmount}</span>
        </p>
    </a>
  `);
}

//TODO>> Fuel Cost
function getFuelCost() {
  //! inputs
  // price per liter = 12 EGP
  let pricePerLIter = 12;
  // Enter liters
  let litters = +prompt("Enter liters amount...");

  //! process
  // calculate liters price
  let finalPrice = pricePerLIter * litters;
  // 5% discount if paying cash
  const isPayingCash = confirm("Do you paying cash?");
  let discount;
  if (isPayingCash) {
    discount = (5 / 100) * finalPrice;
    finalPrice -= discount;
  }
  // add 14% VAT
  let vat = (14 / 100) * finalPrice;
  finalPrice += vat;
  //! output => final price
  document.writeln(`
    <link rel="stylesheet" href="./index.css">

    <a href="" class="fuel">
        <p>
            Discount value: - <span>${discount}</span>
        </p>
        <p>
            vat 14 % : <span>${vat}</span>
        </p>
        <p>
            Total fee: <span>${finalPrice}</span>
        </p>
    </a>
  `);
}

//TODO>> Currency Exchange
function currencyExchange() {
  //! input
  // rate => 1USD = 48EGP
  let rate = 48;
  // Enter USD amount
  let USDAmount = +prompt("Enter mony with USD$...");
  //! process
  // calculate => EGP amount
  let EGPAmount = USDAmount * rate;
  // Apply 3% commission
  let commission = (3 / 100) * EGPAmount;
  EGPAmount -= commission;
  //! output
  document.writeln(`
    <link rel="stylesheet" href="./index.css">

    <a href="" class="exchange">
        <p>
            Commission 3 % : <span>${commission}</span>
        </p>
        <p>
            EGP amount : <span>${EGPAmount} EGP</span>
        </p>
    </a>
  `);
}
