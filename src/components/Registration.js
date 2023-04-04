import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { sub } from "date-fns/fp"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { adduser } from "../redux/actions";


function Registration() {

    const [gender, setgender] = useState("gender");
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const resetInputField = (e) => {
        e.preventDefault();
        formik.values.firstname = "";
        formik.values.lastname = "";
        formik.values.mobileno = "";
        formik.values.email = "";
        formik.values.dateofbirth = "";
        formik.values.pin = "";
        formik.values.gender = "";
        formik.values.city = "";
        formik.values.state = "";
        formik.values.password = "";
        formik.values.confirmpassword = "";
        formik.values.dbtype = "";
    }

    const numeric = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({

        initialValues: {

            firstname: '',
            lastname: '',
            mobileno: '',
            email: '',
            dateofbirth: '',
            pin: '',
            gender: '',
            city: '',
            state: '',
            password: '',
            confirmpassword: '',
            dbtype: '',
            flex1: '',
            flex2: ''

        },

        validationSchema: yup.object().shape({
            firstname: yup.string()
                .required('First name is required')
                .min(2, 'Too Short!')
                .max(20, 'Too Long!'),
            lastname: yup.string()
                .min(2, 'Too Short!')
                .max(20, 'Too Long!')
                .required('Last name is required'),
            email: yup.string()
                .email('Invalid email')
                .required('Email is required'),
            mobileno: yup.string()
                .matches(numeric, 'Invalid Mobile no')
                .required('Mobile number is required'),
            dateofbirth: yup.date()
                .max(sub({ years: 18 }, new Date()), "User must be over 18 years old")
                .required('Date Of Birth is required'),
            pin: yup.string()
                .matches(numeric, 'Invalid Pin')
                .required('Pin is required'),
            gender: yup.string()
                .required('Gender is required'),
            city: yup.string()
                .required('City is required'),
            state: yup.string()
                .required('State is required'),
            password: yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmpassword: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            dbtype: yup.string()
                .required('DB Type is required'),

        }),
        onSubmit: (values) => {

            dispatch(adduser(values));
            navigate('/home');
        }
    })








    return (
        <>
            <div className="row bg-secondary bg-gradient">
                <div className="col-lg-10 mx-auto m-3">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container-fluid">
                                <form id="contact-form "    >
                                    <div className="controls" />
                                    <div className="row ">
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="firstName">First Name </label>
                                            <input name="firstname" className="form-control" type="text" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} id="firstName" placeholder="First Name" />
                                            {formik.errors.firstname && formik.touched.firstname ?
                                                <div className="text-danger">{formik.errors.firstname}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="lastName">Last Name </label>
                                            <input name="lastname" type="text" id="lastName" value={formik.values.lastname} className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="LastName" />
                                            {formik.errors.lastname && formik.touched.lastname ?
                                                <div className="text-danger">{formik.errors.lastname}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="mobileno">Mobile No </label>
                                            <input name="mobileno" type="tel" id="mobileno" value={formik.values.mobileno} className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} maxLength="10" minLength="10" placeholder="mobileno" />
                                            {formik.errors.mobileno && formik.touched.mobileno ?
                                                <div className="text-danger">{formik.errors.mobileno}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="email">Email </label>
                                            <input name="email" type="email" id="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Email" />
                                            {formik.errors.email && formik.touched.email ?
                                                <div className="text-danger">{formik.errors.email}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="dateofbirth">Date Of Birth</label>
                                            <input name="dateofbirth" type="date" id="dateofbirth" className="form-control" value={formik.values.dateofbirth} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="dateofbirth" />
                                            {formik.errors.dateofbirth && formik.touched.dateofbirth ?
                                                <div className="text-danger">{formik.errors.dateofbirth}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="pin">Pin</label>
                                            <input name="pin" type="tel" id="pin" value={formik.values.pin} className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} maxLength="6" minLength="6" placeholder="pin" />
                                            {formik.errors.pin && formik.touched.pin ?
                                                <div className="text-danger">{formik.errors.pin}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">Gender</label>
                                            <div className="radio-btn-container">
                                                <div className="form-check-inline mr-5">
                                                    <div
                                                        className="radio-btn" name="gender"


                                                    >
                                                        <input
                                                            type="radio"
                                                            value="male"
                                                            name="gender"
                                                            onClick={() => {
                                                                setgender("male");
                                                            }}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            checked={gender === "male"}
                                                        />
                                                        Male
                                                    </div>
                                                </div>
                                                <div className="form-check-inline mx-5">
                                                    <div
                                                        className="radio-btn"


                                                    >
                                                        <input
                                                            type="radio"
                                                            value="female"
                                                            name="gender"
                                                            onClick={() => {
                                                                setgender("female");
                                                            }}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            checked={gender === "female"}
                                                        />
                                                        Female
                                                    </div>
                                                </div>
                                                <div className="form-check-inline ml-5">
                                                    <div
                                                        className="radio-btn"


                                                    >
                                                        <input
                                                            type="radio"
                                                            value="others"
                                                            name="gender"
                                                            onClick={() => {
                                                                setgender("others");
                                                            }}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            checked={gender === "others"}
                                                        />
                                                        Others
                                                    </div>
                                                </div>
                                            </div>
                                            {formik.errors.gender && formik.touched.gender ?
                                                <div className="text-danger">{formik.errors.gender}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">City</label>
                                            <select className="form-select w-90 m-auto"
                                                onChange={formik.handleChange} onBlur={formik.handleBlur} name="city"
                                                value={formik.values.city}
                                            >
                                                <option value="">-select-</option>
                                                <option value="chennai">Chennai</option>
                                                <option value="cochin">Cochin</option>
                                                <option value="hydrabad">Hydrabad</option>
                                                <option value="banglore">Banglore</option>
                                            </select>
                                            {formik.errors.city && formik.touched.city ?
                                                <div className="text-danger">{formik.errors.city}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">State</label>
                                            <select className="form-select w-90 m-auto"
                                                onChange={formik.handleChange} onBlur={formik.handleBlur} name="state"
                                                value={formik.values.state}
                                            >
                                                <option value="">-select-</option>
                                                <option value="taminadu">Tamil nadu</option>
                                                <option value="kerala">Kerala</option>
                                                <option value="telungana">Telungana</option>
                                                <option value="karnataka">Karnataka</option>
                                            </select>
                                            {formik.errors.state && formik.touched.state ?
                                                <div className="text-danger">{formik.errors.state}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="password">Password </label>
                                            <input name="password" className="form-control" type="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Password" />
                                            {formik.errors.password && formik.touched.password ?
                                                <div className="text-danger">{formik.errors.password}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="confirmpassword">Confirm password </label>
                                            <input name="confirmpassword" className="form-control" type="password" id="confirmPassword" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Confirm Password" />
                                            {formik.errors.confirmpassword && formik.touched.confirmpassword ?
                                                <div className="text-danger">{formik.errors.confirmpassword}</div>
                                                : null
                                            }
                                        </div>
                                        <div className="col-md-4 pl-0 mt-4 p-3">
                                            <label className="form-label" htmlFor="form_name">DB Type</label>
                                            <select className="form-select w-90 m-auto"
                                                onChange={formik.handleChange} onBlur={formik.handleBlur} name="dbtype"
                                                value={formik.values.dbtype}
                                            >
                                                <option value="">-select-</option>
                                                <option value="Nova">SQL</option>
                                                <option value="Premia">Oracle</option>

                                            </select>
                                            {formik.errors.dbtype && formik.touched.dbtype ?
                                                <div className="text-danger">{formik.errors.dbtype}</div>
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="col-md-12">
                                            <div className="container m-5">
                                                <div className="row p-0">
                                                    <div className="col  text-center">
                                                        <button type={"submit"} onClick={formik.handleSubmit} className="btn btn-success px-5 mr-5">Register</button>
                                                        <button onClick={() => resetInputField()} className="btn btn-primary px-5  mr-5">Reset</button>
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

export default Registration;

