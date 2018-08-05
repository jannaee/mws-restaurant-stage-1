
/**
 * IndexedDB functions.
 */

//var dbPromise = DBHelper.openDatabase(); 

// //creating that database
// var dbPromise = idb.open('TheDepot', 1, function(upgradeDb){
//   switch(upgradeDb.oldVersion) {
//     case 0: 
//     console.log();
//     var storeKey = upgradeDb.createObjectStore('RestaurantStore', {
//       keyPath: 'id'//id is the primary key
//     }); 
//     storeKey.createIndex('Store-ids', 'id'); //('create Store Ids and index by id')
//     case 1: 
//     var keyValStore = upgradeDb.createObjectStore('keyval');
//     keyValStore.put('world', 'hello');
//   }//end of switch
// });

// //Create a transaction that pulls messages from server into database
// // dbPromise.then(function(db){
// //   var tx = db.transaction('RestaurantStore', 'readwrite');
// //   var storeKey = tx.objectStore('RestaurantStore');
// //   DBHelper.DATABASE_URL
// // })