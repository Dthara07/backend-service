const router = require('express').Router();
const {
  getRecords,
  setRecord,
  updateRecord,
  deleteRecord,
} = require('../controllers/testCrudController');

router.get('/', getRecords);
router.post('/', setRecord);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

module.exports = router;
