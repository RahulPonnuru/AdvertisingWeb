const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()
const Login=require('./backend/model/login');
const Register=require('./backend/model/register');
const Content=require('./backend/model/content');
const Adver=require('./backend/model/adver');
const axios = require('axios');
const { Bannerbear } = require('bannerbear')
const bb = new Bannerbear("bb_pr_99821266ba269dfd04d6a823406615");
const account =bb.account();
const all=bb.get_image("7gAk4KJj8QmqkyRLQvwqxrD20");

const apiKey = 'bb_pr_99821266ba269dfd04d6a823406615';
const templateId = 'N1qMxz5v0z78beQ4ko';
const url = `https://api.bannerbear.com/v2/images/${templateId}/rendered`;

const headers = {
  Authorization: `Bearer ${apiKey}`,
};
// const images = await bb.create_image(
//   "template uid",
//   {
//     modifications: [
//       {
//         name: "headline",
//         text: "Hello world!",
//       },
//       {
//         name: "photo",
//         image_url:
//           "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1000&q=80",
//       },
//     ],
//   },
//   true
// );
const accURL="https://sync.api.bannerbear.com/v2/account";
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/advertismentWeb",).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err))
 
app.get("/",function(req,res){
    res.send("Hello");
})

app.get("/getAdverData",function(req,res){
    const apiData=JSON.stringify(all);
    console.log(apiData.status);
    res.send(apiData);
})

app.get("/sendForm",function(req,res){
    res.send("Working grsettttt");
})

app.post("/sendAdverForm",function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const requirements=req.body.requirements;
    const budget=req.body.budget;
    const adver1=new Adver({
        name:name,
        email:email,
        requirements:requirements,
        budget:budget
    })
    adver1.save();
})

app.post("/sendLoginForm",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    
    Register.findOne({ email:username }).exec().then(results => {
        if(results){
            if(results.password===password){
                console.log("Success1234");
                res.send("Sucess");
            }
        }
    }).catch(err => {
        console.log("Failed");
        res.send("Fail");
        console.error(err);
    });
    // Register.find({email:username}, async (err,foundList)=>{
    //     if(err){
    //         console.log("Error coming"+err);
    //     }else{
    //         if(foundList){
    //             if(foundList.password===password){
    //                 console.log("succ3ssx")
    //                 res.render("success");
    //             }
    //         }
    //     }
    // })
})

app.post("/sendDetails",function(req,res){
    const username=req.body.username;
    const email=req.body.email;
    const companyName=req.body.companyName;
    const password=req.body.password;
    const repassword=req.body.repassword;

    const register1=new Register({
        companyName:companyName,
        username:username,
        email:email,
        password:password,
        repassword:repassword
    });
    res.send("Details saved");
    register1.save();
})


app.get("/apiData",function(req,res){
    axios
  .get(url, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
    
})

// var data = {
//     "template" : "jJWBKNELpQPvbX5R93Gk",
//     "modifications" : [
//       {
//         "name" : "layer1",
//         "text" : "This is my text"
//       },
//       {
//         "name" : "photo",
//         "image_url" : "https://www.pathtomyphoto.com/1.jpg"
//       }
//     ]
//   }
//   fetch('https://api.bannerbear.com/v2/images', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type' : 'application/json',
//       'Authorization' : `Bearer ${API_KEY}`
//     }
//   })

app.listen(process.env.PORT || 3007, function() {
    console.log("Server started succesfully on port 3007");
});     