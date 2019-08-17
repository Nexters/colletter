import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const bannerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="priority" />
        </Datagrid>
    </List>
);