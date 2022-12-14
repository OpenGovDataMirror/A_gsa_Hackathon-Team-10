var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var VendorSchema = new Schema({
                                agencyname : String,
                                cobussizeseterminationsesc : String,
                                effectivedate : Date,
                                lastdatetoorder : Date,
                                piid : String,
                                totalbaseandalloptsvalue : String,
                                vendordunsname : String,
                                vendordunsnumber : String
});

mongoose.model('vendorcontractdetails', VendorSchema);