import { RxDashboard } from "react-icons/rx";
import { AiFillShopping } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { TbLayersSubtract } from "react-icons/tb";
import { BiCuboid } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";

const sideBarPaths = [
    // {
    //     icon: RxDashboard,
    //     text: "Dashboard",
    //     path: "/dashboard"
    // },
    {
        icon: MdOutlineCategory,
        text: "Categories",
        path: "/categories"
    },
    {
        icon: TbLayersSubtract,
        text: "Sub Categories",
        path: "/subcategory"
    },
    {
        icon: BsBoxSeam,
        text: "Products",
        path: "/products"
    },
    {
        icon: BiCuboid,
        text: "Product Types",
        path: "/producttypes"
    },
    {
        icon: MdOutlineLocalOffer,
        text: "Offers",
        path: "/offers"
    },
]

export { sideBarPaths }