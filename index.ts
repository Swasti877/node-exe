import decompress from "decompress";
import { spawn } from "node:child_process";
import * as readline from "node:readline";

const unzipToFolder: string = "solution";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// C:\Users\bhago\Downloads\Source.zip
// C:\Users\bhago\Downloads\vue-pinia
rl.question(`Source Code Path:  `, (sourceCodePath: string) => {
  rl.question("Question Number:   ", (questionNumber: string) => {
    rl.question(
      "React[r] / Angular[a] / ReactVite:   ",
      (frameWorkName: string) => {
        const frameworkRunCmd: string =
          getNpmRunCommandParticularFrameWork(frameWorkName);

        console.log(`Path: ${sourceCodePath}`);
        console.log(`Question Number: ${questionNumber}`);
        console.log(`Framework run cmd: ${frameworkRunCmd}`);

        decompress(sourceCodePath, unzipToFolder).then((_files: any) => {
          const cmd = `cd ${unzipToFolder}/Q00${questionNumber} && npm i && ${frameworkRunCmd}`;
          const clientChildProcess = spawn(cmd, {
            shell: true,
          });

          clientChildProcess.stdout.on("data", (data) => {
            console.log(`${data}`);
          });

          clientChildProcess.stderr.on("data", (err) => {
            console.error(err);
          });

          clientChildProcess.on("close", (code) => {
            console.error(code);
          });

          let runTestCase: boolean = true;

          rl.question("Path For Test Cases:   ", async (absPathOfTestCase) => {
            const cmd = `cd ${absPathOfTestCase} && npm run dev`;

            const testCaseProcess = spawn(cmd, {
              shell: true,
            });

            testCaseProcess.stdout.on("data", (data) => {
              console.log(`${data}`);
            });

            testCaseProcess.stderr.on("data", (err) => {
              console.error(err);
            });

            testCaseProcess.on("close", (code) => {
              console.error(code);
            });
          });
        });
      }
    );
  });
});

const getNpmRunCommandParticularFrameWork = (frameworkName: string): string => {
  const frameWorkName = frameworkName.toLowerCase();
  if ("react".includes(frameWorkName)) return "npm run start";
  else if ("reactvite".includes(frameWorkName)) return "npm run dev";
  else if ("angular".includes(frameWorkName)) return "npx ng serve";
  return "";
};
