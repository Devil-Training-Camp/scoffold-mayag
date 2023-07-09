import { program } from 'commander';
import { cyan } from 'chalk';
import * as figlet from 'figlet';
import * as pkg from '../package.json';
import { create } from './create';

program.version(`scm ${pkg.version}`).usage('<command> [options]');

program
  .command('create [projectName]')
  .description('创建项目')
  .option('-f, --force', '如果已存在则强制覆盖')
  .option('-t, --template <templateName>', '指定模板名称')
  .action((projectName, options) => {
    create(projectName, options);
  });

// program.on('--help', () => {
//   console.log(
//     cyan(
//       figlet.textSync('scm', {
//         font: 'avatar',
//         horizontalLayout: 'default',
//         verticalLayout: 'default',
//         width: 80,
//         whitespaceBreak: true,
//       }),
//     ),
//   );
// });

program.parse(process.argv);
