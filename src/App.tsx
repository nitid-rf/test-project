import React from 'react';
import { Layout, Typography, Button } from 'antd';
// สไตล์พื้นฐานของ antd จะถูกรวมไว้ แต่คุณอาจต้องการคง App.css ไว้สำหรับสไตล์ที่ไม่ใช่ antd เช่น logo
import './App.css'; 
import logo from './logo.svg';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Layout className="App" style={{ minHeight: '100vh', backgroundColor: '#282c34' }}>
      
      {/* ส่วนหัว (Header) ของ Ant Design */}
      <Header 
        className="App-header" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: 'auto', 
          padding: '20px 0', 
          backgroundColor: '#282c34' // ให้ Header มีสีเดียวกับ Content เพื่อให้ดูกลมกลืน
        }}
      >
        <img 
          src={logo} 
          className="App-logo" 
          alt="โลโก้" 
          style={{ height: '10vmin', pointerEvents: 'none', marginRight: '20px' }} 
        />
        <Title level={1} style={{ color: 'white', margin: 0 }}>
          Test React use Antd Library
        </Title>
      </Header>

      {/* ส่วนเนื้อหา (Content) ของ Ant Design */}
      <Content style={{ 
        textAlign: 'center', 
        padding: '50px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start' 
      }}>
        
        {/* ใช้ Paragraph สำหรับข้อความแทน <p> */}
        <Paragraph style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px' }}>
          แก้ไข <code>src/App.tsx</code> แล้วบันทึกเพื่อโหลดซ้ำ
        </Paragraph>

        {/* ใช้ Button สำหรับลิงก์แทน <a> */}
        <Button 
          type="primary" // กำหนดให้เป็นปุ่มสีหลัก (Primary)
          size="large" // กำหนดให้ปุ่มมีขนาดใหญ่
          href="https://reactjs.org" // ยังคงเป็นลิงก์ไปยังเว็บไซต์ React
          target="_blank"
          rel="noopener noreferrer"
        >
          เรียนรู้ React
        </Button>
        
      </Content>
    </Layout>
  );
}

export default App;