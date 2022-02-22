const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})





router.get('/movies',function(req,res){
    const mymovie = ['Pushpa','Aiyaary','Hridayam','The Nun']
     res.send(mymovie);
})

router.get('/movies/:index',function(req,res){

const mymovie = ['Pushpa','Aiyaary','Hridayam','The Nun']
let prakhar =req.params.index;
if(prakhar>mymovie.length-1){
    res.send('Use valid index')
}
else if(prakhar<mymovie.length){

    let y = mymovie[prakhar]
    res.send(y)
}


})
 



router.get('/films', function(req,res){

const film = [

    {
        "id":1, "name":"Pushpa"
    },
   
    {
        "id":2, "name":"Aiyaary"   
     },

     {
         "id":3, "name":"Hridayam"


     },

     {
        
        "id":4 , "name":"The Nun"

     }


]
res.send(film)

})






router.get('/films/:filmsid', function(req,res){
      

    let fi=req.params.filmsid;
    const film = [
    
        {
            "id":1, "name":"Pushpa"
        },
       
        {
            "id":2, "name":"Aiyaary"   
         },
    
         {
             "id":3, "name":"Hridayam"
    
    
         },
    
         {
            
            "id":4 , "name":"The Nun"
    
         }
    
    
    ]

    if(fi>film.length){

        res.send("invalid id")
    }
    else {

        for(let i=0;i<film.length;i++){
            if(film[i].id==fi){

                res.send(film[i])
            }

        }
    }
   
   
   
   
    res.send(film)
    
    })




module.exports = router;
