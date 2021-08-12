import { ListGroup } from "react-bootstrap"

const DailySummaryItem = (props) => {
  return (
    <ListGroup.Item action>
      {props.children}
    </ListGroup.Item>
  )
}

export default DailySummaryItem
