const mongoose = require('mongoose'); 
const mongoURI='mongodb://gofood:mern1234@ac-6qndff7-shard-00-00.jtvyb03.mongodb.net:27017,ac-6qndff7-shard-00-01.jtvyb03.mongodb.net:27017,ac-6qndff7-shard-00-02.jtvyb03.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-ip7kaq-shard-0&authSource=admin&retryWrites=true&w=majority'
// const mongoURI='mongodb+srv://gofood:mern1234@cluster0.jtvyb03.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoDB = async() =>{
    mongoose.set("strictQuery",false);

 await mongoose.connect(mongoURI, {useNewUrlParser: true},async(err,result) =>{
    if(err) console.log("---",err)
    else{
    console.log("connected");
    const fetched_data =await mongoose.connection.db.collection("food_items");
     fetched_data.find({}).toArray (async function(err,data){
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray (function (err,catData){
            if(err) console.log(err);
             else {
              global.food_items = data;
              global.foodCategory = catData;

             
             }

        })
        //  if(err) console.log(err);
        //  else {
        //  global.food_items = data;
         
        //  }

     })

    
    }
} );
}
module.exports = mongoDB();