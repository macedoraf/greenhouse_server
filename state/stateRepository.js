
const firebase = require('../database/firebase')

const database = firebase.database();
const stateDatabaseReference = database.ref("/state")
const stateHistoryDatabaseReference = database.ref("/history/").child("state_history")

const attempingToBeLoggedStates = []
const TAG = "FIREBASE: "

module.exports = {


    async saveState(state) {
        //Add to firebase
        stateDatabaseReference.set(state)

        //LogginStates
        attempingToBeLoggedStates.push(state)
        console.log(TAG + JSON.stringify(state))
        if(attempingToBeLoggedStates.length > 60){
            console.log(TAG + JSON.stringify(attempingToBeLoggedStates))
            stateHistoryDatabaseReference.push(attempingToBeLoggedStates)
            while(attempingToBeLoggedStates.length > 0){
                attempingToBeLoggedStates.pop();
            }
        }
        
    },

}