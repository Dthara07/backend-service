const asyncHandler = require('express-async-handler');
const testCollection = require('../models/testModel');

const getRecords = asyncHandler(async (req, res) => {
  const docs = await testCollection.find();
  res.status(200).json(docs);
});

const setRecord = asyncHandler(async (req, res) => {
  console.log('Body ==> ', req.body);
  const doc = await testCollection.create({
    text: req.body.text,
  });
  res.status(201).json(doc);
});

const updateRecord = asyncHandler(async (req, res) => {
  const doc = await testCollection.findById(req.params.id);
  if (!doc) {
    res.status(400);
    throw new Error('Doc not found');
  }

  const updatedDoc = await testCollection.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedDoc);
});

const deleteRecord = asyncHandler(async (req, res) => {
  const doc = await testCollection.findById(req.params.id);
  if (!doc) {
    res.status(400);
    throw new Error('Doc not found');
  }

  await doc.delete();
  res.status(200).json({ message: `Deleted record ${req.params.id}` });
});

module.exports = {
  getRecords,
  setRecord,
  updateRecord,
  deleteRecord,
};
