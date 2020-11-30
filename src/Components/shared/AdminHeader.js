import React from 'react'
import { Layout, Row, Col, Dropdown, Menu, Button } from 'antd'
import { LogoutOutlined } from "@ant-design/icons";
const { Content, Header } = Layout;
const AdminHeader = ({ user, logOut }) => {
    const dropDownMenu = (
        <Menu >
            <Menu.Item key="4" onClick={logOut}>
                <LogoutOutlined /> Logout
            </Menu.Item>
        </Menu>
    );
    return (
        <Header className="admin-header">
                <Row justify={"end"}>
                    <Col>
                        <Dropdown overlay={dropDownMenu} trigger={["click"]}>
                            <Button
                                type="button"
                                className="link-button"
                            >
                                {user.name}
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
    )
}

export default AdminHeader
