const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const ApiFeatures = require("../utils/apiFeatures");

exports.getAll = (Model) =>
  asyncHandler(async (req, res, nxt) => {
    let filter = {};
    if (req.filterObj) {
      filter = req.filterObj;
    }

    const apiFeature = new ApiFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .fieldsLimit()
      .search();

    const countDocuments = await Model.countDocuments();

    await apiFeature.paginate(countDocuments);

    const { mongooseQuery, paginationResult } = apiFeature;

    const docs = await mongooseQuery;

    res.status(200).json({
      status: "Success",
      results: docs.length,
      paginationResult,
      data: docs,
    });
  });

exports.getOne = (Model) =>
  asyncHandler(async (req, res, nxt) => {
    const { id } = req.params;

    const doc = await Model.findById(id);
    if (!doc) {
      return nxt(new ApiError(`No document for this id ${id}`, 404));
    }
    res.status(200).json({ data: doc });
  });

exports.createOne = (Model) =>
  asyncHandler(async (req, res, nxt) => {
    const doc = await Model.create(req.body);

    res.status(201).json({ data: doc });
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, nxt) => {
    const { id } = req.params;

    const doc = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!doc) {
      return nxt(new ApiError(`No document for this id ${id}`, 404));
    }
    res.status(200).json({ data: doc });
  });

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, nxt) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);
    if (!doc) {
      return nxt(new ApiError(`No document for this id ${id}`, 404));
    }

    res.status(204).send();
  });
