const express =require('express');
const app =express();
const mongoose =require('mongoose');
const Rental =require('./models/rental');
const config =require('./config/dev');
const FakeDb = require('./fake-db');
const rentalRoutes =require('./routes/rentals')
mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

app.use('/api/v1/rentals',rentalRoutes);
const PORT =process.env.PORT||3001;
app.listen(PORT,function(){
    console.log('Iam running fine!!');
});