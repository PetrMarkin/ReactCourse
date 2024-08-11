'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Result } from '../../interfaces/interfaces';

interface SelectedItemsContextType {
  selectedItems: Result[];
  selectItem: (item: Result) => void;
  deselectItem: (url: string) => void;
}

const SelectedItemsContext = createContext<
  SelectedItemsContextType | undefined
>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const SelectedItemsProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [selectedItems, setSelectedItems] = useState<Result[]>([]);

  const selectItem = (item: Result) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const deselectItem = (url: string) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.url !== url),
    );
  };

  return (
    <SelectedItemsContext.Provider
      value={{ selectedItems, selectItem, deselectItem }}
    >
      {children}
    </SelectedItemsContext.Provider>
  );
};

export const useSelectedItems = () => {
  const context = useContext(SelectedItemsContext);
  if (!context) {
    throw new Error(
      'useSelectedItems must be used within a SelectedItemsProvider',
    );
  }
  return context;
};
