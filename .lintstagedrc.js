const path = require('path');
module.exports = {
  '*.{md,html}': 'prettier --write git add',
  '*.ts': absolutePaths => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map(file => path.relative(cwd, file));
    return relativePaths.map(path => `prettier --write '${path}' ng lint --files ${path} git add`);
  }
};
