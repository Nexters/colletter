import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const bannerList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="priority" />
            <EditButton />
        </Datagrid>
    </List>
);

export default bannerList;