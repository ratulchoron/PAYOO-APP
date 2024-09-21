

// step -1 
document.getElementById('btn-add-money').addEventListener(
    'click' , function(event){
        event.preventDefault();
        console.log ('money add butn clicked');
    });

    // stp-2

    const addmanyinput = document.getElementById('input-add-money ').value;
    console.log(addmanyinput);

    get the pin number provided
    const pinNumberInput = document.getElementById(' input-pin-number').value;
    console.log(pinNumberInput);