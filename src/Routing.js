import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Innerpages/Home'
import AboutUs from './Innerpages/AboutUs'
import Treatement from "./Innerpages/Treatement"
import BookAppointment from "./Innerpages/BookAppointment"
import ContactUs from "./Innerpages/ContactUs"
import NoPage from './Innerpages/NoPage'
// import Register from './Innerpages/Register'
// import StudentData from './Innerpages/StudentData'
// import StudentData1 from './Innerpages/StudentData1'
// import Register1 from './Innerpages/Register1'
// import DeleteStudent from './Innerpages/DeleteStudent'
// import DeleteStudent1 from './Innerpages/DeleteStudent1'
// import EditStudent from './Innerpages/EditStudent'
// import EditStudent1 from './Innerpages/EditStudent1'
// import WorkerGet from './Innerpages/WorkerGet'
// import WorkerPost from './Innerpages/WorkerPost'
// import WorkerDelete from './Innerpages/WorkerDelete'
// import WorkerEdit from "./Innerpages/WorkerEdit"
import Admin from './AdminDashboard/Admin'
import Register from './AdminDashboard/Register'
import AdminDashBoard from './AdminDashboard/AdminDashBoard'
import AddTreatement from './AdminDashboard/AddTreatement'
import DeleteTreatement from './AdminDashboard/DeleteTreatement'
import AddOffer from './AdminDashboard/AddOffer'
import DeleteOffer from './AdminDashboard/DeleteOffer'
import TreatementDetails from './Innerpages/TreatementDetails'
import AppointmentData from './AdminDashboard/AppointmentData'
import EditBookappointment from './AdminDashboard/EditBookappointment'
import AddDoctors from './AdminDashboard/AddDoctors'
import DeleteDoctors from './AdminDashboard/DeleteDoctors'
import EditDoctors from './AdminDashboard/EditDoctors'
import EditTreatement from './AdminDashboard/EditTreatement'
import EditOffer from './AdminDashboard/EditOffer'
import FormValidation from './Innerpages/FormValidation'

const Routing = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/treatement" element={<Treatement/>}/>
        <Route path="/bookappointment" element={<BookAppointment/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        {/* <Route path="/register" element={<Register/>}/>
        <Route path="studentdata" element={<StudentData/>}/>
        <Route path="studentdata1" element={<StudentData1/>}/>
        <Route path="/register1" element={<Register1/>}/>
        <Route path="deletestudent" element={<DeleteStudent/>}/>
        <Route path="deletestudent1" element={<DeleteStudent1/>}/>
        <Route path="editstudent/:id" element={<EditStudent/>}/>
        <Route path="editstudent1/:id" element={<EditStudent1/>}/>
        <Route path="getworker" element={<WorkerGet/>}/>
        <Route path="postworker" element={<WorkerPost/>} />
        <Route path="/deleteworker" element={<WorkerDelete/>} />
        <Route path="/editworker/:id" element={<WorkerEdit/>} /> */}
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admindashboard" element={<AdminDashBoard/>}>
               <Route path="" element={<AddTreatement/>}/>
               <Route path="deletetreatement" element={<DeleteTreatement/>}/>
               <Route path="addoffer" element={<AddOffer/>}/>
               <Route path="deleteoffer" element={<DeleteOffer/>}/>
               <Route path="appointment" element={<AppointmentData/>}/>
               <Route path="adddoctors" element={<AddDoctors/>}/>
               <Route path="deletedoctors" element={<DeleteDoctors/>}/>
        </Route>
        <Route path="/treatementdetails/:tname" element={<TreatementDetails/>}/>
        <Route path="/editbkapdetails/:id" element={<EditBookappointment/>}/>
        <Route path="/edittreatement/:id" element={<EditTreatement/>}/>
        <Route path="/editoffer/:id" element={<EditOffer/>}/>
        <Route path="/editdoctor/:id" element={<EditDoctors/>}/>
        <Route path="/formvalidation" element={<FormValidation/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Routes>
    </div>
  )
}

export default Routing;