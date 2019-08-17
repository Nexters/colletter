import React from 'react';
import { Edit, TextInput, FileInput, FileField, SimpleForm, required } from 'react-admin';

const bannerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="priority" />
            <FileInput source="files" label="Related files">
                <FileField source="src" title="image" />
            </FileInput>
        </SimpleForm>
    </Edit>
);

export default bannerEdit;