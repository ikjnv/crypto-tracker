import { useEffect, useState } from 'react';
import convertToIsoDate from './convertDate';

export default function useChartData(items) {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (items) {
      const temp = [];
      items.forEach((r) => {
        const submittedAt = r[0];
        // submittedAt will be Object { "Submitted at": {"Nov 5 2020": 44 } }
        if (submittedAt) {
          const keys = Object.keys(submittedAt);
          const data = {
            x: convertToIsoDate(keys[0]),
            y: submittedAt[keys[0]]
          };
          temp.push(data);
        }
      });
      setChartData(temp);
    }
  }, [items]);

  return [chartData, setChartData];
}
