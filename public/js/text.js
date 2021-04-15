//TODO: javascript file on front end (like the login)
// add event listener for button 
const sendSMS = async (event) => {
    event.preventDefault();
    // get ID from lauren
    const phone = document.querySelector('#project-name').value.trim();
    // get list ID
    const list = document.querySelector
    if (phone){
        const message = await fetch(`/api/projects/text/${id}`, {
            method: 'POST',
            // list data & phone number
            body: JSON.stringify({phone, list}),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            alert("Text sent!");
          } else {
            alert(response.statusText);
          }
    }
}
document
// whatever our form is called goes here
  .querySelector('')
  .addEventListener('submit', sendSMS);

// async await
// query selector is the id lauren created for phone number -- this needs to get updated 
