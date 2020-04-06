const express = require("express")

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(request,response)=>{
    
    response.send(`<h1> Sandeep Narhe </h1> ${PORT}`);
});

app.listen(PORT,()=> console.log(`Server is running on PORT : ${PORT}`))

