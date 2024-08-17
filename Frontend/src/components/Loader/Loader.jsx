import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div className=" w-full h-screen flex justify-center items-center ">
      <CircularProgress disableShrink />;
    </div>
  );
}
