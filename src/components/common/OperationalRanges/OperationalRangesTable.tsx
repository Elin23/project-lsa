// OperationalRangesTable.tsx
import React from "react";
import type { TableRow } from "../../../data/operationalRangesData";

interface OperationalRangesTableProps {
    headers: [string, string, string];
    rows: TableRow[];
}

const OperationalRangesTable: React.FC<OperationalRangesTableProps> = ({
    headers,
    rows,
}) => {
    return (
        <div className="w-full h-max lg:w-[67.11%]  2xl:w-[65.66%] overflow-hidden rounded-xl border border-[#CFDAF180] bg-[#F9F9FF] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
            <div className="w-full overflow-x-auto">
                <table className="w-full  min-w-155 border-collapse ">
                    <thead>
                        <tr className="bg-[#00236F]">
                            <th className="w-6 bg-[#00236F] text-start text-[18px] font-bold text-white">
                            </th>
                            <th className="p-6 bg-[#00236F] text-start text-[18px] font-bold text-white">
                                {headers[0]}
                            </th>
                            <th className="p-6 bg-[#00236F] text-start text-[18px] font-bold text-white">
                                {headers[1]}
                            </th>
                            <th className="p-6 bg-[#00236F] text-start text-[18px] font-bold text-white">
                                {headers[2]}
                            </th>
                            <th className="w-6 bg-[#00236F] text-start text-[18px] font-bold text-white">
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.parameter} className="border-t border-[#CFDAF1]">
                                <td className="p-6 text-start ">
                                </td>
                                <td className="p-6 text-start text-[16px] font-bold text-blue-03">
                                    {row.parameter}
                                </td>
                                <td className="p-6 text-start text-[16px] text-muted-blue">
                                    {row.standardCapacity}
                                </td>
                                <td className="p-6 text-start text-[16px] text-muted-blue">
                                    {row.customEngineered}
                                </td>
                                <td className="p-6 text-start ">
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OperationalRangesTable;