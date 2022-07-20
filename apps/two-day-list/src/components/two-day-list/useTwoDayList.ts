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
}

type AddTwoDaySignature = (item: TwoDay) => void;
type RemoveTwoDaySignature = (item: TwoDay) => void;
type HandleFormSubmission = (event: FormEvent<TwoDayListFormElement>) => void;

const useTwoDayList = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [todoList, setTwoDayList] = useImmer(new Set<TwoDay>());

  const addTwoDay = useCallback<AddTwoDaySignature>((item) => {
    setTwoDayList((current) => {
      current.add(item);
    });
  }, []);

  const removeTwoDay = useCallback<RemoveTwoDaySignature>((item) => {
    setTwoDayList((current) => {
      current.delete(item);
    });
  }, []);

  const toggleTwoDay = useCallback<RemoveTwoDaySignature>((item) => {
    setTwoDayList((current) => {
      const { title, checked } = item;
      current.delete(item);
      current.add({ title, checked: !checked });
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
    return [...todoList].map((item) => {
      return {
        ...item,
        toggle: () => toggleTwoDay(item),
        remove: () => removeTwoDay(item),
      };
    });
  }, [todoList, removeTwoDay]);

  const completeTwoDayList = useMemo(() => {
    return formattedTwoDayList.filter((item) => item.checked).reverse();
  }, [formattedTwoDayList]);

  const incompleteTwoDayList = useMemo(() => {
    return formattedTwoDayList.filter((item) => !item.checked).reverse();
  }, [formattedTwoDayList]);

  return {
    formRef,
    completeTwoDayList,
    incompleteTwoDayList,
    handleFormSubmission,
  };
};

export { useTwoDayList };
