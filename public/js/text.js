//TODO: javascript file on front end (like the login)
// add event listener for button 
console.log("connected :)")
const sendSMS = async (event) => {
    event.preventDefault();
    // get ID from lauren
    const phone = document.querySelector('#number').value.trim();
    // get list ID
    //const list = document.querySelector
    if (phone){
        const message = await fetch(`/project`);
        console.log("message:", message)
        if (message.ok) {
            alert("Text sent!");
          } else {
            alert(message.statusText);
          }
    }
}
document
// whatever our form is called goes here
  .querySelector('#text-button')
  .addEventListener('click', sendSMS);

// async await
// query selector is the id lauren created for phone number -- this needs to get updated 
