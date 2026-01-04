import { Layout } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background: '#001529', color: '#fff', textAlign: 'center', padding: 0 }}>
      <h1 style={{ color: '#fff' }}>Header</h1>
    </Header>
  );
};

export default AppHeader;