import Popover from "@/components/ui/popover";

const ProfileNavbar = () => (
  <Popover
    align="end"
    offset={15}
    content={
      <div className="">
        <div className="p-4 border-b">👋 Hey, Bagus Trianurdin</div>
        <div className="flex flex-col gap-2 items-start p-2.5">
          <button className="py-1.5 px-3.5 text-sm font-light">
            Profile Settings
          </button>
          <button className="py-1.5 px-3.5 text-sm font-light">
            Newspaper Settings
          </button>
          <button className="py-1.5 px-3.5 text-sm font-light text-red-600">
            Logout
          </button>
        </div>
      </div>
    }
  >
    <button className="bg-indigo-900 w-10 h-10 rounded-full text-white text-sm flex-shrink-0">
      BT
    </button>
  </Popover>
);

export default ProfileNavbar;
