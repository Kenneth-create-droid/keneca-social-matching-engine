// in this file we will focus on building givig score to it and sorting it based o n the score 
//this design we will be better in case we want to add mre variables
// rater than sorting we use scoring as scoring algorthms can be changed easily but sorting cannot be 

const {findUsersForPostWithDistance} = require("./matching");

// we will add score to the user infrmation and store it in the hex so it is going to be in form of an arrays to
// to be able to have access to the user infor together with the score 

// this is the function to create the score 

function scoreUser(user){


    // we will start based only on distance by doing a distance normalization function

    // now matter how far we want to make it so that it is between 0 to 100 

        const maxDistance = 3000; 

      let score = 100 - ((user.distance / maxDistance) * 100);

      // this we prevent negative scores that is if the distance is bigger tha the. amx distance 


      if (score < 0){
        score =0;
      }

      return score; 










    







}






function assignScoresToUsers(startingCell, current_Ring, post){

    // let us assign the arrays of users gotten from the matching algorithm to a variable

   // these parameters will be given by the dispathcer

    const listUsers = findUsersForPostWithDistance (startingCell,current_Ring, post);

    // to fix this we make them inpiuts the one above 

   
    // create an empty array thna we will add the new user and score to 
    const usersWithScore =[];

    // we then loop through the users



    for (let i = 0; i< listUsers.length; i++){


        // now we fist score each user before we assign 

        const userScore = scoreUser(listUsers[i]); 

        // then you push the score the and in the individual objects and make an. array

        usersWithScore.push ({

            // this is your spread as like an array
            ...listUsers[i], // you are spreading eeach individual user 
            score: userScore


        });

    

        

    }

    // then we retun the list as created 

    return usersWithScore;




}

 // ok the next thing is that ww will build a simple ranking to system so that our dispatching can easily dispathc the users


 function rankUsersWithScore(startingCell, current_Ring, post){

    // this storesthe score assigned array in te final Score variable 
    const finalScore = assignScoresToUsers(startingCell, current_Ring, post);

    // so we use a priority queue 

    // so basically get's the score from the final users
    // if a is bigger than b, negative and it should come firtst

    finalScore.sort(
        (a,b)=> b.score - a.score
    );

    return finalScore; 


 }


module.exports ={
    assignScoresToUsers,
    rankUsersWithScore
}