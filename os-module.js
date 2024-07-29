import { platform, arch, freemem, totalmem, cpus } from 'os';
import { writeFile } from "fs";

const system = platform();
const architect = arch();
const freeMemory = freemem();
const totalMemory = totalmem();
const {model} = cpus()[0];
const numberCores = cpus().length;

const sysInfo = `
  Platform: ${system}
  Arch: ${architect}
  Free: ${(freeMemory/(1024 ** 3)).toFixed(2)}Гб.
  Total: ${(totalMemory/(1024 ** 3)).toFixed(2)}Гб.
  Cpu: ${model}
  Cores: ${numberCores}
  `

writeFile('mySys.txt', sysInfo, (err) => {
if (err){
  console.error("Ошибка!");
  return;
}
console.log("Файл успешно записан!");
})