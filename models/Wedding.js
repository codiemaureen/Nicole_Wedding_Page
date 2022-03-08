const mongoose = require('mongoose');

const weddingSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'You must supply a title!']
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [{
            type: Number,
            required: [true, 'You must supply coordinates']
        }],
        address: {
            type: String,
            required: [true, 'You must supply an address']
        }
    }
});

module.export = mongoose.model('Wedding', weddingSchema);