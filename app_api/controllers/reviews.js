const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const reviewsCreate = () => { 
    res.status(200)
       .json({"status": "success"});
};
const reviewsReadOne = () => { 
    res.status(200)
       .json({"status": "success"});
};
const reviewsUpdateOne = () => { 
    res.status(200)
       .json({"status": "success"});
};
const reviewsDeleteOne = () => { 
    res.status(200)
       .json({"status": "success"});
};

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};