import { nanoid } from "nanoid";
import { useImmer } from "use-immer";
import { FormEvent, useCallback, useMemo, useRef } from "react";

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
}
interface TwoDayListFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export interface TwoDay {
  title: string;
  checked: boolean;
  position?: number;
}

type AddTwoDaySignature = (item: TwoDay) => void;
type RemoveTwoDaySignature = (id: string) => void;
type ToggleTwoDaySignature = (id: string) => void;
type HandleFormSubmission = (event: FormEvent<TwoDayListFormElement>) => void;

const useTwoDayList = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [todoList, setTwoDayList] = useImmer(new Map<string, TwoDay>());

  const addTwoDay = useCallback<AddTwoDaySignature>((item) => {
    // TODO add position
    setTwoDayList((current) => {
      current.set(nanoid(), item);
    });
  }, []);

  const removeTwoDay = useCallback<RemoveTwoDaySignature>((id) => {
    setTwoDayList((current) => {
      current.delete(id);
    });
  }, []);

  const toggleTwoDay = useCallback<ToggleTwoDaySignature>((id) => {
    setTwoDayList((current) => {
      const item = current.get(id);
      if (!item) {
        console.warn(`No item found with id: ${id} aborting!`);
        return;
      }
      // TODO update position
      current.set(id, {
        ...item,
        checked: !item.checked,
      });
    });
  }, []);

  const handleFormSubmission = useCallback<HandleFormSubmission>(
    (event) => {
      if (formRef.current === null) {
        return;
      }
      const title = event.currentTarget.elements.title.value;
      addTwoDay({ title, checked: false });
      event.preventDefault();
      formRef.current.reset();
    },
    [addTwoDay]
  );

  const formattedTwoDayList = useMemo(() => {
    return [...todoList.entries()].map(([id, item]) => {
      return {
        ...item,
        toggle: () => toggleTwoDay(id),
        remove: () => removeTwoDay(id),
      };
    });
  }, [todoList, removeTwoDay]);

  const completeTwoDayList = useMemo(() => {
    return formattedTwoDayList.filter((item) => item.checked);
  }, [formattedTwoDayList]);

  const incompleteTwoDayList = useMemo(() => {
    return formattedTwoDayList.filter((item) => !item.checked);
  }, [formattedTwoDayList]);

  return {
    formRef,
    completeTwoDayList,
    incompleteTwoDayList,
    handleFormSubmission,
  };
};

export { useTwoDayList };
