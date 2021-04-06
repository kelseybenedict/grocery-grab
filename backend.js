//Back End Pseudocode:

//set up a server
//set up the schema
//config connection

    //web address gets the landing page
        //request to log in gets the log in route
            //Log in request received from front end
            //authenticate username and password 
            //redirect to list page

    //request to create account gets the create account route
        //new account is posted to the user database
        //redirects to list page

//on the list page
    
    //get from the database to list the lists(get the names of all the list tables)

    //get the specific list(table) that has been requested

    //when the save request is recieved
        //post user input to the appropriate list(table)
    
    //when a delete request is recieved
        //delete appropriate item from the appropriate list(table)

    // when a create new list request is recieved
        //create a new table corresponding to the new list name
    //get a new list of lists
