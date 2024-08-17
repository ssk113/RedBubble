import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { MdAddToPhotos } from "react-icons/md";
import SubCategoryTable from "./SubCategoryTable";
import SubCategoryModal from "./SubCategoryModal";
import Error from "../Error/Error";
import useFetchSubCategories from "../../hooks/useFetchSubCategories";
import PageLoader from "../Loaders/PageLoader";

const SubCategory = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  // invoking use fetch subcategories hook to get all the subcategories
  useFetchSubCategories(setError, setLoader);

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
        <Error message={"Error while fetching Subcategories !"} />
      ) : (
        <>
          {loader ? (
            <PageLoader />
          ) : (
            <>
              {showModal && <SubCategoryModal showModal={setShowModal} />}
              <div className="w-full m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
                <div className="  text-xl flex flex-col md:flex-row justify-between items-center">
                  <div className=" flex justify-center items-center text-4xl gap-4 text-pink-500">
                    <h1>Sub Categories</h1>
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
                    <div className="flex justify-start items-center bg-gray-100 px-2 py-1 w-full md:w-[50%] rounded-md">
                      <CgSearch className="text-2xl" />
                      <input
                        type="text"
                        placeholder="Search Any subcategory by name"
                        className=" px-2 py-2 bg-gray-100 w-full outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[calc(100vh-18rem)] m-auto mt-5 px-4 py-5 rounded-md bg-white font-poppins">
                <SubCategoryTable />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SubCategory;
