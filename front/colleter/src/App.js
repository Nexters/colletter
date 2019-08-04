import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './views/home/home';
import login from './views/login/login';
import mypage from './views/mypage/mypage';
import './App.css';
import styled from 'styled-components';

class App extends React.Component {s
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route exact path="/" component={login} />
                        <Route exact path="/home" component={home} />
                        <Route exact path="/mypage" component={mypage} />
                    </div>
                </Router>
            </div>
        )
    };
}

export default App;
