// OperationalRangesTable.tsx
import React from "react";

interface OperationalRangesTableProps {
  headers: string[];
  rows: string[][];
}

const OperationalRangesTable: React.FC<OperationalRangesTableProps> = ({
  headers,
  rows,
}) => {
  return (
    <div className="w-full h-max lg:w-[67.11%] 2xl:w-[65.66%] overflow-hidden rounded-2xl border border-[#CFDAF180] bg-white shadow-[0px_8px_30px_rgba(0,35,111,0.08)]">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-155 border-collapse">
          <thead>
            <tr className="bg-[#00236F]">
              <th className="w-4 md:w-6 bg-[#00236F]" />

              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-5 md:p-6 text-start text-[15px] md:text-[18px] font-bold text-white whitespace-nowrap"
                >
                  {header}
                </th>
              ))}

              <th className="w-4 md:w-6 bg-[#00236F]" />
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-[#CFDAF1] bg-[#F9F9FF] transition-all duration-300 hover:bg-white hover:shadow-[inset_4px_0_0_#C8102E]"
              >
                <td className="p-5 md:p-6" />

                <td className="p-5 md:p-6 text-start text-[15px] md:text-[16px] font-bold text-blue-03">
                  {row[0]}
                </td>

                <td className="p-5 md:p-6 text-start text-[15px] md:text-[16px] leading-relaxed text-muted-blue">
                  {row[1]}
                </td>

                <td className="p-5 md:p-6 text-start text-[15px] md:text-[16px] leading-relaxed text-muted-blue">
                  {row[2]}
                </td>

                <td className="p-5 md:p-6" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperationalRangesTable;