const express = require('express'),
      app = express();

//route serves both the form page and processes form data
app.get('/', (request, response)=>{
    console.log(request.query);
    response.sendFile(__dirname +'/index.html');
  });

//Binding the server to a port(3000)
app.listen(3000,()=>console.log('express server started at port 3000'));