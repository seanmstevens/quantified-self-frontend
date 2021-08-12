import { Nav } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"

const Navigation = (props) => {
  return (
    <Nav variant="pills" activeKey={props.location.pathname} className="mt-5 mb-5">
      <Nav.Item>
        <Nav.Link as={Link} to="/summaries" eventKey="/summaries">
          Summaries
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/activities" eventKey="/activities">
          Activities
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/places" eventKey="/places">
          Places
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default withRouter(Navigation)
