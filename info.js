const express =require("express")
const Napp =express()
const datex=require("./middlewear/datexpress.js")

Napp.use(express.static('space'));
// route
Napp.use(datex)
 Napp.get("/HomePage",(req,res)=>{
    res.sendFile(__dirname+"/space/HomePage.html")
})
Napp.get("/ContactUs",(req,res)=>{
    res.sendFile(__dirname+"/space/ContactUs.html")
 })
 Napp.get("/OurService",(req,res)=>{
    res.sendFile(__dirname+"/space/OurService.html")
})

 const port=5000
 Napp.listen(port, (err)=> {err?console.log(err):console.log(`server is running on port ${port}`)})
