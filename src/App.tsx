import { Layout } from "antd";
import "antd/dist/reset.css";
import Header from "@Components/Header";
import Body from "@Components/Body";
import Footer from "@Components/Footer";

const { Content } = Layout;

function App() {
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Content style={{ flex: 1 }}>
        <Body />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
