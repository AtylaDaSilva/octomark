// Types
import { selectedTextType } from "@/classes";
import { commandFuncArgsType } from "./handleCommand";

/**
 * Inserts 'table' Github-Flavored Markdown into text.
 * @param selection Selection state.
 * @returns selectedTextType object
 */
export function table({ selection, tableProps }: commandFuncArgsType) {
    let tableHeaders = "|";
    let textAlign = "|";
    let textAlignMarkdown = "";
    let tableData = "|";
    let tableMarkdown = "";

    if (tableProps) {
        // Text align markdown
        switch (tableProps.textAlign) {
            case "center":
                textAlignMarkdown = ":---:";
                break;
            
            case "left":
                textAlignMarkdown = ":---";
                break;

            case "right":
                textAlignMarkdown = "---:";
                break;
        }

        // Table headers markdown
        for (let i = 0; i < tableProps.width; i++) {
            tableHeaders += `Header|`;
            textAlign += `${textAlignMarkdown}|`;
            tableData += `Data|`;
        }

        tableMarkdown = `${tableHeaders}\n${textAlign}\n`;

        // Table data markdown
        for (let j = 1; j < tableProps.length; j++) {
            tableMarkdown += `${tableData}\n`
        }
    }

    const newSelection: selectedTextType = {
        ...selection,
        text: `${tableMarkdown}`
    };

    return newSelection;
}

// Component types
export type tablePropsType = {
    width: number,
    length: number,
    textAlign: "center" | "left" | "right"
}