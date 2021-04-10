const express = require('express')
const app = express()
const router = express.Router();

router.post('/list', (req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://store.kandykoi.com/wp-json/wc/v3/products',
        'headers': {
            'Authorization': 'Basic Y2tfMzdhNTU2NjZmMTU1N2JiYmZiZjM0ZTBkNDc2NTBkNTQxODAyYzk5YTpjc19mOWM2MThlNGE1ZjIyNWY3YTVkOGNlN2U0NjFjNzM0ZjNlNjQ5MGFi'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        let product = JSON.parse(response.body)
        res.json({success:true, data:product})
      });
})
router.post('/update', (req, res) =>{
    
    const data = {
        'name':req.body.name,
        'sku':req.body.sku,
        'regular_price':req.body.price
    }
    const url = 'https://store.kandykoi.com/wp-json/wc/v3/products/'+req.body.id;
 
    var options = {
        'method': 'POST',
        'url': url,
        'headers': {
            'Authorization': 'Basic Y2tfMzdhNTU2NjZmMTU1N2JiYmZiZjM0ZTBkNDc2NTBkNTQxODAyYzk5YTpjc19mOWM2MThlNGE1ZjIyNWY3YTVkOGNlN2U0NjFjNzM0ZjNlNjQ5MGFi'
        },
        formData: data
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json({success:true, data:response})
      });
})
router.post('/delete', (req, res) =>{
    
    const url = 'https://store.kandykoi.com/wp-json/wc/v3/products/'+req.body.id;
    var options = {
        'method': 'DELETE',
        'url': url,
        'headers': {
            'Authorization': 'Basic Y2tfMzdhNTU2NjZmMTU1N2JiYmZiZjM0ZTBkNDc2NTBkNTQxODAyYzk5YTpjc19mOWM2MThlNGE1ZjIyNWY3YTVkOGNlN2U0NjFjNzM0ZjNlNjQ5MGFi'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json({success:true, data:response})
      });
})


module.exports = router