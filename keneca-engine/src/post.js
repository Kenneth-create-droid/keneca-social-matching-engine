// let us import from our h3 library now

const h3_lib = require("h3-js");

//we need a bunch of codes to creates arrays

//creating some sample requests
const user_requests = [
    {
        id: 1,
        name: "Mirian",
        request: "Does anyone understands systems for the miderm",
        latitude: 43.9455,
        longitude: -78.8965
    },

    {
        id: 2,
        name: "Einstein",
        request: "Can anyone find the pen that I am looking for",
        latitude: 43.9460,
        longitude: -78.8970

    },

    {
        id: 3,
        name: "Clinton",
        request: "Is there a game going on in the dome",
        latitude: 43.9470,
        longitude: -78.8980
    },

    { 
        id: 4,
        name: "Lilian",
        request:" We need one more person for our capstone group",
        latitude: 43.9490,
        longitude: -78.900
    },

    {
        id: 5,
        name: "Lesly",
        request: "Hey guys I am looking for a codign team mate",
        latitude: 43.9550,
        longitude: -78.9100
    }
];

// now we need to create a function similar to that of the user.js where we collect a  user's location and change it to a h3 cell

function requestToCell(latitude, longitude){
    // we use a resoluton of 9 to help us navigate on a campus/neighborhood level

    const resolution =9;
    // we produce a line that actually changes this to the corresponding h3 cell

    const h3_Cell = h3_lib.latLngToCell(latitude, longitude, resolution);

    // we return the corresponding h3 cell

    return h3_Cell;
}

// we now test the function 

//the function worked

//now we create a function that actually creates the spatial index making a dictionary key value of cell- user relationship

function requestToIndex(user_requests){

    // we then create an empty dictionary first as we will later fill this in and return them

    const requestIndex ={};

    // next we loop through all user reqests and get their keys

    for (let i =0; i<user_requests.length; i++){

        // now you access the information of each individual users

       const user_request = user_requests[i];

        // we will now create cells of each individual users by using hour above function we had previously

        const request_Cell = requestToCell(user_request.latitude, user_request.longitude);

        // now taht we have gottent he key, we then use our dictionary to check if there is any key value relationship location in te dictionary if not we create 

        if (!requestIndex[request_Cell]){

          // meaning we use our current key to create the key value structure in which informatioon will be pushed onto later
            requestIndex[request_Cell]= [];
        }

        //now we are just pushing the user information into the key value dictionary structure

        requestIndex[request_Cell].push(user_request);






    }

    return requestIndex;
};

// now we actually test the code to see if it is working 

//the test function worked 
