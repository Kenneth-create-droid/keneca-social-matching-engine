


// this helps us to create our new index

// we are using a dictionary because that is what we stored it as 

let spatialIndex = {};

// now we swap the old index table with the new index table by using a setter function

// replacing the current spatial index with a new one 

function setSpatialIndex(newIndex){

    spatialIndex = newIndex;


}

// now we just get the new Index updated spatial Index

function getSpatialIndex(){

    return spatialIndex;

}

// we need to export both functions as we will use them 

module.exports = {
    setSpatialIndex,
    getSpatialIndex
}



















