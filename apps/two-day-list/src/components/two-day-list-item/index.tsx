import { FC } from "react";
import { Delete } from "@icon-park/react";
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
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div className="flex item-center justify-start">
          <input
            type="checkbox"
            checked={checked}
            onChange={toggle}
            className="mr-2"
          />
          <p className={checked ? "line-through" : ""}>{title}</p>
        </div>
        <button type="button" onClick={remove}>
          <Delete className="text-pink-500" />
        </button>
      </div>

      <div className="relative w-full h-0.5">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-cyan-300 to-pink-500" />
        <div
          className="absolute top-0 right-0 bottom-0 bg-white"
          style={{ width: "30%" }}
        />
      </div>
    </div>
  );
};

export { TwoDayListItem };
