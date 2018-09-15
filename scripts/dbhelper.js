/**
 * Common database helper functions.
 */

//TO DO: 
//Check to see if there is data being pulled from the server
//If there is data return it
//If there is no data cache it
//Then return it


class DBHelper {

  /**
  * Database URL.
  * Changed to root level of database to access reviews and restaurants details 
  */
  static get DATABASE_URL() {
    const port = 1337;
    return `http://localhost:${port}/restaurants`;
  }


  /**
   * Fetch all restaurants.
   */
  static fetchRestaurants(callback) {
    /**
     * Using Fetch all Restaurants API to fetch data
     */
    fetch(DBHelper.DATABASE_URL).then(
      function (response) {
        let array = response.json();//arrayifying the response
        return array;//'array' soon to be 'data' is still a response object

      })
      .then(
        function addData(data) {
          const dbPromise = idb.open(
            'TheRestaurantDepot', 1, function (upgradeDb) {
              upgradeDb.createObjectStore('RestaurantStore', {
                keyPath: 'id'
              });
            }); //End of opening database
          dbPromise.then(
            function (db) {//put the data into the db
              var tx = db.transaction('RestaurantStore', 'readwrite');
              var store = tx.objectStore('RestaurantStore');
              data.forEach(datas => {

                var placedData = store.put(datas);
                return placedData;
              });
            }).catch(
              function (error) {
                //console.log('Working offline...' + error)
                dbPromise.then(function (db) {//get the data from out of the store
                  var tx = db.transaction('RestaurantStore');
                  var cache = tx.objectStore('RestaurantStore');
                  return cache.getAll();
                })
              })
          callback(null, data)
        })
  }//end of fetchRestaurants


  /**
   * Fetch a restaurant by its ID.
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        //the first element in restaurants array who's id value matches this id

        if (restaurants) { // Got the restaurant
          //console.log(restaurant);
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine type with proper error handling.
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        const results = restaurants.filter(r => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by a neighborhood with proper error handling.
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        const results = restaurants.filter(r => r.neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter(r => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * Fetch all neighborhoods with proper error handling.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * Fetch all cuisines with proper error handling.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
        callback(null, uniqueCuisines);
      }
    });
  }


  // High-level here are the steps it should follow
  // • Check the DB for reviews
  // • If no reviews in DB (returned list of reviews has length === 0) then fetch reviews
  // • Take response from fetch and do .json()
  // • Take response from converting json to object and iterate, putting each review in DB
  // • Return response


  // Doug Brown [Project Coach] [2 hours ago]
  // Everything should then flow to the callback for displaying reviews after that
  static get REVIEWS_URL() {
    const port = 1337;
    return `http://localhost:${port}/reviews`;
  } 
  /**
   * This is the Prototype for any function needing to access the reviews url
    */
  static fetchReviews(callback) {
    const reviewsUrl = DBHelper.REVIEWS_URL;
    if (reviewsUrl.length === 0) {
      console.log('There are no reviews here');
      return;
    } else {


      fetch(reviewsUrl).then(
        function (response) {
          let array = response.json();
          return array;
        })
        .then(
          function addReviewsData(reviewsData) {
            const dbPromise = idb.open(
              'TheReviewsDepot', 1, function (upgradeDb) {
              upgradeDB.createObjectStore('ReviewsStore', {
                keyPath: 'id'
              });
            });
            dbPromise.then(
              function (db) {
                let tx = db.transaction('ReviewsStore', 'readwrite');
                let store = tx.objectStore('ReviewsStore');
                reviewsData.forEach(reviewsDatas => {
                  let placedData = store.put(reviewsDatas);
                  console.table(placedData);
                  return placedData;
                });
              }
            ).catch(
              function (error) {
                console.log(`Error with Reviews was caught:  ${error}`);
                dbPromise.then(function (db) {
                  let tx = db.transaction('ReviewsStore');
                  let cache = tx.objectStore('ReviewsStore');
                  return cache.getAll();
                })
              })
            callback(null, reviewsData)
          });


    }//end of if/else
  }

  static fetchReviewsById(id, callback) {
    // fetch all reviews with proper error handling.
    DBHelper.fetchReviews((error, reviews) => {
      if (error) {
        callback(error, null);
      } else {
        const review = reviews.find(r => r.id == id);
        //the first element in restaurants array who's id value matches this id

        if (review) { // Got the restaurant
          //console.log(restaurant);
          callback(null, review);
        } else { // Restaurant does not exist in the database
          callback('Reviews does not exist', null);
        }
      }
    });
  }

  /**
   * Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    return (`./img/${restaurant.photograph}.webp`);

  }

  /**
   * Map marker for a restaurant.
   */
  static mapMarkerForRestaurant(restaurant, map) {
    // https://leafletjs.com/reference-1.3.0.html#marker  
    const marker = new L.marker([restaurant.latlng.lat, restaurant.latlng.lng],
      {
        title: restaurant.name,
        alt: restaurant.name,
        url: DBHelper.urlForRestaurant(restaurant)
      })
    marker.addTo(newMap);
    return marker;
  }

}
