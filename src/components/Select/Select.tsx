import classNames from "classnames";
import React from "react";
import s from "./select.module.scss";

interface Props {
  selectedLabel: string;
  options: string[];
  onChange: (value: string) => void;
}

const Select: React.FC<Props> = ({ options, selectedLabel, onChange }) => {
  const [showList, setShowList] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(selectedLabel);

  React.useEffect(() => {
    onChange(selectedLabel);
  }, [selectedLabel]);

  return (
    <div className={s.root} onMouseLeave={() => setShowList(false)}>
      <div className={s.active} onMouseEnter={() => setShowList(true)}>
        <span>{activeItem}</span>
      </div>

      <div className={classNames(s.list, { [s.showList]: showList })}>
        {options.map((item) => (
          <div
            key={item}
            className={s.item}
            onClick={() => {
              setActiveItem(item);
              setShowList(false);
              onChange(item);
            }}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
