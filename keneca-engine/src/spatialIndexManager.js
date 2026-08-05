// the job of the mamanger is to manage my spatial index info 

// there will be three changes add ing a user when he/she first joins,
// removing a user when they delete the account
//the important one is the cell changes as we will see here 


// let's import the get ffunction now 

const {setSpatialIndex, getSpatialIndex} = require("./spatialIndex");

// also import the user locto cell

const {userLocToCell} = require ("./user");

function addUserToSpatialIndex(user){

    // we store theget spatial index in a variable

const tempIndex = getSpatialIndex();

    // so given a user must have inputs of at least three information, name , lat and long you first chnage it 
    // to a h3 cell 

    const my_Cell = userLocToCell(user);


    // since this is key value you loop throguh this like this 

  
        // check each key value you check if the key exists if no key exists you create the dictionary
// so dictioanry you dont need to loo just staraigh access with the key
        if (!tempIndex[my_Cell]){

            // the array is built inside the didctionarr. so you said if the dictioanry key array does not exist

            tempIndex[my_Cell]= [];
        }

        
            tempIndex[my_Cell].push(user);
        

        // then we call the setter function now 

     setSpatialIndex (tempIndex);

}

// now let's call to remove user from the spatial index 

function removeUserFromSpatialIndex(user) {


    // get the current spatial index

    const tempIndex = getSpatialIndex();


    // convert user location to H3 cell

    const my_Cell = userLocToCell(user);



    // find the array of users inside that H3 cell

    const usersInCell = tempIndex[my_Cell];


    // if the cell does not exist, stop

    if (!usersInCell){

        return;

    }



    // find where the user is inside the array

    const my_Index = usersInCell.indexOf(user);



    // if the user exists, remove them

    if (my_Index !== -1){

        usersInCell.splice(my_Index, 1);

    }



    // save the updated spatial index

    setSpatialIndex(tempIndex);

}

// now let's do for moving the spatial index

function moveUserLocation(oldUser, updatedUser){

    // you are just removing from the index

    removeUserFromSpatialIndex(oldUser);

    // you are readding it back in a different cell

    addUserToSpatialIndex(updatedUser);


}






module.exports = {
    addUserToSpatialIndex,
    removeUserFromSpatialIndex,
    moveUserLocation
}