const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    name: {
        type: String
    },
    time: {
        type: String
    },
    kind: {
        type: String
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
}, {
    versionKey: false 
});

const Appointment  = mongoose.model('Appointment', AppointmentSchema);
module.exports = {
    AppointmentSchema: AppointmentSchema,
    Appointment: Appointment
};