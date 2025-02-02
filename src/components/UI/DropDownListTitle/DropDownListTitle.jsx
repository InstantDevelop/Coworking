/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./DropDownListTitle.scss";
import generateRandomKey from "../../../utils/keyGenerator";
import DropDownList from "../../../stores/DropDownList";
import DropDownListItem from "../DropDownListItem/DropDownListItem";
import wrapArrow from "../../../assets/icons/wrap.svg";

const DropDownListTitle = observer(({ dropItem, size }) => {
  const handleToggleList = () => {
    DropDownList.setToggled(dropItem.id);
  };
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  useEffect(() => {
    DropDownList.setItem(dropItem.id);
  }, []);
  return (
    <>
      <h2 className={`drop-down-title ${size}`} onClick={handleToggleList}>
        {dropItem.title}
        <img
          src={wrapArrow}
          alt="wrap arrow"
          className={`drop-down__wrap ${DropDownList.lists[dropItem.id] && "opened"} ${size}`}
        />
      </h2>
      {DropDownList.lists[dropItem.id] && (
        <ul className={`drop-down-block `}>
          {dropItem.data.map((item) => (
            <DropDownListItem key={getRandomKey()} listItem={item} size={size} />
          ))}
        </ul>
      )}
    </>
  );
});

export default DropDownListTitle;
