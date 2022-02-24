// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

const express = require('express');
const router = express.Router();

let persons= [
    {
    name: "Pawan",
    age: 12,
    votingStatus: false
},
{
    name: "Suneel",
    age: 20,
    votingStatus: false
},
{
    name: "Arpit",
    age: 70,
    votingStatus: false
},
{
    name: "Sneha",
    age: 5,
    votingStatus: false
},
{
    name: "Alok",
    age: 44,
    votingStatus: false
},
{
    name: "Ashutosh",
    age: 22,
    votingStatus: false
},
{
    name: "Hariom",
    age: 29,
    votingStatus: false
},
{
    name: "Rahul",
    age: 55,
    votingStatus: false
},
{
    name: "Ritesh",
    age: 17,
    votingStatus: false
}
]

router.post("/voters", function (req, res) {
    
    let validvoter = req.query.validvoter

     for (let i = 0; i < persons.length; i++) {

        persons[i].votingStatus = true
     }                                                       

        console.log(persons)
        
        let x = persons.filter (element => element.age > validvoter)
        
        console.log(x)

        return res.send(x)
})

        module.exports = router;