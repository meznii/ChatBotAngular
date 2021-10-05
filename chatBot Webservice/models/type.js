const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    libelle: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('type', PostSchema);
