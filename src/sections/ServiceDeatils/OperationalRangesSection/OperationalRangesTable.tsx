import React from "react";

interface OperationalRangesTableProps {
  headers: string[];
  rows: string[][];
  fullWidth?: boolean;
}

const OperationalRangesTable: React.FC<OperationalRangesTableProps> = ({ headers, rows, fullWidth = false }) => {
  if (headers.length === 0 || rows.length === 0) {
    return null;
  }

  const columnCount = headers.length;

  const getTableMinWidth = () => {
    if (columnCount === 1) {
      return "min-w-0";
    }

    if (columnCount === 2) {
      return "min-w-120";
    }

    if (columnCount === 3) {
      return "min-w-155";
    }

    return "min-w-180";
  };

  return (
    <div
      className={`h-max w-full overflow-hidden rounded-2xl border border-[#DCE5F3] bg-white shadow-[0_10px_32px_rgba(0,35,111,0.07)] ${fullWidth ? "" : "lg:w-[67.11%] 2xl:w-[65.66%]"
        }`}
    >
      <div className="w-full overflow-x-auto">
        <table className={`w-full border-collapse table-fixed ${getTableMinWidth()}`}>
          <thead>
            <tr className="bg-[#00236F]">
              {headers.map((header, index) => (
                <th
                  key={`${header}-${index}`}
                  scope="col"
                  className="px-5 py-5 text-start text-[15px] font-bold tracking-[0.01em] text-white md:px-6 md:py-6 md:text-[18px]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`group relative border-t border-[#E2E8F2] transition-colors duration-300 ease-out ${rowIndex % 2 === 0 ? "bg-[#FAFBFF]" : "bg-white"
                  } hover:bg-[#F4F8FD]`}
              >
                {headers.map((_, cellIndex) => {
                  const cell = row[cellIndex] ?? "";
                  const isFirstColumn = cellIndex === 0;

                  return (
                    <td
                      key={cellIndex}
                      className={`relative px-5 py-5 text-start text-[15px] leading-relaxed transition-colors duration-300 md:px-6 md:py-6 md:text-[16px] ${isFirstColumn
                          ? "font-bold text-blue-03 group-hover:text-blue-01"
                          : "text-muted-blue group-hover:text-[#526A82]"
                        }`}
                    >
                      {isFirstColumn && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 top-0 w-0.75 bg-red-01 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      )}

                      {cell || "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperationalRangesTable;