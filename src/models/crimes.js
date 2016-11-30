var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var crimeSchema = new Schema({
    compnos: Number,
    naturecode: String,
    incident_type_description: { type: String, required: true, unique: false },
    main_crimecode: String,
    reptdistrict: String,
    reportingarea: Number,
    fromdate: String,
    weapontype: String,
    shooting: Boolean,
    domestic: Boolean,
    shift: String,
    year: Number,
    month: Number,
    day_week: String,
    ucrpart: String,
    x: Number,
    y: Number,
    streetname: String,
    xstreetname: String,
    location: [Number]

});

var Crime = mongoose.model('Crime', crimeSchema);
module.exports = Crime;
