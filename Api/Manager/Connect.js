const mongoose = require('mongoose');

module.exports = async ()=>
{
    mongoose.connect('mongodb://localhost/DBRolling', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      },(error)=>{
          if(error != null)
          {
            console.log( 'Error data Base');
          }else
          {
              console.log("MongoDB ONLINE")
          }
      });
}