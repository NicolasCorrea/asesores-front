import React, { useEffect, useState } from 'react'
import AdviserList from './AdviserList'
import API from './../../api'
import { Button, Form } from 'antd';
import AdviserForm from './AdviserForm';
import moment from "moment";

const { useForm } = Form;

const Adviser = () => {
    const [advisers, setAdvisers] = useState();
    const [currentAdviser, setCurrentAdviser] = useState({});
    const [edit, setEdit] = useState(false);
    const [visibleForm, setVisibleForm] = useState(false)

    const [form] = useForm();

    const getAdvisers = () => {
        API.get("adviser").then(({ data }) => {
            setAdvisers(data.advisers);
        })
    }
    useEffect(() => {
        getAdvisers();
    }, [])

    const handleSave = (adviser, edit) => {
        adviser.birthday = adviser.birthday?.format("Y-MM-DD")
        let request = null;
        if (!edit) {
            request = API.post("adviser", adviser)
        } else {
            request = API.put("adviser/"+adviser.id, adviser)
        }
        request.then(({ data }) => {
            form.resetFields();
            getAdvisers();
            setVisibleForm(false);
        }).catch(console.log)
    }

    const handleCreate = () => {
        setEdit(false)
        setVisibleForm(true);
    }
    const handleDelete = (adviser) => {
        console.log(adviser)
        API.delete("adviser/"+adviser.id).then(({data}) => {
            getAdvisers();
        })
    }
    const handleEdit = (adviser) => {
        console.log(adviser)
        adviser.birthday = moment(adviser.birthday)
        form.setFieldsValue(adviser)
        setCurrentAdviser(adviser)
        setVisibleForm(true);
        setEdit(true)
    }

    return (
        <>
            <Button type="primary" onClick={handleCreate}>Añadir Asesor</Button>
            <hr />
            <AdviserList advisers={advisers} onDelete={handleDelete} onEdit={handleEdit} />
            <AdviserForm visible={visibleForm} form={form} setVisible={setVisibleForm} edit={edit} adviser={currentAdviser} onSave={handleSave} />
        </>
    )
}

export default Adviser
