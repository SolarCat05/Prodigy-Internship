import express from "express";
import axios from "axios";
import bodyParser from "body-parser"

const app=express();
const port=1000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async(req,res)=>{
    try{
    res.render("index.ejs",  );
    }
    catch(err){
        console.log(err.message);
    }
})


app.post("/form",async(req,res)=>{
    try{
        const country=req.body.country_list;
        console.log(req.body.country_list);
        const response=await axios.get("https://restcountries.com/v3.1/name/"+`${country}`);
        const result=response.data;
        const flag=result[0].flags.png;
        res.render("index.ejs", {data:result, flag:flag} );
    }
    catch(err){
        console.log(err.message);
    }
})

// STARTING THE SERVER ON PORT
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})