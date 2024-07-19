import Popover from "@/components/ui/popover";
import { MdOutlineNotifications, MdUpload } from "react-icons/md";

const NotificationsNavbar = () => (
  <Popover
    offset={20}
    align="end"
    content={
      <div className="p-5 w-full">
        <div className="mb-6 flex items-center justify-between">
          <p className="font-semibold">Notifications</p>
          <p className="text-xs font-light cursor-pointer">Mark all read</p>
        </div>
        <div className="flex flex-col gap-5">
          <button className="flex gap-4 items-center text-left">
            <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-t from-brand-600 to-brand-500 text-white flex items-center justify-center rounded-xl">
              <MdUpload className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">
                New Update: Horizon UI Dashboard PRO
              </p>
              <p className="text-sm font-light">
                A new update for your downloaded item is available!
              </p>
            </div>
          </button>
          <button className="flex gap-4 items-center text-left">
            <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-t from-brand-600 to-brand-500 text-white flex items-center justify-center rounded-xl">
              <MdUpload className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">
                New Update: Horizon UI Dashboard PRO
              </p>
              <p className="text-sm font-light">
                A new update for your downloaded item is available!
              </p>
            </div>
          </button>
        </div>
      </div>
    }
  >
    <button>
      <MdOutlineNotifications className="w-5 h-5 text-slate-400" />
    </button>
  </Popover>
);

export default NotificationsNavbar;
