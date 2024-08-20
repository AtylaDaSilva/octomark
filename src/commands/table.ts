// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Inserts 'table' Github-Flavored Markdown into text.
 * @param selectedText The currently selected text in the editor
 * @returns string
 */
export function table({ selectedText, tableProps }: TCommandFuncArgs) {
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

    return `${tableMarkdown}`
}