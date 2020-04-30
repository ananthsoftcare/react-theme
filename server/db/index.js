const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://tsteps_user_1:tsteps@react-test-rijdr.mongodb.net/tsteps?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
/*ongoose.set('debug', true);
mongoose.set('debug', function (collectionName, method, query, doc, options) {
    console.log(collectionName, method, query, doc, options)
  });*/
const db = mongoose.connection

module.exports = db