import { Col, DatePicker, Form, Input, Modal, Radio, Row, Select } from 'antd'
import React from 'react'

const AdviserForm = ({ visible, setVisible, form, onSave, edit }) => {
    const handleCancel = () => {
        setVisible(false)
    }
    return (


        <Modal
            title="Asesor"
            visible={visible}
            onCancel={handleCancel}
            okText="Guardar"
            cancelText="Cancelar"
            width="50%"
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        onSave(values, edit);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form form={form} name="adviser" layout="vertical">
                <Form.Item noStyle name={"id"}><Input type="hidden"/></Form.Item>
                <Row gutter={[5, 5]}>
                    <Col xs={24} md={8} >
                        <Form.Item name={"name"} label={"Nombre"}
                            rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item name={"cedula"} label={"Cédula"}
                            rules={[
                                { required: true, message: 'Por favor ingrese la cedula' }]}>
                            <Input type="number" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item name={"phone"} label={"Teléfono"}
                            rules={[{ required: true, message: 'Por favor ingrese el telefono' }]}>
                            <Input type="number" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[5, 5]}>
                    <Col xs={24} md={8} >
                        <Form.Item name={"birthday"} label={"Fecha de nacimiento"} rules={[{ required: true, message: 'Por favor ingrese su fecha de nacimiento' }]}>
                            <DatePicker placeholder="Seleccione" format={"YYYY-MM-DD"} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item name={"gender"} label={"Genero"}
                            rules={[{ required: true, message: 'Por favor seleccione el genero' }]}>
                            <Radio.Group>
                                <Radio value="f">Femenino</Radio>
                                <Radio value="m">Masculino</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item name={"client"} label={"Cliente"} rules={[{ required: true, message: 'Por favor ingrese el cliente' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[5, 5]}>
                    <Col xs={24} md={8} >
                        <Form.Item name={"headquarter"} label={"Sede"} rules={[{ required: true, message: 'Por favor ingrese la sede' }]}>
                            <Select>
                                <Select.Option value="Ruta N">Ruta N</Select.Option>
                                <Select.Option value="Puerto Seco">Puerto Seco</Select.Option>
                                <Select.Option value="Buro">Buro</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}

export default AdviserForm
