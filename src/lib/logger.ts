import * as chalk from 'chalk';

export const warn = (msg: string) => {
  console.log(chalk.yellow(msg));
};

export const error = (msg: string) => {
  console.log(chalk.red(msg));
};

export const success = (msg: string) => {
  console.log(chalk.green(msg));
};

export const info = (msg: string) => {
  console.log(chalk.blue(msg));
};
