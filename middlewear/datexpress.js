const datex=(req,res,next)=>{
    let date= new Date()
    let h=date.getHours()
    let d=date.getDay()
    if(!(d>= 1 && d<=5 && h>=9 && h<=17)){
        return res.send("page not found.")
}
next()
}
module.exports=datex