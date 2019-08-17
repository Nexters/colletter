import React from 'react';
import { Create, TextInput, FileInput, FileField, SimpleForm, required } from 'react-admin';

const bannerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="priority" />
            <FileInput source="files" label="Related files">
                <FileField source="src" title="image" />
            </FileInput>
        </SimpleForm>
    </Create>
);

export default bannerCreate;