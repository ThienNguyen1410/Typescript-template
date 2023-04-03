import { A } from "@a";
import { B } from "@b";

import * as path from "path";

import moment from "moment";

console.log("from A module", A)
console.log("from B module", B)

console.log("testing std node modules", path.delimiter)
console.log("testing installed node_modules", moment().format())
