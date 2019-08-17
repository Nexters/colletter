import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { bannerList } from '../../data/banner/banner';
import { newsList } from '../../data/news/news';
import { requestList } from '../../data/news/request';
// import { UserList } from '../../data/user/user';
import user from '../../data/user';
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// const dataProvider = jsonServerProvider("https://colletter.com/v2/api-docs/admin");

class admin extends React.Component {
    render() {
        return(
            <Admin dataProvider={dataProvider}>
                <Resource name='users' {...user} />
                <Resource name='banner' list={bannerList} />
                <Resource name='news' list={newsList} />
                <Resource name='request' list={requestList} />
            </Admin>
        )
    }
}

export default admin;