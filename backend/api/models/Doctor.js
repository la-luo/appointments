const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppointmentSchema = require('./Appointment').AppointmentSchema;

const DoctorSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    appointments: [AppointmentSchema]
}, {
    versionKey: false 
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
