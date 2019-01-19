const dummyData = require('./dummyData');
const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mern';

const client = new mongoClient(url);

client.connect(function(err) {
	if (err) { 
		console.log("Error occured when connecting to mongo: " + err);
	}
	console.log("Sucessfully connected to mongo server");

	const db = client.db(dbName);
	insertDocuments(db, 'mern', () => {
		client.close();
	})
})

const insertDocuments = (db, collection, callback) => {
	const coll = db.collection(collection);
	coll.insertMany(dummyData, (err, result) => {
		if(err) {
			console.log(err)
		}
		callback();
	});
};




