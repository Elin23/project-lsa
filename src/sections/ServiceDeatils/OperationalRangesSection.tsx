import React from "react";

import OperationalRangesContent from "../../components/common/OperationalRanges/OperationalRangesLeft";
import OperationalRangesTable from "../../components/common/OperationalRanges/OperationalRangesTable";
import { servicesData2 } from "../../data/servicesData2";

type OperationalRangesSectionProps = {
  service: (typeof servicesData2)[number];
};

const OperationalRangesSection: React.FC<OperationalRangesSectionProps> = ({
  service,
}) => {
  const { title, description, sideNotes, tableHeaders, tableRows } =
    service.details.operationalRanges;

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="650"
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
      className="
        relative
        flex
        w-full
        flex-col
        gap-8
        lg:flex-row
        lg:items-start
        xl:gap-10
        2xl:gap-12
      "
    >
      <OperationalRangesContent
        title={title}
        description={description}
        sideNotes={sideNotes}
      />

      <OperationalRangesTable headers={tableHeaders} rows={tableRows} />
    </section>
  );
};

export default OperationalRangesSection;