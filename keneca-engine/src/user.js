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
function userLocToCell(latitude, longitude){

    // we can define our resolution to the campus/neighborhood scale

    const resolution = 9;

    // we use the above resolution to convert it to the corresponing h3 cell 

   const user_Cell= h3_lib.latLngToCell(latitude, longitude, resolution);

   // the return basically the fucntion returns returrn sthe corresponding h3 cell

   return user_Cell;




}

//ok let's write an algorthm to test this

const sample_conversion = userLocToCell(43.945, -78.896);


// it worked


// this function create a dictioary of cells with each cell containg a list of users in that cell.  this function convert's a list of users into their corresponding spatial cells

function createUserSpatialIndex(usersOrRequests){

    //ok first I think we create an empty dictionary 

    const user_Index = {};

    //then we loop throught each of the array of users 

    for (let i=0; i<usersOrRequests.length; i++){

        // we need to access one user indiviually and store them in the function user 

        const user = usersOrRequests[i];

        //apply the function of converting to the h3 cell indivudally 

        const user_Key_Cell = userLocToCell(user.latitude, user.longitude);

        

       //you are asking here does the dictionary have a value stored with this key?



        if (!user_Index[user_Key_Cell]){

            // now we create the dictionary 

            //so now we create the dictionary structure here
            user_Index[user_Key_Cell]=[];

           




        }

         // we just push them into the the dictionary using the push. this happns after the if 

            user_Index[user_Key_Cell].push(user); 

           

       





    };

    //you return your Overall dictionary


    return user_Index;




}

//ok now testing the function 
const sample_test= createUserSpatialIndex(usersOrRequests);
console.log(sample_test); 









