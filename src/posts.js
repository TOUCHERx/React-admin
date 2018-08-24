import React from 'react';
import { Create, Filter, Edit, List, Datagrid, TextField } from 'react-admin';
import { TextInput } from 'react-admin';
import { SimpleForm } from 'react-admin';
import { EditButton } from 'react-admin';
import { SelectInput, ReferenceInput } from 'react-admin';


export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="date" />
            <TextField source="income" />
            <TextField source="expense" />
             <EditButton/>
        </Datagrid>
    </List>
);


export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="date" />
            <TextInput source="income" />
            <TextInput source="expense" />
        </SimpleForm>
    </Create>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="date" />
            <TextInput source="income" />
            <TextInput source="expense" />
        </SimpleForm>
    </Edit>
);

export const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Date" source="date"  allowEmpty>
            <SelectInput optionText="date" />
        </ReferenceInput>
    </Filter>
);