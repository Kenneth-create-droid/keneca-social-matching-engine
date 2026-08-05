//this is the file we will use when we are first deploying the file runs only once

// we fitst import the the create spatial index function
 const { createUserSpatialIndex} = require("./spatialIndexBuilder");

 // let's import the setSpatial index function

 const { setSpatialIndex }= require("./spatialIndex");


 // also import a temporary varibale called userOfRequests from your users

 const {usersOrRequests} = require("./user");

 // now we create variable named index to actually store the index 

 // then we call create spatail Index and call and store the output into the variable index which will be later used for 
// creating our iitial spatial index

// we can make it better by putting it ina function so that our server can access it 

function initializeSpatialIndex() {

    const startupIndex = createUserSpatialIndex(usersOrRequests);


    setSpatialIndex(startupIndex);

    console.log("Your index has been initialized");



}

module.exports = {
    initializeSpatialIndex
}



// now we have storred it in the startup indes next we use our set function to set the spatial index
// to the startup index so making it easier to enhance later







