import { m } from "motion/react";

import { ServiceItem } from "./Navbar";
import { serviceColumns } from "./NavServiceColumn";
import ServiceCol from "./ServiceCol";

const ServiceMegaMenu = ({
  onServiceClick,
}: {
  onServiceClick: (service: ServiceItem) => void;
  onContact: () => void;
}) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="service-mega-menu absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
    >
      <div className="w-295 max-w-[calc(100vw-30px)] rounded-2xl border border-white/15 bg-white/8 p-7 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
        <div className="grid grid-cols-3 gap-5">
          {serviceColumns.map((column) => (
            <ServiceCol
              key={column.title}
              column={column}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default ServiceMegaMenu;
