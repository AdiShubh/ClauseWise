import { LuLayoutDashboard, LuUsers, LuFileText } from "react-icons/lu";

export const sidebarItems = [
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: LuLayoutDashboard,
  },
  {
    title: "Contracts",
    url: "/Contracts",
    icon: LuFileText,
    submenu: [
      {
        title: "Contracts List",
        url: "/Contracts/ContractList",
      },
      {
        title: "Add Contracts",
        url: "/Contracts/AddContract",
      },
    ],
  },
  {
    title: "Partner",
    url: "/Partners",
    icon: LuUsers,
    submenu: [
      {
        title: "Partners List",
        url: "/Partners/PartnersList",
      },
      {
        title: "Add Partners",
        url: "/Partners/AddPartner",
      },
    ],
  },
];
