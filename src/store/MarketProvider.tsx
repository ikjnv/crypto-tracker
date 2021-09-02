import React from "react";
import { DataProps } from "components/Areachart/interfaces";

export interface MarketContextProps {
  filteredDataState: {
    filteredData: DataProps[];
    setFilteredData: React.Dispatch<React.SetStateAction<DataProps[]>>;
  },
};

export const MarketContext = React.createContext<MarketContextProps>({
  filteredDataState: {
    filteredData: [],
    setFilteredData: () => {},
  }
});

const MarketProvider: React.FC = ({ children }) => {
  const [filteredData, setFilteredData] = React.useState<DataProps[]>([]);

  return (
    <MarketContext.Provider
      value={{
        filteredDataState: { filteredData, setFilteredData },
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketProvider;