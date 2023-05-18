import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const TableComponent = () => {
  const [orders, setOrders] = useState([1, 2, 3, 4, 5, 6, 7]);
  const tableTitles = ["Date", "Order ID", "Delivery fee", "Status"];

  return (
    <View>
      <Text>Order history</Text>
      <Table>
        <Row data={tableTitles} />
        <TableWrapper>
          {/* <Rows data={orders} /> */}
        </TableWrapper>
      </Table>
    </View>
  );
};

export default TableComponent;
