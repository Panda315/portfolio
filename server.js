const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended:false
    })
)

app.use(express.json());
app.listen(prashantshrestha15.com.np,()=> console.log('server is up and running'));
