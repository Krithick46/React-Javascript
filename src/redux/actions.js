import * as types from "./actiontype";
import axios from "axios";


const getusers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userdeleted = () => ({
    type: types.DELETE_USER,
});

const useradded = () => ({
    type: types.ADD_USER,
});

const useredited = () => ({
    type: types.EDIT_USER,
});



export  const callgetapi = () => {
    return function (dispatch) {
    axios.post('http://localhost:91/api/NovaCRMUserMaster/getuserdetails', {
         Actiontype: "view"
     })
         .then(resp => {
            dispatch(getusers(resp.data));
             console.log(resp.data);
         })
         .catch(err => {
             console.log(err)
         })
        };
 }

 export  const deleteuser = (id) => {
    return function (dispatch) {
        axios.post('http://localhost:91/api/NovaCRMUserMaster/getuserdelete', {         
               pkId: id
             })
         .then(resp => {
            dispatch(userdeleted());
            dispatch(callgetapi());
             console.log(resp.data);
         })
         .catch(err => {
             console.log(err)
         })
        };
 }


 export  const adduser = (user) => {
    return function (dispatch) {        
        axios.post('http://localhost:91/api/NovaCRMUserMaster/getuserregistration', user,user.Actiontype="Save"
        )
        
            .then(result => {
                console.log(result.data)
                dispatch(useradded()); 
                dispatch(callgetapi());              
            })
            .catch(err => {
                console.log(err)

            })
        };
 }


 export  const edituser = (user) => {
    return function (dispatch) {        
        axios.post('http://localhost:91/api/NovaCRMUserMaster/getuserregistration', user,user.Actiontype="update"
        )
        
            .then(result => {
                console.log(result.data)
                dispatch(useredited()); 
                dispatch(callgetapi());              
            })
            .catch(err => {
                console.log(err)

            })
        };
 }