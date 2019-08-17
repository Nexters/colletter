import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const newsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="categoryType" />
            <TextField source="name" />
            <TextField source="content" />
            <TextField source="uri" />
            <TextField source="imgSrc" />
        </Datagrid>
    </List>
);