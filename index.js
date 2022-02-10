async function setPrTitle() {
  const core = require("@actions/core");
  const github = require("@actions/github");

  try {
    const inputs = {
      githubToken: core.getInput("github_token", { required: true }),
      find: core.getInput("find"),
      replace: core.getInput("replace"),
    };
    const octokit = github.getOctokit(inputs.githubToken);

    const params = {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: github.context.payload.pull_request.number,
      title: github.context.payload.pull_request.title,
    };

    if (inputs.find) {
      core.info(`Replacing ${inputs.find}`);
      params.title = params.title.replace(
        new RegExp(inputs.find, "g"),
        inputs.replace
      );
    }

    core.setOutput("title", params.title);

    octokit.rest.pulls.update(params);
  } catch (error) {
    core.setFailed(error.message);
  }
}

setPrTitle();
