import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: 'AIzaSyBVZd0k-mpTvO1e1qOZMNAHiT9FSLGQl_0',
  authDomain: 'web-take-app.firebaseapp.com',
  databaseURL: 'https://web-take-app.firebaseio.com',
  projectId: 'web-take-app',
  storageBucket: 'web-take-app.appspot.com',
  messagingSenderId: '441211555963'
})

var db = firebaseApp.database()
export const firebaseApi = db
export const customersRef = db.ref('static/customers')
export const morePowerStoryRef = db.ref('static/more_power_story')
export const auth = firebaseApp.auth()
