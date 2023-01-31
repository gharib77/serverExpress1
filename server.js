const express = require("express")
const app = express()
const port = process.env.PORT || 5006
app.use(express.json())
app.listen(5002,()=>{
  console.log("server i runining")
})

app.get("/",(req,res)=>{
  res.json("tout se passe bien")
})