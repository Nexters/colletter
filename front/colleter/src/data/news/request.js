import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const requestList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="categoryType" />
            <TextField source="content" />
            <TextField source="uri" />
        </Datagrid>
    </List>
);