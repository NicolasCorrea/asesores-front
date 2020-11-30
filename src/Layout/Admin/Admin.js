import React, { useEffect, useState } from 'react'
import { Layout, Row, Col } from 'antd'
import AdminHeader from '../../Components/shared/AdminHeader';
import Adviser from '../../Pages/Advisers/Adviser';
const { Content, Header } = Layout;

const Admin = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])

    const logOut = () => {
        localStorage.clear();
        window.location.replace("/login")
    }

    
    return (
        <Layout className="layout">
            <AdminHeader logOut={logOut} user={user}/>
            <Content >
                <Row className="admin-row-content">
                    <Col span={24} style={{height:"100%",height:"100%", background: "#fff", paddingTop: "20px", paddingLeft: "3%", paddingRight: "3%"}}>
                        <Adviser />
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Admin
