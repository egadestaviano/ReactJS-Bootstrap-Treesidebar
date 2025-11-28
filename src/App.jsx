import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import Sidebar from "./components/Sidebar.jsx";
import BreadcrumbNavigation from "./components/BreadcrumbNavigation.jsx";
import TreeCheckbox from "./components/TreeCheckbox.jsx";

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
              <BreadcrumbNavigation />
              <Tabs defaultActiveKey="content" id="app-tabs" className="mb-3">
                <Tab eventKey="content" title="Content">
                  <h4>Main Content Area</h4>
                  <p>This is the main content area where you can add your application content.</p>
                </Tab>
                <Tab eventKey="tree" title="Tree View">
                  <TreeCheckbox />
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;