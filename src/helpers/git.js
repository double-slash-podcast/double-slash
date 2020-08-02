const repo = 'https://github.com/ipatate/double-slash/blob/master';

export const getGitUrl = fileAbsolutePath => {
  return `${repo}${fileAbsolutePath.slice(fileAbsolutePath.indexOf('/src'))}`;
};
