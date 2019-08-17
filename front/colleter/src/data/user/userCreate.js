import React from 'react';
import { Create, TextInput, SimpleForm, required } from 'react-admin';

export const userCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
        </SimpleForm>
    </Create>
);
