
var user = [

   { 
     username:'Admin',
     email:'admin@gmail.com',
     password:'123'
   }
]

var currentuser = {};

document.getElementById('autocall').addEventListener('click',()=>{


      currentuser = JSON.parse(localStorage.getItem('currentuser')) || {}

      if(Object.keys(currentuser).length === 0){
         
        signup();

      }else{

           window.location.href = 'courseDashBoard.html';
      }

      
 })


function signIn() {

    console.log('click sign in');

    document.getElementById('signInOut-container').innerHTML = `
    
    
    <div class="d-flex justify-content-between align-items-center">
    <div>
        <h5 class="checout-account-heading">Sign In</h5>
    </div>
    <div>
         <span class="checout-account-subheading">Create New account?</span>
         <button type="submit" class="singin-checkout" onclick ='signup()'>
             Sign up
         </button>
     </div>
</div>
<form>
    <div class="row mt-4">
        <div class="col">
            <input type="email" class="form-control input-fild" id="email-checkout"
                placeholder="Email*">
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <input type="password" class="form-control input-fild" id="password-checkout"
                placeholder="password*">
        </div>
    </div>
</form>
<div class="row mt-4">
<div class="col">
    <button type="submit" class="Trial" onclick="logIn()">Sign In</button>
</div>
</div>
    
    `
}


function signup(){

    document.getElementById('signInOut-container').innerHTML = `
       
    <div class="checkout-left m-0 p-0" >
    <div class="d-flex justify-content-between align-items-center">
    <div>
        <h5 class="checout-account-heading">Create Account</h5>
    </div>
    <div>
        <span class="checout-account-subheading">Already have an account?</span>
        <button type="submit" class="singin-checkout" onclick ='signIn()'>
            Sign In
        </button>
    </div>
</div>
<form>
    <div class="row mt-4">
        <div class="col">
            <input type="text" class="form-control input-fild" id="fname-checkout"
                placeholder="First Name*">
        </div>
        <div class="col">
            <input type="text" class="form-control input-fild" id="lname-checkout"
                placeholder="Last Name*">
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <input type="text" class="form-control input-fild" id="number-checkout"
                placeholder="Phone No*">
        </div>
        <div class="col">
            <input type="email" class="form-control input-fild" id="email-checkout"
                placeholder="Email*">
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <input type="password" class="form-control input-fild" id="password-checkout"
                placeholder="password*">
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <button type="submit" class="Trial">
                Create Account and continue
            </button>
        </div>
    </div>
</form>
    </div>
    `
}

function logIn(){

    var email = document.getElementById('email-checkout').value;
    var password = document.getElementById('password-checkout').value;

    if(user[0].email === email && user[0].password === password){

        currentuser = { 
            
            username:'Admin',
            email:email,
            password:password
        }

        localStorage.setItem('currentuser',JSON.stringify(currentuser));
        window.location.href = 'courseDashBoard.html';

    }else{

        window.location.reload();
    }

}

