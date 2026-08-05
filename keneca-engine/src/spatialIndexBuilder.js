// so basically this file is only called once when deployed to create the spatial index. js gotten from the user.js info

const { userLocToCell }= require ("./user");

// now we just call the function or create the function 

// this function create a dictioary of cells with each cell containg a list of users in that cell.  this function convert's a list of users into their corresponding spatial cells

function createUserSpatialIndex(usersOrRequests){

    //ok first I think we create an empty dictionary 

    const user_Index = {};

    //then we loop throught each of the array of users 

    for (let i=0; i<usersOrRequests.length; i++){

        // we need to access one user indiviually and store them in the function user 

        const user = usersOrRequests[i];

        //apply the function of converting to the h3 cell indivudally 

        const user_Key_Cell = userLocToCell(user);

        

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

// we need a seperate function that we can call anytime we want to read the or to check from our table 


module.exports ={
    createUserSpatialIndex
}


