import React from 'react';
import { List, Datagrid, TextField, EmailField, CreateButton, EditButton, SimpleForm, TextInput } from 'react-admin';

const UserList = ({ classes, ...props }) => (
    <List {...props} sort={{ field: 'id', order: 'ASC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default UserList;