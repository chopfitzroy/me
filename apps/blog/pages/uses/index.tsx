import ReactMarkdown from "react-markdown";

const content = `
Description...

### Editor and 

- VScode

### Terminal

- Microsoft Terminal

### Periphials 

- KVM
- Mic
- Camera
- Keyboard
- Mouse
`;

type UsesSignature = () => JSX.Element;
const Uses: UsesSignature = () => {
  return (
    <div className="w-full max-w-screen-md p-4">
      <h1 className="mb-6 text-5xl font-bold font-heading text-slate-700 dark:text-slate-200">
        Uses
      </h1>
      <ReactMarkdown
        children={content}
        className="max-w-none mb-4 prose dark:prose-dark"
      ></ReactMarkdown>
    </div>
  );
};

export default Uses;
