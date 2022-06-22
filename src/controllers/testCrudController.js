const asyncHandler = require('express-async-handler');

const getRecords = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Read' });
});

const setRecord = asyncHandler(async (req, res) => {
  console.log('Body ==> ', req.body);
  res.status(201).json({ message: 'Created' });
});

const updateRecord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated record ${req.params.id}` });
});

const deleteRecord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted record ${req.params.id}` });
});

module.exports = {
  getRecords,
  setRecord,
  updateRecord,
  deleteRecord,
};
