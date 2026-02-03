// const fs = require("fs/promises");
// const path = require(`path`);

import { fileURLToPath } from 'node:url';
import fs from "fs/promises";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__dirname);

const samplePath = path.join(__dirname, "marks.txt");

const sampleFileData = await fs.readFile(samplePath, { encoding: "utf-8" });

const marksData = sampleFileData.split(`\r\n`);
const doubledMarksData = marksData.map((mark) => { return mark * 2; });

// fs.writeFile(samplePath, "Hello World", { flag: "a" });

const final = doubledMarksData.reduce((acc, curr) => { return acc += (curr + "\r\n"); }, "");

fs.writeFile(samplePath, final);

console.log(final);