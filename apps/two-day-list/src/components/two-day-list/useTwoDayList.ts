import { useImmer } from "use-immer";
import { FormEvent, useCallback, useMemo, useRef } from "react";

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
}
interface TwoDayListFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

type TwoDay = Map<string, string | boolean>;

// export interface TwoDay {
//   title: string;
//   checked: boolean;
// }

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
      const next = new Map(item);
      next.set('checkd', !next.get('checked'));
      current.delete(item);
      current.add(next);
    });
  }, []);

  const handleFormSubmission = useCallback<HandleFormSubmission>(
    (event) => {
      if (formRef.current === null) {
        return;
      }
      const title = event.currentTarget.elements.title.value;
      const item = new Map();
      item.set("title", title);
      item.set("checked", false);
      addTwoDay(item);
      // addTwoDay({ title, checked: false });
      event.preventDefault();
      formRef.current.reset();
    },
    [addTwoDay]
  );

  const formattedTwoDayList = useMemo(() => {
    return [...todoList].map((item) => {
      return {
        title: item.get('title'),
        checked: item.get('checked'),
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
