// the goal of this is to convert lat and long to k3 cell while create dictionay indxes to acces the closest usersin  the starting cells 

// let's import the h3 library first 

const h3_lib = require ("h3-js"); 

// this is a sample of the user's information 


// first of all we create the array. This array will also consist of users or the rquest as requests will also have lat and long

const usersOrRequests= [
{ 
    id: 1,
    name: "Liam",
    latitude: 43.945,
    longitude: -78.896
}, 

 

{
    id: 2,
    name: "Yahaya",
    latitude:  43.946,
    longitude: -78.897
}, 

{
    id: 3,
    name: "Timi",
    latitude: 43.946,
    longitude: -78.898
},

{
        id: 4,
        name: "Mohammed",
        latitude: 44.050,
        longitude: -78.950
    },

    {
        id: 5,
        name: "Kenneth",
        latitude: 43.800,
        longitude: -79.200
    },

    {
        id: 6,
        name: "kennata",
        request: "Has anyone seen my phone",
        latitude: 43.9550,
        longitude: -78.9100
    },

    {
        id: 7,
        name: "Jason",
        request: " Anyone has any extra member for the basketball",
        latitude: 43.9490,
        longitude: -78.9000
    }

 ];

// Fucntion to convert a user location into h3 cell
// th e function needs a user's latitude and longitude
function userLocToCell(user){

    // define H3 resolution for campus/neighborhood scale

    const resolution = 9;


    // extract the user's location from the user object

    const user_Cell = h3_lib.latLngToCell(
        user.latitude,
        user.longitude,
        resolution
    );


    // return the H3 cell that represents the user's location

    return user_Cell;

}

//ok let's write an algorthm to test this




// it worked



//ok now let me actually export this this we export the twon function which will then be used 


module.exports = { 

    // as long as they have the same kname you can use only one name 

     userLocToCell,
     usersOrRequests
    
   








}








