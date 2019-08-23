import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Table, Form, Button, Row, Col} from 'react-bootstrap';
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

const LoginContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 100px auto 0px auto;
  flex-direction: column;
  width:1280px;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://colletter.com/api',
            registerNews: [],
            bLogin: false
        };
    }

    componentWillMount() {
        $('#btnShowPopup').hide();

        axios.get(this.state.url + `/admin/news/request`).then(
            r => {
                this.setState({
                    registerNews: r.data
                });
            }
        );
    }

    checkLogin() {
        let id = $('#email').val();
        let password = $('#password').val();

        if (id === 'ubuntu' && password === 'colletter') {
            this.setState({
                bLogin: true
            });
        }
    }

    requestNews(news) {
        $('#uri').val(news.uri);
        $('#category').val(news.category.id);
        $('#description').val(news.description);
    }

    register(e) {
        e.preventDefault();
        if (!$('#description').val()) {
            $('#description').focus();
            alert('설명을 입력해주세요.');
        } else if (!$('#uri').val()) {
            $('#uri').focus();
            alert('링크를 입력해주세요.');
        } else {

            const frm = new FormData();
            frm.append('categoryId', $('#category').val());
            frm.append('content', $('#description').val());
            frm.append('uri', $('#uri').val());
            frm.append('name', $('#name').val());
            frm.append('image', $('#imageName').val());
            frm.append('imageFile', document.getElementById("image").files[0]);

//            const params = JSON.stringify({
//                "categoryId": $('#category').val(),
//                "description": $('#description').val(),
//                "uri": $('#uri').val(),
//                "name": $('#name').val(),
//                "image": $('#imageName').val(),
//            });
            const url = this.state.url + '/admin/news';
            axios({
                method: 'post',
                url,
                data: frm,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(
                r => {
                    alert('등록완료');
                    window.location.reload();
                }
            );
        }
    }

    render() {

        let num = 0;
        return (

            <div className="App">
                {
                    (this.state.bLogin === true) ? (
                        <Container>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>카테고리</th>
                                    <th>설명</th>
                                    <th>uri</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.registerNews.map((news) => {

                                    num++;
                                    return <tr key={news.id} onClick={this.requestNews.bind(this, news)}>
                                        <td>{num}</td>
                                        <td>{news.category.nameKR}</td>
                                        <td>{news.description}</td>
                                        <td>{news.uri}</td>
                                    </tr>
                                })}

                                </tbody>
                            </Table>

                            <Form>
                                <Form.Group as={Row} controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        카테고리
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" id="category"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        설명
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" id="description"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        이미지 이름
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" id="imageName"/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        이미지
                                    </Form.Label>
                                    <Col sm="10">
                                        <input type="file" id="image" title=""/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        NAME
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" id="name"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        URI
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" id="uri"/>
                                    </Col>
                                </Form.Group>

                                <Button variant="primary" onClick={this.register.bind(this)}>
                                    Submit
                                </Button>
                            </Form>

                        </Container>
                    ) : <LoginContainer>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" id="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>
                            <Button variant="primary" onClick={this.checkLogin.bind(this)}>
                                Submit
                            </Button>
                        </Form>
                    </LoginContainer>
                }
            </div>
        );
    }
}

export default App;
