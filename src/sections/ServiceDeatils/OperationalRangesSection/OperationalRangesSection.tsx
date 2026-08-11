import type { FC } from "react";

import OperationalRangesContent from "./OperationalRangesLeft";
import OperationalRangesTable from "./OperationalRangesTable";

import type { Service } from "../../../Types/service";

type OperationalRangesSectionProps = {
  service: Service;
};

const OperationalRangesSection: FC<
  OperationalRangesSectionProps
> = ({ service }) => {
  const {
    title,
    description,
    items,
    table,
  } = service.capabilitiesSection;

  const headers = table?.headers ?? [];
  const rows = table?.rows?.map((row) => row.cells) ?? [];

  const hasTable =
    headers.length > 0 &&
    rows.length > 0;

  const hasContent =
    Boolean(title?.trim()) ||
    Boolean(description?.trim()) ||
    items.length > 0;

  // Do not render an empty section.
  if (!hasContent && !hasTable) {
    return null;
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="650"
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
      className={`
        relative
        flex
        w-full
        flex-col
        gap-8
        ${
          hasTable
            ? "lg:flex-row lg:items-start xl:gap-10 2xl:gap-12"
            : ""
        }
      `}
    >
      {hasContent && (
        <OperationalRangesContent
          title={title}
          description={description}
          sideNotes={items}
          fullWidth={!hasTable}
        />
      )}

      {hasTable && (
        <OperationalRangesTable
          headers={headers}
          rows={rows}
          fullWidth={!hasContent}
        />
      )}
    </section>
  );
};

export default OperationalRangesSection;