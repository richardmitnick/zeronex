import React from "react";
import { serviceColumns } from "./NavServiceColumn";
import { ServiceItem } from "./Navbar";
import { ServiceHeader } from "./Nav utils/ServiceHeader";
import { ServiceLink } from "./Nav utils/ServiceLink";

interface ServiceColProps {
  column: (typeof serviceColumns)[0];
  onServiceClick: (service: ServiceItem) => void;
}

const ServiceCol = ({ column, onServiceClick }: ServiceColProps) => {
  const ActionIcon = column.action?.icon;
  return (
    <div
      key={column.title}
      className="relative min-h-150 overflow-hidden rounded-xl border border-white/6 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      {/* Glow */}
      <div className={column.glowClass} />

      {/* Header */}
      <div className="relative z-10 p-6">
        <ServiceHeader
          icon={column.icon}
          title={column.title}
          description={column.description}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/8" />

      {/* Services */}
      <div className="relative z-10 p-6">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {column.sectionTitle}
        </p>

        <div className="flex flex-col">
          {column.services.map((service) => (
            <ServiceLink
              key={service.text}
              icon={service.icon}
              text={service.text}
              hideIcon={service.hideIcon}
              hoverColor={column.hoverColor}
            />
          ))}
        </div>

        {/* Optional bottom action */}
        {column.action && ActionIcon && (
          <button
            type="button"
            onClick={() => onServiceClick(column.action!.service)}
            className="group mt-7 flex cursor-pointer items-center gap-2 text-[12px] font-medium text-zinc-300 transition-colors hover:text-blue-400"
          >
            <ActionIcon className="h-4 w-4" />

            <span>{column.action.label}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCol;
