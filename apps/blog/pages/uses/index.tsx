import ReactMarkdown from "react-markdown";

const content = `
This page is heavily inspired by [Wes Bos /uses](https://wesbos.com/uses) and is intended to answer any questions about my setup.

### Editor 📜

I use [VS Code](https://code.visualstudio.com/) with the following extensions:

- [ENV](https://github.com/IronGeek/vscode-env)
- [GitLens](https://github.com/eamodio/vscode-gitlens)
- [ColdCode](https://github.com/ericliu-el/coldcode)
- [Todo Tree](https://github.com/Gruntfuggly/todo-tree)
- [Github Theme](https://github.com/primer/github-vscode-theme)
- [Indent Rainbow](https://github.com/oderwat/vscode-indent-rainbow)
- [Light Dark Toggle](https://github.com/panzerstadt/vscode-light-dark-toggle-ext)
- [Prettier - Minimalist plugin](https://github.com/duailibe/vscode-miniprettier)

### Terminal 🐢

I tend to use [Microsoft Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) with [WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install) on Windows, [Kitty](https://sw.kovidgoyal.net/kitty/) on Mac and Linux.

### Other 🍀

Here is a list of other applications I use to assist in development or development related needs.

- [Netlify](https://www.netlify.com/)
- [Postman](https://www.postman.com/)

### Periphials 🐭

- KVM
- Mic
- Mouse
- Camera
- Keyboard
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
