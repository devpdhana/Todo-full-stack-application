const mongoose = require('mongoose')

async function main()  {
  await mongoose.connect("mongodb://127.0.0.1:27017/todolistapp");
};
try {
    main();
}catch (err){
    console.log(err.message)
}finally {
    console.log('MongoDB connected')
}


module.exports = main