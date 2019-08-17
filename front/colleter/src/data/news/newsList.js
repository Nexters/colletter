import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const newsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="categoryType" />
            <TextField source="content" />
            <TextField source="name" />
            <TextField source="uri" />
            <EditButton />
        </Datagrid>
    </List>
);

export default newsList;