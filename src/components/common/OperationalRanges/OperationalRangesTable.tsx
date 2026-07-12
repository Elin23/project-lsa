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
    <div
      className="
        h-max
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-[#DCE5F3]
        bg-white
        shadow-[0_10px_32px_rgba(0,35,111,0.07)]
        lg:w-[67.11%]
        2xl:w-[65.66%]
      "
    >
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-155 border-collapse">
          <thead>
            <tr className="bg-[#00236F]">
              <th className="w-4 bg-[#00236F] md:w-6" />

              {headers.map((header, index) => (
                <th
                  key={index}
                  className="
                    whitespace-nowrap
                    p-5
                    text-start
                    text-[15px]
                    font-bold
                    tracking-[0.01em]
                    text-white
                    md:p-6
                    md:text-[18px]
                  "
                >
                  {header}
                </th>
              ))}

              <th className="w-4 bg-[#00236F] md:w-6" />
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  group
                  border-t
                  border-[#E2E8F2]
                  transition-colors
                  duration-300
                  ease-out
                  ${
                    rowIndex % 2 === 0
                      ? "bg-[#FAFBFF]"
                      : "bg-white"
                  }
                  hover:bg-[#F4F8FD]
                `}
              >
                <td className="relative p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[3px]
                      bg-red-01
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </td>

                <td
                  className="
                    p-5
                    text-start
                    text-[15px]
                    font-bold
                    text-blue-03
                    transition-colors
                    duration-300
                    group-hover:text-blue-01
                    md:p-6
                    md:text-[16px]
                  "
                >
                  {row[0]}
                </td>

                <td
                  className="
                    p-5
                    text-start
                    text-[15px]
                    leading-relaxed
                    text-muted-blue
                    transition-colors
                    duration-300
                    group-hover:text-[#526A82]
                    md:p-6
                    md:text-[16px]
                  "
                >
                  {row[1]}
                </td>

                <td
                  className="
                    p-5
                    text-start
                    text-[15px]
                    leading-relaxed
                    text-muted-blue
                    transition-colors
                    duration-300
                    group-hover:text-[#526A82]
                    md:p-6
                    md:text-[16px]
                  "
                >
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