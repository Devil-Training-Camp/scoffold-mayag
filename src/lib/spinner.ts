import * as ora from 'ora';

const spinner = ora();

export const startSpinner = (msg: string) => {
  spinner.start(msg);
  spinner.stopAndPersist({
    symbol: '🚀',
    text: msg,
  });
};

export const successSpinner = (msg: string) => {
  spinner.stopAndPersist({
    symbol: '✅',
    text: msg,
  });
};

export const failSpinner = (msg: string) => {
  spinner.stopAndPersist({
    symbol: '❌',
    text: msg,
  });
};
