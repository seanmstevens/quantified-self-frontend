import { Container, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand><strong>QuantifiedSelf</strong></Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;