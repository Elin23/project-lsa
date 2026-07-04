// OperationalRangesSection.tsx
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
    <div className="w-full flex flex-col lg:flex-row gap-8">
      <OperationalRangesContent
        title={title}
        description={description}
        sideNotes={sideNotes}
      />

      <OperationalRangesTable headers={tableHeaders} rows={tableRows} />
    </div>
  );
};

export default OperationalRangesSection;