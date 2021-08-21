import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import LecturerService from '../../services/LecturerService';

class ListTeachingSchedule extends Component {

    constructor(props){
        super(props)
        this.state={
            schedules:[],
            startDate: new Date(),
            endDate: new Date()
        }

        this.createQRCode = this.createQRCode.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.filterSchedule = this.filterSchedule.bind(this);
        
    }

    handleStartDateChange(date){
        this.setState({
            startDate: date
        })
    }

    handleEndDateChange(date){
        this.setState({
            endDate: date
        })
    }

    filterSchedule() {       
               
        LecturerService.getSchedulesByRange(Date.parse(this.state.startDate), Date.parse(this.state.endDate)).then((res) => {
            this.setState({schedules: res.data})
        });
        
      }

    componentDidMount(){
        LecturerService.getLecturerTodaySchedule().then((res) => {
            this.setState({schedules: res.data})
        });
    }

    createQRCode(id, option){
        this.props.history.push(`/lecturer/qrcode/${id}/${option}`)
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Schedules</h1>

                <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleStartDateChange }
                    name="startDate"
                    dateFormat="dd/MM/yyyy"
                />

                <DatePicker
                    selected={ this.state.endDate }
                    onChange={ this.handleEndDateChange }
                    name="endDate"
                    dateFormat="dd/MM/yyyy"
                />
                
                <button className="btn btn-primary" onClick={ this.filterSchedule }>Filter</button>

                
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th> Module Code </th>
                            <th> Module Name </th>
                            <th> Class Size </th>
                            <th> Class Date </th>
                            <th> QR (IN) </th>
                            <th> QR (OUT) </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.schedules.map(
                                schedule=>
                                <tr key={schedule.id}>
                                    <td> {schedule._class.module.code} </td>
                                    <td> {schedule._class.module.name} </td>
                                    <td> {schedule._class.size} </td>
                                    <td> {schedule.date} </td>
                                    <td>
                                        <button className="btn btn-outline-info" onClick={()=>this.createQRCode(schedule.id, "signIn")}>Gen. QR Code</button>                                        
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-info" onClick={()=>this.createQRCode(schedule.id, "signOut")}>Gen. QR Code</button>                                        
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListTeachingSchedule;