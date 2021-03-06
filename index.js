//import anything we need
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//intiailize the app and create my port
const app = express();
const PORT = process.env.PORT || 3030;


// setting up the body parsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// //bring in routes
app.get('/', htmlRoutes);
app.get('/api', apiRoutes);



//start server 
app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));