import { HiOutlineDotsVertical } from "react-icons/hi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { productTypeConstants } from "../../constants/tableConstants";
import { useSelector } from "react-redux";
const ProductTypeTable = () => {
  const { productTypes } = useSelector((state) => state.productSlice);

  return (
    <TableContainer component={Paper} sx={{ height: "100%" }}>
      <Table aria-label="simple table" size="small">
        <TableHead
          sx={{
            backgroundColor: "#F3F4F6",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <TableRow>
            {productTypeConstants.map((heading, index) => {
              return (
                <TableCell key={index} style={{ fontWeight: 900 }}>
                  <span className=" flex justify-center items-center gap-1 font-poppins py-1 cursor-pointer">
                    <p>{heading}</p>
                  </span>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {productTypes.map((val) => {
            return (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={val.id}
              >
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {val.id}
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {val.productName}
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {val.productId}
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {val.type}
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {val.price}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-poppins font-bold py-2">
                    <HiOutlineDotsVertical className="text-base cursor-pointer" />
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTypeTable;
