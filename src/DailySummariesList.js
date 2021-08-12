import { ListGroup } from "react-bootstrap"
import DailySummaryItem from "./DailySummaryItem"

const DailySummariesList = () => {
  return (
    <ListGroup defaultActiveKey="1">
      <DailySummaryItem>
        Sunday, Feb. 10, 2013
      </DailySummaryItem>
      <DailySummaryItem>
        Monday, Feb. 11, 2013
      </DailySummaryItem>
    </ListGroup>
  )
}

export default DailySummariesList
