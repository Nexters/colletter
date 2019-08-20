import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap';
import styled from 'styled-components';
import jQuery from "jquery";
import axios from 'axios';

const $ = jQuery;


const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 180px auto 0px auto;
  flex-direction: column;
  width:1280px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://15.164.112.144:8080',
            registerNews: []
        };
    }

    componentWillMount() {
        $('#btnShowPopup').hide();

        axios.get(this.state.url + `/admin/news`).then(
            r => {
                this.setState({
                    registerNews: r.data
                });
            }
        );

    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default App;
