const express = require('express');
const router = express.Router();

let Player = [ 
    {
          
         "name": "Pritesh",
         "dob": "10/08/1990",
         "gender":"male",
         "city": "Banglore",
         "sports": [ " Cricket"],
         "bookings": [

            {
                "bookingNumber":1,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "11111",
                "bookedOn":"03/06/2022",
                "bookedFor":" 10/06/2022"
            },
            {
                "bookingNumber":2,
                "sportsId":"",
                "centreId":"",
                "type":"private",
                "slot": "22222",
                "bookedOn":"15/07/2021",
                "bookedFor":" 01/12/2021"
            }

         ]
  },
 
 
  {
    "name": "Bharat",
    "dob": "09/06/1992",
    "gender":"male",
    "city": "Hariyana",
    "sports": [ " Football"],
    "bookings": [   ]

 },

  {

    "name": "Pritesh",
    "dob": "19/12/1994",
    "gender":"male",
    "city": "Punjab",
    "sports": [ " Gaziabad"],
    "bookings": [  ]
}

]

let a = Player.length;

// Part 1 ==> Add new player.

router.post('/player',function(req,res){

let element = req.body.nplayer.name;
let element1 = req.body.nplayer
for (let i=0;i<a;i++){
if(element === Player[i].name ){
    console.log(element)
    res.send("This Player is already exists")
    
   
}
else if (i === a-1){

    Player.push(element1)
    console.log(element1)
    res.send({data :Player , status : true})
   
}

}
})

module.exports = router;