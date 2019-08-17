import React from 'react';
import { Edit, TextInput, FileInput, FileField, SimpleForm, required } from 'react-admin';

const UserEdit = props => (
    <Edit {...props}>
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
    </Edit>
);

export default UserEdit;