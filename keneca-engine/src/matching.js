// then we import the function from the propagation.js

const { cellsAtCurrentRing} = require("./propagation");

const { addDistanceToUsers } = require("./distance");

// let us also import file from the user.js

// we need this this to access the spatial index

const { userLocToCell, createUserSpatialIndex, usersOrRequests} = require("./user");

// the first you do is to store all the cells in a name 

const cells = cellsAtCurrentRing(startingCell, current_Ring);

// then you loop through them, you extract the information, remember it was a array

// so you loo thrugh each cell

// before we do that let us create an empty array to store 

// ok we need to pprovide the user INDEX HERE 

const user_Index= createUserSpatialIndex(usersOrRequests);

const user_List = [];

for (const cell of cells){

    // you use the spatial index to extract the information in each cell asn storethem in the current users

    const current_Users = user_Index[cell];

    // so the next thing you do i sto create an arry that stores the information down

    // then we push the information into the array 

    // we check if there are users in he cell

    // ... means the spread it means taking the content of the array and spreading them 

    if (current_Users){
        user_List.push(...current_Users);
    }




};

const usersWithDistance = addDistanceToUsers(
    user_List,
    post
);

// we finally assign the array as the final array wihich will be exported and be used in the scoring eningine

// the next things we do is to clalulte the distance as it compares to the starting post location in 



// now that we have gotten the distnace we take the list of distance and convert them in the array geneertaed by the user_List


//ok now let's add the dsstance to the users

// this function s just basically incharging of getting the distance of each array and addintthe information to each object












