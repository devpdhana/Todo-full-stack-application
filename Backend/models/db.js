const mongoose = require('mongoose')

async function main()  {
  await mongoose.connect("mongodb+srv://devpdhanasekar:Dhana3001@cluster0.bfnh7bp.mongodb.net/todolistapp?retryWrites=true&w=majority");
};
try {
    main();
}catch (err){
    console.log(err.message)
}finally {
    console.log('MongoDB connected')
}


module.exports = main
