import React from 'react';
import { SearchDialog } from './SearchBar';

// Default implementation, that you can customize
export default function Root({children}) {
  return (<>
    {children}
    <SearchDialog></SearchDialog>
  </>)
}