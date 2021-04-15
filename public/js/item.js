const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#item-name').value.trim();
  
    if (name) {
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/project');
      } else {
        alert('Failed to create project');
      }
    }
  };

  const putHandler = async (event) => {
      event.preventDefault();
    console.log("hi");
      //capture the id of the id of the list you clicked on
      //capture the users input for new item
      //create object that has list.id and new item
      //fetch call...bady will be the object i made
      //match with the itemROUTES!!!
  }
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to delete project');
    //   }
    }
  };
  
  document
    .querySelector('.add')
    .addEventListener('click', newFormHandler);

    document
    .querySelector('.add')
    .addEventListener('click', putHandler);
  
  document
    .querySelector('.item-list')
    .addEventListener('click', delButtonHandler);
  