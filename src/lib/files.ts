import * as fse from 'fs-extra';
import { prompt } from 'inquirer';
import { failSpinner, startSpinner, successSpinner } from './spinner';
import { error, info } from './logger';
import * as validate from 'validate-npm-package-name';
export const checkDirectory = async (target: string, options: Record<string, unknown>) => {
  try {
    if (options.force) {
      await fse.removeSync(target);
      return Promise.resolve(true);
    }

    const { isOverwrite } = await prompt([
      {
        name: 'isOverwrite',
        type: 'list',
        message: `目录 ${target} 已存在，请选择：`,
        choices: [
          { name: '覆盖', value: true },
          { name: '取消', value: false },
        ],
      },
    ]);

    if (!isOverwrite) return Promise.resolve(false);
    startSpinner(`正在删除目录 ${target} ...`);
    await fse.removeSync(target);
    successSpinner(`目录 ${target} 删除成功`);
    return Promise.resolve(true);
  } catch (e) {
    failSpinner(`目录 ${target} 删除失败`);
    return Promise.reject(e);
  }
};

export const checkProjectName = async (projectName: string, cb) => {
  const { validForNewPackages, errors } = validate(projectName);
  if (!validForNewPackages) {
    error(`项目名称 【${projectName}】 不合法: ${errors}`);
    await cb();
  }
};
