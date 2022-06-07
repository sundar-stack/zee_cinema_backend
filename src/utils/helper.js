exports.healthCheck = (req, res) => {
  res.json({
    status: 200,
    message: "Running Succesfully!",
  });
};
