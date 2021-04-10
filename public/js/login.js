

  //- When they click on 'create New Account'- the create account card is displayed

 //- When they click on the login button- the login card is displayed
 const loginFormHandler = async (event) => {
    // event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      // Should it be users or user?
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the list page
        document.location.replace('/list');
      } else {
        alert(response.statusText);
      }
    }
  };
  
    //- When they click on 'create New Account'- the create account card is displayed
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the sign up form form
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const retypePass = document.querySelector('#retype-pass-signup').value.trim();
  
    //need to confirm if both passwords match? Do we need this? If so, how does it chain to the POST request
    

    /* function Validate() {
        var password = document.getElementById("password-signup").value;
        var confirmPassword = document.getElementById("retype-pass-signup").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    } */


    if (email && password) {
        // Send a POST request to the API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
    // If successful, redirect the browser to the list page
      if (response.ok) {
        document.location.replace('/list');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  