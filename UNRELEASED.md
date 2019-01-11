# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

---

### Enhancements

### Bug fixes

### Documentation

### Development workflow

- Replaced our home-grown playground with Storybook (still acccessed through `yarn dev`) ([#768](https://github.com/Shopify/polaris-react/pull/768))
- Removed our usage of babel-node for build scripts - use plain node instead ([#836](https://github.com/Shopify/polaris-react/pull/836))
- Fixed an issue where deployments would use an old version of Yarn, and open a pull request to polaris-styleguide with thousands of deleted integrity hashes in `yarn.lock` ([#856](https://github.com/Shopify/polaris-react/pull/856))

### Dependency upgrades

### Code quality
