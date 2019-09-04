import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBds7aWuyKfVtXijqhxHI24ZB791XpVb00",
    authDomain : "reactjs-f4abb.firebaseapp.com",
    databaseURL: "https://reactjs-f4abb.firebaseio.com",
    projectId: "reactjs-f4abb",
    messagingSenderId: "0112358132134"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;