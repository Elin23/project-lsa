// OperationalRangesSection.tsx
import React from "react";

import { operationalRangesData } from "../../data/operationalRangesData";
import OperationalRangesContent from "../../components/common/OperationalRanges/OperationalRangesLeft";
import OperationalRangesTable from "../../components/common/OperationalRanges/OperationalRangesTable";

const OperationalRangesSection: React.FC = () => {
    const { title, description, sideNotes, tableHeaders, tableRows } =
        operationalRangesData;

    return (
                <div className=" w-full flex flex-col lg:flex-row gap-8">
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