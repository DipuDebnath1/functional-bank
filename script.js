



const input = document.getElementById('input');



function handleDeposit(){
    const curentBalanceContent = document.getElementById('curentBalanceContent');
    const curentBalance= parseFloat(curentBalanceContent.innerText);

    const depositBalanceContent = document.getElementById('depositBalanceContent');
    const depositBalance= parseFloat(depositBalanceContent.innerText);
    // console.log(depositBalance);

    const inputLength = input.value.length;
    let inputValue =  parseFloat(input.value);
    const floatInputLength = (inputValue+'').length
    // console.log(inputLength,floatInputLength);

        if (!inputValue) {
          alert('plase enter your amount')
            
        }
        else{
          if (inputLength===floatInputLength) {
            const newBalance = curentBalance+inputValue
            curentBalanceContent.innerText = newBalance
            depositBalanceContent.innerText= depositBalance+inputValue
            input.value=""
          }
          else{
            alert('enter valid number...');
          }
          
        }
 
    

    

    
   
}
 
function handleWidrow(){
    const privoiusBalanceContent = document.getElementById('privoiusBalanceContent');
    const privoiusBalance= parseFloat(privoiusBalanceContent.innerText);

    const curentBalanceContent = document.getElementById('curentBalanceContent');
    const curentBalance= parseFloat(curentBalanceContent.innerText);
    let inputValue =  parseFloat(input.value);


    const inputLength = input.value.length;
    const floatInputLength = (inputValue+'').length


    if (!inputValue) {
        alert('plase enter your amount')
          
      }
      else{


        if (inputLength===floatInputLength && curentBalance>=inputValue) {
          const newWidrowBalance = privoiusBalance+inputValue
          privoiusBalanceContent.innerText = newWidrowBalance
          input.value=""
    
          const newBalance = curentBalance-inputValue
          curentBalanceContent.innerText = newBalance
        }
        else{
          alert(`please enter valid number or chaeck your curent balance amount...`)
        }
       
      }
}
