import React from 'react';
import { Create, TextInput, FileInput, FileField, SimpleForm, required } from 'react-admin';

const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <FileInput source="files" label="Related files">
                <FileField source="src" title="title" />
            </FileInput>
            <TextInput source="username" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Create>
);

export default UserCreate;