import { FC } from "react";
import { TwoDay } from "../two-day-list/useTwoDayList";

interface TwoDayListItemProps extends TwoDay {
  toggle: () => void;
  remove: () => void;
}

const TwoDayListItem: FC<TwoDayListItemProps> = ({
  title,
  toggle,
  remove,
  checked,
}) => {
  return (
    <p className={checked ? "line-through" : ""}>
      {title} - <input type="checkbox" checked={checked} onChange={toggle} />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </p>
  );
};

export { TwoDayListItem };
