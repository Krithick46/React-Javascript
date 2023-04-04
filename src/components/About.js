import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { edituser } from "../redux/actions";



function About() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mobileno, setmobileno] = useState("");
    const [email, setEmail] = useState("");
    const [dateofbirth, setdateofbirth] = useState("");
    const [gender, setgender] = useState("gender");
    const [city, setcurrentcity] = useState("")
    const [state, setcurrentstate] = useState("")
    const [pin, setpin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dbtype, setcurrentdbtype] = useState("")
    const [pkId, setpkId] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        setpkId(localStorage.getItem('pkId'))
        setFirstName(localStorage.getItem('firstname'))
        setLastName(localStorage.getItem('lastname'))
        setmobileno(localStorage.getItem('mobileno'))
        setEmail(localStorage.getItem('email'))
        setdateofbirth(localStorage.getItem('dateofbirth'))
        setgender(localStorage.getItem('gender'))
        setcurrentcity(localStorage.getItem('city'))
        setcurrentstate(localStorage.getItem('state'))
        setpin(localStorage.getItem('pin'))
        setPassword(localStorage.getItem('password'))
        setConfirmPassword(localStorage.getItem('confirmpassword'))
        setcurrentdbtype(localStorage.getItem('dbtype'))
    }, [])


    let dispatch = useDispatch();

    const updateuser = () => {
        dispatch(edituser({
            firstname, lastname, mobileno, email,
            dateofbirth, gender, city, state, pin, password, confirmPassword, dbtype, pkId
        }));
        navigate('/home');

    }


    return (
        <>
            <div className="row bg-secondary bg-gradient ">
                <div className="col-lg-10 mx-auto m-3">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container-fluid">
                                <form id="contact-form "  >
                                    <div className="controls" />
                                    <div className="row ">
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="firstName">First Name </label>
                                            <input name="firstname" className="form-control" type="text" value={firstname} onChange={event => setFirstName(event.target.value)} />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="lastName">Last Name </label>
                                            <input name="lastname" type="text" value={lastname} className="form-control" onChange={event => setLastName(event.target.value)} />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="mobileno">Mobile No </label>
                                            <input name="mobileno" type="tel" value={mobileno} className="form-control" onChange={event => setmobileno(event.target.value)} maxLength="10" minLength="10" />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="email">Email </label>
                                            <input name="email" type="email" className="form-control" value={email} onChange={event => setEmail(event.target.value)} />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="dateofbirth">Date Of Birth</label>
                                            <input name="dateofbirth" type="date" className="form-control" value={dateofbirth} onChange={event => setdateofbirth(event.target.value)} />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="pin">Pin</label>
                                            <input name="pin" type="tel" value={pin} className="form-control" onChange={event => setpin(event.target.value)} maxLength="6" minLength="6" />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">Gender</label>
                                            <div className="radio-btn-container"  >
                                                <div className="form-check-inline mr-5">
                                                    <div
                                                        className="radio-btn" name="gender"
                                                        onClick={() => {
                                                            setgender("male");
                                                        }}

                                                    >
                                                        <input
                                                            type="radio"
                                                            value="male"
                                                            name="gender"
                                                            onChange={event => setgender(event.target.value)}
                                                            checked={gender === "male"}


                                                        />
                                                        Male
                                                    </div>
                                                </div>
                                                <div className="form-check-inline mx-5">
                                                    <div
                                                        className="radio-btn"
                                                        onClick={() => {
                                                            setgender("female");
                                                        }}

                                                    >
                                                        <input
                                                            type="radio"
                                                            value="female"
                                                            name="gender"
                                                            onChange={event => setgender(event.target.value)}
                                                            checked={gender === "female"}


                                                        />
                                                        Female
                                                    </div>
                                                </div>
                                                <div className="form-check-inline ml-5">
                                                    <div
                                                        className="radio-btn"

                                                        onClick={() => {
                                                            setgender("others");
                                                        }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            value="others"
                                                            name="gender"
                                                            onChange={event => setgender(event.target.value)}
                                                            checked={gender === "others"}


                                                        />
                                                        Others
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">City</label>
                                            <select className="form-select w-90 m-auto"
                                                onChange={event => setcurrentcity(event.target.value)} name="city"
                                                value={city}
                                            >
                                                <option value="">-select-</option>
                                                <option value="chennai">Chennai</option>
                                                <option value="cochin">Cochin</option>
                                                <option value="hydrabad">Hydrabad</option>
                                                <option value="banglore">Banglore</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">State</label>
                                            <select className="form-select w-90 m-auto"
                                                onChange={event => setcurrentstate(event.target.value)} name="state"
                                                value={state}
                                            >
                                                <option value="">-select-</option>
                                                <option value="taminadu">Tamil nadu</option>
                                                <option value="kerala">Kerala</option>
                                                <option value="telungana">Telungana</option>
                                                <option value="karnataka">Karnataka</option>
                                            </select>

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="password">Password </label>
                                            <input name="password" className="form-control" type="password" value={password} onChange={event => setPassword(event.target.value)} />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="confirmpassword">Confirm password </label>
                                            <input name="confirmpassword" className="form-control" type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} />
                                            <input type="hidden" name="pkId" value={pkId} />

                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">DB Type</label>
                                            <select className="form-select w-90 m-auto"
                                                onChange={event => setcurrentdbtype(event.target.value)} name="dbtype"
                                                value={dbtype}
                                            >
                                                <option value="">-select-</option>
                                                <option value="Nova">SQL</option>
                                                <option value="Premia">Oracle</option>

                                            </select>

                                        </div>




                                        <div className="footer">
                                            <div className="col-md-12">
                                                <div className="container m-5">
                                                    <div className="row">
                                                        <div className="col  text-center">
                                                            <button onClick={updateuser} className="btn btn-success px-5 mr-5">Update</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


export default About;