# OctoMark

A CommonMark and GitHub-Flavored Markdown editor.

## Features

* A markdown editor fully compatible with [CommonMark](https://commonmark.org/) and GitHub's [GFM](https://github.github.com/gfm/) that uses the popular Monaco editor and counts with persistent data, stored in your browser's local storage (see note bellow).
* A preview window that renders your markdown as you type it.
* A command bar fully integrated with the editor, featuring frequently used commands including:
    * 6 levels of headings
    * Bold
    * Italics
    * Code
    * Link
    * Image
    * Bulleted and numbered lists
    * Task lists
    * Footnotes
    * Comments
    * GitHub Alerts
    * Tables
    * Emojis
* Upload a .md or .txt file directly into the editor
* Download your markdown into a .md file once you're finished working on it.
* Auto-scrolling between the editor and preview, making it easier to work on longer walls of text
* A character counter (also counts CR/LF characters)


> [!NOTE]
> The only data this app stores is the contents of the markdown editor and the option to show/hide the preview window, both for the purpose of quality of life. All data is stored in the browser's local storage (which can be cleared at any time). None of the data stored by this app is sent or shared between third parties.


## Dependencies
This app was made possible with:

* [Next.js](https://nextjs.org/)
* [Material UI](https://mui.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)
* [react-markdown](https://www.npmjs.com/package/react-markdown/v/8.0.6)
* [remark-gemoji](https://www.npmjs.com/package/remark-gemoji)
* [remark-gfm](https://www.npmjs.com/package/remark-gfm)
* [remark-github](https://www.npmjs.com/package/remark-github)
* [remark-github-blockquote-alert](https://www.npmjs.com/package/remark-github-blockquote-alert)
* [remark-remove-comments](https://www.npmjs.com/package/remark-remove-comments)
* [monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react)

## Starting a local development environment

1. Make sure you have the latest version of [Node.js](https://nodejs.org/en/)
2. Clone this repository into a directory of your choosing.
3. With a command line interface, e.g.: Windows Powershell, `cd` into the repository you just cloned.
4. Still in the command line, run the following commands: `npm install` to install all the necessary dependencies and `npm run dev` to start a local development environment.
5. Finally, open you web browser in the address `http://localhost:3000`.