import React from 'react';
import { Edit, TextInput, FileInput, FileField, SimpleForm, required } from 'react-admin';

const newsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="categoryType" validate={required()} />
            <TextInput source="content" />
            <TextInput source="name" />
            <TextInput source="uri" />
            <FileInput source="files" label="Related files">
                <FileField source="src" title="image" />
            </FileInput>
        </SimpleForm>
    </Edit>
);

export default newsEdit;