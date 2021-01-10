import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';


class Appointments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doctors: [],
            apps:[],
            selectedDoctor: ''

        }
        this.showApps = this.showApps.bind(this);

    }


    componentDidMount() {
        axios.get('http://localhost:3001/api/doctors/')
            .then(res => {
                this.setState({doctors: res.data})
            })
            .catch((err) => {
                console.log(err);
            })
    }


    showApps(doctor) {
        console.log(doctor);
        axios.get(`http://localhost:3001/api/doctors/${doctor._id}/apps`)
        .then(res => {
            this.setState({apps: res.data})
        })
        .catch((err) => {
            console.log(err);
        })
        this.setState({selectedDoctor: doctor})
    }
    

    render() {
        console.log(this.state);
        const doctors = this.state.doctors;
        const apps = this.state.apps;
        const selectedDoctor = this.state.selectedDoctor;

        return (
            <div className="container">
                <div className="nav">
                    <h2 className="logo">Notable</h2>
                    <label>Physicians</label>
                    <ul>
                        {doctors.map((doctor, idx) => (
                            <li key={idx}><button onClick={() => this.showApps(doctor)}> {doctor.name}</button></li>
                        ))}
                    </ul>
                </div>
                <div className="apps">
                        <h2>{selectedDoctor.name}</h2>
                        <h4>{selectedDoctor.email}</h4>
                {  selectedDoctor && <table className="table table-striped table-hover">
                    <thead>
                        <tr className="table-head">
                            <th>#</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Kind</th>
                        </tr>
                    </thead>
                    <tbody>
      
                        {apps.map((app, idx) => 
                          (
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{app.name}</td>
                                <td>{app.time}</td>
                                <td>{app.kind}</td>

                            </tr>)
                          )
                        }
                    </tbody>
                </table>}
                </div>
                <br />

            </div>
        )
    }

}
export default withRouter(Appointments);