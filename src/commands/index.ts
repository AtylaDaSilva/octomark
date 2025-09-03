import { handleCommand } from "./handleCommand";
import { bold, isBold, undoBold } from "./bold";
import { italic } from "./italic";
import { heading } from "./heading";
import { strikethrough } from "./strikethrough";
import { code } from "./code";
import { link } from "./link";
import { image } from "./image";
import { bulletedList } from "./bulletedList";
import { numberedList } from "./numberedList";
import { taskList } from "./taskList";
import { footnote } from "./footnote";
import { comment } from "./comment";
import { alert } from "./alert";
import { table } from "./table";
import { emoji } from "./emoji";

export {
    handleCommand,
    bold, isBold, undoBold,
    italic,
    heading,
    strikethrough,
    code,
    link,
    image,
    bulletedList,
    numberedList,
    taskList,
    footnote,
    comment,
    alert,
    table,
    emoji
}