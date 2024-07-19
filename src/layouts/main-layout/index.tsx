import { useEffect, useMemo, useState } from "react";
import CompanyLogo from "../../components/shared/company-logo";
import {
  MdBarChart,
  MdClose,
  MdColorLens,
  MdHome,
  MdLock,
  MdMenu,
  MdOutlineSearch,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";
import clsx from "clsx";
import TextInput from "../../components/ui/text-input";
import cn from "@/utils/cn";
import ProfileNavbar from "@/components/shared/profile-navbar";
import NotificationsNavbar from "@/components/shared/notifications-navbar";
import InfoNavbar from "@/components/shared/info-navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeMenu] = useState<string | null>("/");

  const sidebarMenu = useMemo(() => {
    return [
      {
        id: "dashboard",
        name: "Main Dashboard",
        link: "#",
        icon: MdHome,
      },
      {
        id: "nft",
        name: "NFT Marketplace",
        link: "#",
        icon: MdOutlineShoppingCart,
      },
      {
        id: "tables",
        name: "Data Tables",
        link: "/",
        icon: MdBarChart,
      },
      {
        id: "profile",
        name: "Profile",
        link: "",
        icon: MdPerson,
      },
      {
        id: "sign-in",
        name: "Sign In",
        link: "#",
        icon: MdLock,
      },
      {
        id: "admin",
        name: "RLT Admin",
        link: "#",
        icon: MdHome,
      },
    ];
  }, []);

  const breadcrumbs = useMemo(() => {
    const active = sidebarMenu
      .filter((menu) => menu.link === activeMenu)
      .map((menu) => ({
        id: menu.id,
        name: menu.name,
        href: menu.link,
      }));

    return [
      {
        id: "root",
        name: "Pages",
        href: "/",
      },
      ...active,
    ];
  }, []);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSidebar]);

  return (
    <div>
      <aside
        className={cn(
          "fixed left-0 top-0 bottom-0 w-[300px] py-6 bg-white shadow-xl z-50",
          "-translate-x-full lg:translate-x-0 transition-transform duration-300",
          showSidebar && "translate-x-0"
        )}
      >
        <button
          className="lg:hidden absolute top-3 right-3"
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <MdClose className="w-5 h-5" />
        </button>
        <div className="flex justify-center border-b px-4">
          <CompanyLogo className="w-[175px] h-[26px] my-9" />
        </div>
        <ul className="py-6 px-4 flex flex-col gap-2">
          {sidebarMenu.map((menu) => {
            const Icon = menu.icon;
            const isMenuActive = activeMenu === menu.link;

            return (
              <li key={menu.id} className="flex items-center">
                <a
                  href={menu.link}
                  className={clsx(
                    "text-slate-400 flex items-center px-3 my-1 py-2 font-dm w-full",
                    isMenuActive && "!text-black font-semibold"
                  )}
                >
                  <Icon
                    className={clsx(
                      "w-5 h-5 mr-4",
                      isMenuActive && "text-brand-700"
                    )}
                  />
                  <span>{menu.name}</span>
                </a>
                {isMenuActive && (
                  <div className="h-9 w-1 ml-auto bg-brand-600 rounded-md" />
                )}
              </li>
            );
          })}
        </ul>
      </aside>
      {showSidebar && (
        <div
          className="inset-0 bg-black bg-opacity-50 fixed z-40"
          onClick={() => {
            setShowSidebar(false);
          }}
        />
      )}
      <main className="lg:ml-[300px] p-4 z-20">
        <header className="sticky top-4 py-2 px-3 flex flex-col md:flex-row md:items-center justify-between bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl z-10">
          <div className="flex flex-col gap-2 mb-4 md:mb-0">
            <div className="flex gap-2">
              {breadcrumbs.map((breadcrumb, idx) => (
                <a
                  key={breadcrumb.id}
                  href={breadcrumb.href}
                  className="text-xs hover:underline"
                >
                  {breadcrumb.name}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="inline-block ml-2">/</span>
                  )}
                </a>
              ))}
            </div>
            <h2 className="text-3xl font-semibold">
              {breadcrumbs[breadcrumbs.length - 1].name}
            </h2>
          </div>
          <div className="p-2.5 bg-white rounded-full flex gap-2.5 shadow-brand z-30">
            <TextInput
              placeholder="Search..."
              leadingIcon={<MdOutlineSearch />}
              rootClassName="flex-grow"
              className="w-full md:w-auto"
            />
            <button
              className="lg:hidden"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <MdMenu className="w-5 h-5 text-slate-400" />
            </button>
            <NotificationsNavbar />
            <InfoNavbar />
            <button>
              <MdColorLens className="w-5 h-5 text-slate-400" />
            </button>
            <ProfileNavbar />
          </div>
        </header>
        <div className="min-h-screen px-2 mt-5 pb-10 w-full">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
