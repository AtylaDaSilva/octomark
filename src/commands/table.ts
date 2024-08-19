// Types
import { TCommandFuncArgs } from "@/types";

/**
 * Inserts 'table' Github-Flavored Markdown into text.
 * @param selection Selection state.
 * @returns EditorSelection object
 */
export function table({ selection, tableProps }: TCommandFuncArgs) {
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

    const newSelection: EditorSelection = {
        ...selection,
        text: `${tableMarkdown}`
    };

    return newSelection;
}