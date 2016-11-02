var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var crimeSchema = new Schema({
    incident_type_description: { type: String, required: true, unique: false },
    reptdistrict: { type: String, required: true },
    shooting: Boolean,
    location: String,
    fromdate: Date
});

var Crime = mongoose.model('Crime', crimeSchema);
module.exports = Crime;
