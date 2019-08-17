import React from 'react';
import { Create, TextInput, FileInput, FileField, SimpleForm, required } from 'react-admin';

const newsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="categoryType" validate={required()} />
            <TextInput source="content" />
            <TextInput source="name" />
            <TextInput source="uri" />
            <FileInput source="files" label="Related files">
                <FileField source="src" title="image" />
            </FileInput>
        </SimpleForm>
    </Create>
);

export default newsCreate;