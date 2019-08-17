import React from 'react';
import { List, Datagrid, TextField, EmailField, CreateButton, EditButton, SimpleForm, TextInput } from 'react-admin';

export const UserList = props => (
    <div>
    <List {...props} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
    </div>
);

// export default admin;