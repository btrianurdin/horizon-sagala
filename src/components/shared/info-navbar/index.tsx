import Button from "@/components/ui/button";
import Popover from "@/components/ui/popover";
import { MdOutlineInfo } from "react-icons/md";

const InfoNavbar = () => (
  <Popover
    align="end"
    offset={20}
    content={
      <div className="p-6">
        <img src="https://horizon-ui.com/horizon-ui-chakra/static/media/Navbar.f96a9f58c491b9acda99.png" className="rounded-[20px]" />
        <div className="mt-6 flex flex-col gap-4">
          <Button size="md" className="w-full py-3 rounded-2xl">
            Buy Horizon UI Pro
          </Button>
          <Button variant="soft" size="md" className="w-full py-3 rounded-2xl">
            Buy Horizon UI Pro
          </Button>
        </div>
      </div>
    }
  >
    <button>
      <MdOutlineInfo className="w-5 h-5 text-slate-400" />
    </button>
  </Popover>
);

export default InfoNavbar;
