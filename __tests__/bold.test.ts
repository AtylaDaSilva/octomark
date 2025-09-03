import { bold, isBold, undoBold } from "@/commands";


//isBold
const isBoldTestCases: Map<string, boolean> = new Map()
isBoldTestCases.set("**Boldly bold**", true)
isBoldTestCases.set("**is this working?**", true)
isBoldTestCases.set("**sometext**", true)
isBoldTestCases.set("**Missing trailing asteriks", false)
isBoldTestCases.set("Missing leading asteriks**", false)
isBoldTestCases.set("*Missing leading and trailing asteriks*", false)
isBoldTestCases.set("Not bold at all", false)
isBoldTestCases.set("****", true)
isBoldTestCases.set("**", false)

isBoldTestCases.forEach((val, key) => {
    test(`isBold should return ${val} for ${key}`, () => {
        expect(isBold(key)).toBe(val)
    })
})

// Bold
const boldTestCases: Map<string, string> = new Map()
boldTestCases.set("The quick brown fox", "**The quick brown fox**")
boldTestCases.set("the more the merrier", "**the more the merrier**")
boldTestCases.set("Lorem ipsum...", "**Lorem ipsum...**")

boldTestCases.forEach((k, v) => {
    test(`Converting ${k} to bold should be ${v}`, () => {
        expect(bold({selectedText: k})).toBe(v)
    })
})

// Undo bold
const undoBoldTestCases: Map<string, string> = new Map()
undoBoldTestCases.set("The quick brown fox", "**The quick brown fox**")
undoBoldTestCases.set("...leapt over the dog...", "**...leapt over the dog...**")
undoBoldTestCases.set("**the more the merrier**", "the more the merrier")
undoBoldTestCases.set("**Lorem ipsum...**", "Lorem ipsum...")
undoBoldTestCases.set("*some text*", "*some text*")
undoBoldTestCases.set("****", "")
undoBoldTestCases.set("", "****")
