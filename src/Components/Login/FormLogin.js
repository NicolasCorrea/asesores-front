import React from 'react'
import { Form, Input, Button } from 'antd';



const FormLogin = ({onFinish, onFinishFailed}) => {


    return (
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Por favor ingrese su username' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
            </Button>
            </Form.Item>
        </Form>
    )
}

export default FormLogin
