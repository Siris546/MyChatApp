const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put("https://api.chatengine.io/users/",
    {
      username:username, secret: username, first_name: username 
    },
    {headers: {"private-key":"2d6b67af-3da0-4c41-8783-aa96b99352d4"}}
    )
    return res.status(r.status).json(r.data);
  }
  catch(e){
    return res.status(e.res.status).json(e.res.data)
  }
  
// 7d2cd9bc-97c9-4c4e-a42d-6356cadac5bc
});

app.listen(3001);