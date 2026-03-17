export default function Table({ columns, data }) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow-lg border border-gray-800 overflow-hidden mt-6">

      <table className="w-full text-sm text-gray-200">
        
        {/* Header */}
        <thead className="bg-[#111] text-gray-400">
          <tr>
            {columns.map(col => (
              <th
                key={col}
                className="px-5 py-3 text-left text-xs uppercase tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-t border-gray-800 hover:bg-[#2a2a2a] transition"
            >
              {columns.map(col => (
                <td key={col} className="px-5 py-3">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}