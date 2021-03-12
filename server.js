//import anything we need
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//intiailize the app and create my port
const app = express();
const PORT = process.env.PORT || 3030;

// setting up the body parsing for static and routing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// //bring in routes
//require("./routes/htmlRoutes")(app);
//require("./routes/apiRoutes")(app);


//start server 
app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));