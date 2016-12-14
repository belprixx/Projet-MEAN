var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var crimeSchema = new Schema({
    compnos: Number,
    naturecode: String,
    incident_type_description: String,
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
    location: String

    /*

    CORRIGER LA LOCATION : ESSAYER AVEC INFOS EN DESSOUS

    I fixed it myself.

        I did this in my model:

    loc :  { type: {type:String}, coordinates: [Number]},
Underneath I made it a 2dsphere index.

eventSchema.index({loc: '2dsphere'});
And to add data to it:

    loc: { type: "Point", coordinates: [ longitude, latitude ] },
*/
});

var Crime = mongoose.model('Crime', crimeSchema);
module.exports = Crime;
