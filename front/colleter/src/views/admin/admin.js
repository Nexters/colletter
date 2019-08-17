import React from 'react';
import { Admin, Resource,jsonServerRestClient } from 'admin-on-rest';
import user from '../../data/user';
import banner from '../../data/banner';
import news from '../../data/news';

class admin extends React.Component {
    render() {
        return(
            <Admin restClient={jsonServerRestClient('https://colletter.com/v2/api-docs/admin')}>
                <Resource name='users' {...user} />
                <Resource name='banner' {...banner} />
                <Resource name='news' />
            </Admin>
        )
    }
} 

export default admin;