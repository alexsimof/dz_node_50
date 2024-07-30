import { platform, arch, freemem, totalmem, cpus } from 'os';


const system = platform();
const architect = arch();
const freeMemory = freemem();
const totalMemory = totalmem();
const {model} = cpus()[0];
const numberCores = cpus().length;

function convertByteToGigaByte(numb) {
  let numbGb = (numb/(1024 ** 3)).toFixed(2)
  return numbGb
}

export const sysInfo = `
  Platform: ${system}
  Arch: ${architect}
  Free: ${convertByteToGigaByte(freeMemory)}Гб.
  Total: ${convertByteToGigaByte(totalMemory)}Гб.
  Cpu: ${model}
  Cores: ${numberCores}
  `
// (freeMemory/(1024 ** 3)).toFixed(2)
// (totalMemory/(1024 ** 3)).toFixed(2)