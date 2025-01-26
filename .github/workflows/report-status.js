module.exports = async ({ github, context, core }) => {
  const { owner, repo } = context.repo;
  const sha = context.sha;

  try {
    await github.rest.repos.createCommitStatus({
      owner,
      repo,
      sha,
      state: context.job.status === 'success' ? 'success' : 'failure',
      target_url: `${process.env.GITHUB_SERVER_URL}/${owner}/${repo}/actions/runs/${context.runId}`,
      description: context.job.status === 'success' ? 'E2E tests passed' : 'E2E tests failed',
      context: 'Playwright Tests'
    });
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`);
  }
}; 