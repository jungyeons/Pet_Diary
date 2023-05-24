import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

function YearDropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "2023", value: 2023 },
    { label: "2022", value: 2022 },
    { label: "2021", value: 2021 },
    { label: "2020", value: 2020 },
    { label: "2019", value: 2019 },
    { label: "2018", value: 2018 },
  ]);

  return (
    <DropDownPicker
      style={{
        width: "30%",
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="년도"
      listMode="SCROLLVIEW"
      modalProps={{
        animationType: "fade",
      }}
      modalTitle="선택해주세요."
      listItemContainerStyle={{
        width: 100,
      }}
    />
  );
}

export default YearDropDown;
