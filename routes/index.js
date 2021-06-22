import { contentCtrl } from '../controllers';

const { Router } = require('express');


const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

/** Content API */
router.get('/content/all', contentCtrl.getAllContent);

module.exports = router;
