import React, { useState, useEffect } from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, callgetapi } from "../redux/actions";


function Home() {

    let dispatch = useDispatch();
    const { users } = useSelector((state) => state.data);

    const handledelete = (id) => {
        if (window.confirm("Are you sure want to delete the user ?")) {
            dispatch(deleteuser(id));
        }
    };

    const [total, settotal] = useState("");
    const [page, setpage] = useState(1);
    const [postperpage, setpostperpage] = useState(5);
    const navigate = useNavigate();


    const edituser = ({ pkId, firstname, lastname, mobileno, email, dateofbirth, pin, gender, city, state, password, confirmpassword, dbtype }) => {
        localStorage.setItem('pkId', pkId)
        localStorage.setItem('firstname', firstname)
        localStorage.setItem('lastname', lastname)
        localStorage.setItem('mobileno', mobileno)
        localStorage.setItem('email', email)
        localStorage.setItem('dateofbirth', dateofbirth)
        localStorage.setItem('pin', pin)
        localStorage.setItem('gender', gender)
        localStorage.setItem('city', city)
        localStorage.setItem('state', state)
        localStorage.setItem('password', password)
        localStorage.setItem('confirmpassword', confirmpassword)
        localStorage.setItem('dbtype', "Nova")
        navigate('/about');
    }

    useEffect(() => {
        dispatch(callgetapi());
        settotal(users.length);
    }, [dispatch, users.length]);

    const indexoflastpage = page * postperpage;
    const indexoffirstpage = indexoflastpage - postperpage;
    const currentposts = users.slice(indexoffirstpage, indexoflastpage);

    const onShowSizeChange = (pageSize) => {
        setpostperpage(pageSize);
    };




    return (
        <Table celled selectable >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Firstname</Table.HeaderCell>
                    <Table.HeaderCell>Lastname</Table.HeaderCell>
                    <Table.HeaderCell>Mobileno</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Dateofbirth</Table.HeaderCell>
                    <Table.HeaderCell>Pin</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                    <Table.HeaderCell>Confirmpassword</Table.HeaderCell>
                    <Table.HeaderCell>DB Type</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    currentposts.map(data => {
                        return (
                            <Table.Row key={data.pkId}>
                                <Table.Cell>{data.firstname}</Table.Cell>
                                <Table.Cell>{data.lastname}</Table.Cell>
                                <Table.Cell>{data.mobileno}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.dateofbirth}</Table.Cell>
                                <Table.Cell>{data.pin}</Table.Cell>
                                <Table.Cell>{data.gender}</Table.Cell>
                                <Table.Cell>{data.city}</Table.Cell>
                                <Table.Cell>{data.state}</Table.Cell>
                                <Table.Cell>{data.password}</Table.Cell>
                                <Table.Cell>{data.confirmpassword}</Table.Cell>
                                <Table.Cell>{"SQL"}</Table.Cell>
                                <Table.Cell>    <Button animated='vertical' onClick={() => handledelete(data.pkId)} >
                                    <Button.Content hidden>Delete</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='trash alternate' />
                                    </Button.Content>
                                </Button>
                                    <Button animated='vertical' onClick={() => edituser(data)}>
                                        <Button.Content hidden>Edit</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='edit' />
                                        </Button.Content>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='12'>

                        <Pagination
                            onChange={(value) => setpage(value)}
                            pageSize={postperpage}
                            total={total}
                            current={page}
                            showSizeChanger
                            showQuickJumper
                            onShowSizeChange={onShowSizeChange}
                        />

                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>

        </Table>
    )
}


export default Home;


