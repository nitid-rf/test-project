import { Layout, Tabs } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();

  const items = [
    { key: "page1", label: "Tab 1" },
    { key: "page2", label: "Tab 2" },
    { key: "page3", label: "Tab 3" },
  ];

  const onTabChange = (key: string) => {
    navigate(`/${key}`);
  };

  return (
    <Header
      style={{
        background: "#001529",
        padding: "0 16px",
        height: "auto",
      }}
    >
      <h1 style={{ color: "#fff", margin: 0, lineHeight: "64px" }}>Header</h1>

      <Tabs
        defaultActiveKey="page1"
        items={items}
        onChange={onTabChange}
        tabBarStyle={{
          margin: 0,
          color: "#fff",
        }}
      />
    </Header>
  );
};

export default AppHeader;
