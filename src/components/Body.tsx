import { Routes, Route } from 'react-router-dom';
import Page1 from '@Pages/Page1';
import Page2 from '@Pages/Page2';
import Page3 from '@Pages/Page3';

const Body = () => {
  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
};

export default Body;