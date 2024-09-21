// document.getElementById('login').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('login button clicked');

//     // get the phone  number 

//     const phoneNumber = document.getElementById('phone').value;
//     const pinNumber = document.getElementById('pin').value;
//     console.log(phoneNumber , pinNumber)

//     if(phoneNumber === '5' && pinNumber === '1234' ) {
//         console.log('You are logged in');
//     }
//     else{
//         alert('Wrong phone number or Pin');
//     }


// })


// ------------------------------------------------- 

document.getElementById('login').addEventListener('click',
    function (event) {
        event.preventDefault();



        const phoneNumber = document.getElementById('phone').value;
        const pinNumber = document.getElementById('pin').value;
        console.log(phoneNumber, pinNumber)



        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('You are logged in');
            window.location.href = '/home.html';
        }
        else {
            alert('Wrong phone number or Pin');
        }
    }
)