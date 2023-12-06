import { createRequire } from "module"

const require = createRequire(import.meta.url)
const { copySync } = require("fs-extra")

copySync("test/dist/a/monacoeditorwork", "cdn", {})
