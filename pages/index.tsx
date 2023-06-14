import Link from "next/link";
import { Card, ListGroup, Container, Button, Alert } from "react-bootstrap";
import Header from "./components/Header";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Index() {
  return (
    <>
      <Header />
    
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
      You template is working fine! Lets start codeing
      </p>
      <hr />
      <p className="mb-0">
        If you need help contact me my email : rafhaelxd@gmai.com
      </p>
    </Alert>
      

    </>
  );
}
