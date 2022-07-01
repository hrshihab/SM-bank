const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transactionArea");
  transactionArea.style.display = "block";
});

//deposit event handle

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmountNumber=getInputNumber("depositAmount");
  updateSpanText("currentDeposit",depositAmountNumber);
  updateSpanText("currentBalance",depositAmountNumber);
  document.getElementById('depositAmount').value="";
 
});

//withdraw event handle
const withdrawBtn=document.getElementById('addWithdraw');
  withdrawBtn.addEventListener('click',function(){
  const withdrawAmountNumber=getInputNumber("withdrawAmount");
  updateSpanText("currentWithdraw",withdrawAmountNumber);
  updateSpanText("currentBalance", -1*withdrawAmountNumber);
  document.getElementById('withdrawAmount').value="";
  
})

function getInputNumber(id){
  const Amount = document.getElementById(id).value;
  const AmountNumber = parseFloat(Amount);
  return AmountNumber;

}


function updateSpanText(id,AmountNumber)
{
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount=AmountNumber+currentNumber;
  document.getElementById(id).innerText=totalAmount;
}


