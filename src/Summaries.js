import { Col, Row, Container } from "react-bootstrap"
import DailySummariesList from "./DailySummariesList"
import SummaryDetailPane from "./SummaryDetailPane"

const Summaries = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} sm={5} md={4} lg={3}>
          <DailySummariesList />
        </Col>
        <Col>
          <SummaryDetailPane /></Col>
      </Row>
    </Container>
  )
}

export default Summaries
