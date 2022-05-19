# action-replace-pr-title
Replace a pull request title according to the specified expression
# Usage
```yaml
name: PR title replase

on:
  pull_request:
    types: [opened]
    
jobs:
  replace-title:
    runs-on: ubuntu-latest
    steps:
      - name: "Checkout repository"
        uses: actions/checkout@v1

      - name: replace pr title
        uses: KazanExpress/action-replace-pr-title@1.0.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          find: "^.*$"
          replace: "Release v1.0.0"
```
# input
- `github_token`: **required** GITHUB_TOKEN for changing a pull request title.
- `find`: What to find (could be a regex).
- `replace`: Replace found part with.
