import React, { Component } from 'react'
import 'core-js'
import logo from './logo.svg'

import { Layout, Menu, Breadcrumb, Icon, Card } from 'antd'
import { Row, Col } from 'antd'
import { List } from 'antd'

const data: string[] = Array<string>(10)
  .fill('')
  .map((_, i) => `Puzzle ${i + 1}`)

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

import './App.css'

class App extends Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed: Boolean) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={240} style={{ background: '#fff' }}>
          <Content style={{ padding: '21px' }}>
            <h2>PixelPerfect</h2>
            <p>
              Write some HTML and CSS that matches the target image. The puzzle
              isn't solved until your CSS is 100% pixel perfect.
            </p>
            <p>
              (Here,{' '}
              <a href="https://stackoverflow.com/">you might need this</a>.)
            </p>
          </Content>

          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item: String) => <List.Item>{item}</List.Item>}
          />
        </Sider>
        <Layout style={{ height: '100vh' }}>
          <Content style={{ margin: '0 16px' }}>
            <Row>
              <Col
                span={12}
                style={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Row style={{ flex: '1' }}>
                  <Col style={{ flex: '1', backgroundColor: 'white' }}>
                    <Row>
                      <Col>
                        <Card
                          title={[<Icon type="html5" />, 'HTML']}
                          bordered={false}
                          style={{ width: 300 }}
                        >
                          <p>Card content</p>
                          <p>Card content</p>
                          <p>Card content</p>
                        </Card>

                        <div style={{ display: 'flex' }}>
                          <h4>HTML</h4>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>EDITOR</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ flex: '1' }}>
                  <Col style={{ flex: '1', backgroundColor: 'white' }}>s</Col>
                </Row>
              </Col>
              <Col
                span={12}
                style={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Row style={{ flex: '1' }}>s</Row>
                <Row style={{ flex: '1' }}>s</Row>
                <Row style={{ flex: '1' }}>s</Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
