
import { writeFile } from "fs";
import { sysInfo } from "./os-module.js"

writeFile('mySys.txt', sysInfo, (err) => {
if (err){
  console.error("Ошибка!");
  return;
}
console.log("Файл успешно записан!");
})