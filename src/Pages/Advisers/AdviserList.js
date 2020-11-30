import { Button, Space, Table } from 'antd';
import React from 'react'


const AdviserList = ({ advisers, onDelete, onEdit }) => {
    const columns = [
        {
            title: "Nombre",
            dataIndex: "name",
            defaultSortOrder: "descend",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Cédula",
            dataIndex: "cedula"
        },
        {
            title: "Telefono",
            dataIndex: "phone"
        },
        {
            title: "Cédula",
            dataIndex: "cedula"
        },
        {
            title: "Fecha de Nacimiento",
            dataIndex: "birthday"
        },
        {
            title: "Edad",
            dataIndex: "age"
        },
        {
            title: "Género",
            dataIndex: "gender"
        },
        {
            title: "Cliente",
            dataIndex: "client"
        },
        {
            title: "Sede",
            dataIndex: "headquarter"
        },
        {
            title: "Quien lo registro",
            dataIndex: "user",
            render(text, record){
                return text.name
            }
        },
        {
            title: "Acciones",
            align: "right",
            render(text, record) {
                return (
                    <>
                        <Space size="small">
                            <Button
                                type="primary"
                                onClick={() => {
                                    onEdit(record);
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => {
                                    onDelete(record);
                                }}
                                type="primary"
                                danger
                            >
                                Delete
                            </Button>
                        </Space>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Table size="small" columns={columns} rowKey="id" dataSource={advisers} />
        </>
    );
}

export default AdviserList
