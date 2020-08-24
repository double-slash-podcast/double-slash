const repo = 'https://github.com/double-slash-podcast/double-slash/blob/master';

export const getGitUrl = fileAbsolutePath => {
  return `${repo}${fileAbsolutePath.slice(fileAbsolutePath.indexOf('/src'))}`;
};
