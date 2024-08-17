import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { MdAddToPhotos } from "react-icons/md";
import ProductsTable from "./ProductsTable";
import AddProductModal from "./AddProductModal";
import useFetchProducts from "../../hooks/useFetchProducts";
import Error from "../Error/Error";
import PageLoader from "../Loaders/PageLoader";

const Products = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  // invoking the use fetch products hook to get the product
  useFetchProducts(setError, setLoader);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      {error ? (
        <Error message={"Error While Fetching Products"} />
      ) : (
        <>
          {loader ? (
            <PageLoader />
          ) : (
            <>
              {showModal && <AddProductModal showModal={setShowModal} />}
              <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
                <div className="  text-xl flex justify-between items-center">
                  <div className=" flex justify-center items-center text-4xl gap-4 text-pink-500">
                    <h1>Our Products</h1>
                    <button
                      className="primary-linear-bg text-white px-3 py-1 rounded-md"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <MdAddToPhotos className="text-3xl" />
                    </button>
                  </div>
                  <div className="flex justify-center items-center gap-4 rounded-md font-poppins">
                    <TablePagination
                      component="div"
                      count={100}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </div>
                </div>

                <div>
                  <div className=" mt-5 flex flex-col min-[900px]:flex-row justify-center gap-4 min-[900px]:gap-0  min-[900px]:justify-between items-center ">
                    <div className="flex justify-start items-center bg-gray-100 px-2 py-1 w-full min-[900px]:w-[50%] rounded-md">
                      <CgSearch className="text-2xl" />
                      <input
                        type="text"
                        placeholder="Search any product by name"
                        className=" px-2 py-2 bg-gray-100 w-full outline-none"
                      />
                    </div>
                    <div className=" flex gap-4 justify-center items-center">
                      <select
                        className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md"
                        defaultValue={"Status"}
                      >
                        <option>category</option>
                      </select>
                      <select
                        className=" px-3 py-3 flex justify-center items-center gap-2 bg-gray-100 rounded-md"
                        defaultValue={"Sort"}
                      >
                        <option>Sub Category</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[calc(100vh-18rem)] m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
                <ProductsTable />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Products;
