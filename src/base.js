import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAeITaP08YD2HluS5dXXs8WA9lEklPRzJU',
  authDomain: 'cotd-jscott.firebaseapp.com',
  databaseURL: 'https://cotd-jscott.firebaseio.com',
  projectId: 'cotd-jscott'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
