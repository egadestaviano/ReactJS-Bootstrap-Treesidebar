import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <NavbarComponents />
      <Container fluid className="mt-2">
        <Row>
          <Col xl={2} lg={3} className="border-end pe-0">
            <Sidebar />
          </Col>
          <Col xl={10} lg={9} className="ps-3">
            <div className="bg-body-tertiary p-3 rounded shadow-sm">
              <h4>Content</h4>
              {/* Tambahkan konten lainnya di sini */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
