const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    libelle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reponse: {
        type: String,
        required: true
    },
    dateCreation: {
      type: Date,
      default: Date.now
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'type'
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('categorie', PostSchema);
