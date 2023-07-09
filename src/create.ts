import { prompt } from 'inquirer';
import * as fse from 'fs-extra';
import { checkDirectory, checkProjectName, error } from './lib';
import * as path from 'path';

const getProjectName = async projectName => {
  const answers = await prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称',
      default: 'scm-project',
    },
  ]);
  projectName = answers.projectName;
  await checkProjectName(projectName, getProjectName);
  return projectName;
};

export const create = async (projectName: string, options: Record<string, unknown>) => {
  if (!projectName) {
    projectName = await getProjectName(projectName);
  }

  try {
    const targetDirectory = path.resolve(process.cwd(), projectName);
    if (fse.existsSync(targetDirectory)) {
      const res = await checkDirectory(targetDirectory, options);
      if (!res) return;
    }
    if (options.template) {
      await prompt([
        {
          type: 'list',
          name: 'template',
          message: '请选择模板',
          choices: ['vue2-template', 'vue3-template', 'node-template'],
        },
      ]).then(answers => {
        options.template = answers.template;
      });
    }

    await prompt([
      {
        type: 'confirm',
        name: 'useTypeScript',
        message: '是否使用 TypeScript',
        default: false,
      },
      {
        type: 'confirm',
        name: 'useEslint',
        message: '是否使用 Eslint',
        default: false,
      },
      {
        type: 'confirm',
        name: 'usePrettier',
        message: '是否使用 Prettier',
        default: false,
      },
      {
        type: 'confirm',
        name: 'useLintStaged',
        message: '是否使用 lint-staged',
        default: false,
        when: ({ useEslint, usePrettier }) => useEslint && usePrettier,
      },
      {
        type: 'list',
        name: 'useCssPreprocessor',
        message: '请选择 CSS 预处理器',
        choices: ['Less', 'Sass', 'Stylus', 'PostCSS', 'None'],
        default: 'Less',
      },
      {
        type: 'list',
        name: 'useBuildTool',
        message: '请选择打包工具',
        choices: ['Webpack', 'Vite', 'Rollup', 'None'],
        default: 'Webpack',
      },
    ]).then(answers => {
      const { useTypeScript, useEslint, usePrettier, useLintStaged, useCssPreprocessor, useBuildTool } = answers;
    });
  } catch (e) {
    error(e.message);
  }
};
