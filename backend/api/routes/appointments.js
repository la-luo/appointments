const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment').Appointment;
const Doctor = require('../models/doctor');
//const Doctor = require('../models/Doctor');

router.get('/doctors', 
    async (req, res) => {
        console.log('hit get doctors api');
        Doctor.find({})
        .then(docs => res.status(200).json(docs))
        .catch(err => res.json(err));
    }
);


router.get('/doctors/:doctorId/apps', 
    async (req, res) => {
        console.log('hit get appointments api');
        Doctor.findById(req.params.doctorId)
        .then(doctor => res.json(doctor.appointments))
        .catch(err => res.json(err));
    }
);


module.exports = router;