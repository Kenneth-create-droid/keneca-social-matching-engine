// Import the function responsible for generating the H3 cells
// around the post location for the current propagation ring
const { cellsAtCurrentRing } = require("./propagation");


// Import the function that calculates the distance between the post
// and each nearby user, then attaches that distance information
const { addDistanceToUsers } = require("./distance");


// Import the function that gives us access to the already created
// spatial index stored in memory
// We do NOT create the index here because it was already created at startup
const { getSpatialIndex } = require("./spatialIndex");




// This function is responsible for finding possible users for a post
// It searches users only in the cells belonging to the current propagation ring
// It then calculates their distance from the post
function findUsersForPost(startingCell, current_Ring, post){


    // First, we find all H3 cells that belong to this propagation ring
    //
    // Example:
    // Ring 0 -> [startingCell]
    // Ring 1 -> [6 neighboring cells]
    //
    const cells = cellsAtCurrentRing(
        startingCell,
        current_Ring
    );



    // Retrieve the existing spatial index from memory
    //
    // The index was created once during startup:
    //
    // {
    //    h3Cell1: [user1,user2],
    //    h3Cell2: [user3]
    // }
    //
    // We only read from it here.
    const user_Index = getSpatialIndex();



    // Create an empty array that will store all users
    // found inside the cells of the current ring
    const user_List = [];



    // Loop through every H3 cell returned from the propagation function

    for (const cell of cells){



        // Use the H3 cell as a key to access the users inside that cell
        //
        // Example:
        //
        // user_Index["892b986616bffff"]
        //
        // returns:
        //
        // [Liam, Timi]
        //
        const current_Users = user_Index[cell];



        // Check if there are users stored inside this cell
        //
        // If the cell has users, add them to our user list

        if(current_Users){


            // The spread operator (...)
            // takes every user inside current_Users
            // and adds them individually into user_List
            //
            // Example:
            //
            // current_Users = [Liam,Timi]
            //
            // user_List.push(...current_Users)
            //
            // becomes:
            //
            // user_List.push(Liam,Timi)

            user_List.push(...current_Users);

        }

    }



    // Now that we have collected all users in the current ring,
    // calculate their distance from the post location
    //
    // This adds a distance property to each user object
    //
    // Example:
    //
    // {
    //    name:"Liam",
    //    distance:150 meters
    // }
    //
    const usersWithDistance = addDistanceToUsers(
        user_List,
        post
    );



    // Return the final list of users with their distance information
    //
    // This result will later be passed to the scoring engine
    return usersWithDistance;

}



// Export the function so other files,
// such as the dispatcher or matching engine,
// can use it

module.exports = {
    findUsersForPost
};