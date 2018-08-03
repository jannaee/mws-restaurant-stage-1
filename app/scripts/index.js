
//Step 1. Create Object Store
//creating the object store, this is the only place you can create object stores and create databases.
//storing the database object into the variable dbPromise
var dbPromise = idb.open('restaurants', 1, function(upgradeDb){//.open returns a promise that resolves as a database object. We want to store that as a the variable dbPromise.
	//keyVal is the objectStore and it separate from the data
  var keyValStore = upgradeDb.createObjectStore('keyval'); //'createObjectStore is the same ad idb'
  keyValStore.put('world', 'hello');  
});


