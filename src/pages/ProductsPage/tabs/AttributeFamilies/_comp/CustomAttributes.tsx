import * as React from 'react';
import { useAppDispatch, useAppSelector } from "src/app/store";
import { getAttributes } from "src/app/store/slices/Attributes/Attribute/attributeAsyncThunks";
import { useEffect, useState } from "react";
import { CheckBox } from "src/app/components/optimized";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useTranslation } from "react-i18next";
import SearchInput from 'src/app/components/ui/form/SearchInput';



export default function CustomAttributes() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const { attributesList } = useAppSelector((state) => state.attributesProducts);


  const filteredAttributes = React.useMemo(() => {
    return attributesList.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, attributesList]);

  const handleCheckBoxChange = (attributeCode: string, isChecked: boolean) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [attributeCode]: isChecked,
    }));

    setSelectedAttributes(prevState => {
      if (isChecked) {
        // Add the attribute to the array if checked
        return [...prevState, attributeCode];
      } else {
        // Remove the attribute from the array if unchecked
        return prevState.filter(code => code !== attributeCode);
      }
    });
  };


  useEffect(() => {
    dispatch(getAttributes());
  }, [dispatch]);

  return (
    <div className='flex-col-global'>
      <SearchInput setSearchQuery={setSearchQuery} />
      {/* Attributes List */}
      {filteredAttributes.map((item) => (
        <div key={item.code} className="flex items-center gap-4 mb-4">
          <CheckBox
            checked={checkedItems[item.code] || false}
            handleOnChange={(isChecked) => handleCheckBoxChange(item.code, isChecked)}
          />
          <p className='text-title text-sm'>{item.code}</p>
        </div>
      ))}
    </div>
  );
}
