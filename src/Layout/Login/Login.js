import React, { useEffect } from 'react';
import { Card, Col, Layout, Modal, Row } from 'antd';
import FormLogin from '../../Components/Login/FormLogin';
import axios from 'axios';

const { Content } = Layout;

const Login = () => {
    useEffect(() => {
        if (localStorage.getItem("jwt-token")) {
            window.location.replace("/");
        }
    }, [])
    const handleFinish = values => {
        axios.post(process.env.REACT_APP_API_URL+"/api/auth/login", values).then(({ data }) => {
            localStorage.setItem("jwt-token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            window.location.replace("/");
        }).catch(({response}) => {
            if (response.data?.error === "Unauthorized") {
                Modal.warning({
                    content: "las credenciales ingresadas no coinciden con ningun usuario registrado"
                })
            }
            if (response.data?.error === "InactiveUser") {
                Modal.warning({
                    content: "Al parecer el usuario con el que esta intentando ingresar se encuentra inactivo"
                })
            }
        })
    };

    const handleFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Layout className="layout">
            <Content className="login_content">
                <Row justify="space-around" align="middle" style={{ height: "100%" }}>
                    <Col xs={24} md={8}>
                        <Card style={{ width: "100%", textAlign: "center" }}>
                            <FormLogin onFinish={handleFinish} onFinishFailed={handleFinishFailed} />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Login
