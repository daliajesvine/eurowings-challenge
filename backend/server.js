
const constants = require('./constant');
const express = require('express');
var cors = require('cors');
const axios = require('axios');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

router.get('/getImageData', (req, res) => {
  let imageUrl = 'https://api.imgur.com/3/gallery/'+req.query.section+'/'+ req.query.sort +'/'+ req.query.window +'?perPage=20&showViral='+req.query.showViral+'&mature=false&album_previews=true';
  console.log('Image URL:', imageUrl);
  axios.get(imageUrl, { headers: { Authorization: 'Client-ID ' + constants.CLIENT_ID } })
      .then(response => {
        return res.json( {success: true, data: response.data.data} );
      })
      .catch(error => {
        return res.json( {success: false, data: error} );
      })
});

// append /api for http requests
app.use('/api', router);

// launch backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));