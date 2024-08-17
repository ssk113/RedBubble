import { subCategoryConstants } from "../../constants/tableConstants";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const SubCategoryTable = () => {
  const { subCategories } = useSelector((state) => state.categorySlice);
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
            {subCategoryConstants.map((heading, index) => {
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
          {subCategories.map((values) => {
            return (
              <TableRow
                key={values.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {values.id}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {values.name}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-poppins py-2">
                    {values.imageUrl ? "True" : "False"}
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

export default SubCategoryTable;
