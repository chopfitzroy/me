import { Plus } from "@icon-park/react";
import { useTwoDayList } from "./useTwoDayList";
import { TwoDayListItem } from "../two-day-list-item";

const TwoDayList = () => {
  const {
    formRef,
    completeTwoDayList,
    incompleteTwoDayList,
    handleFormSubmission,
  } = useTwoDayList();
  return (
    <div>
      <div>
        {incompleteTwoDayList.map((item, index) => (
          <TwoDayListItem key={index} {...item} />
        ))}
      </div>
      <div>
        {completeTwoDayList.map((item, index) => (
          <TwoDayListItem key={index} {...item} />
        ))}
      </div>
      <form ref={formRef} onSubmit={handleFormSubmission} className="flex mt-2">
        <input required type="text" name="title" className="border-b w-full outline-none border-b-2 border-slate-100 focus:border-cyan-400" />
        <button type="submit" className="p-2 ml-2 bg-cyan-400" >
          <Plus className="text-white" />
        </button>
      </form>
    </div>
  );
};

export { TwoDayList };
