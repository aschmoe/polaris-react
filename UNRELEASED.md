# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

---

### Enhancements

- Moved icons to a separate npm package ([#686](https://github.com/Shopify/polaris-react/pull/686))
- Added `oneHalf` and `oneThird` props to `Layout` component ([#724](https://github.com/Shopify/polaris-react/pull/724))
- Added `helpText` prop to `ActionList` items ([#777](https://github.com/Shopify/polaris-react/pull/777))
- Updated `Page` header layout so actions take up less room on small screens ([#707](https://github.com/Shopify/polaris-react/pull/707))
- Added `alternateTool` prop to `ResourceList` component ([#812](https://github.com/Shopify/polaris-react/pull/812))

### Bug fixes

- Fixed `TextField` not showing the correct color while it has focus and an error ([#806](https://github.com/Shopify/polaris-react/pull/806))
- Fixed `ResourceList` not rendering `BulkActions` on initial load when items were selected ([#746](https://github.com/Shopify/polaris-react/pull/746))
- Fixed the new variant of the `Badge` component so that it is simpler and easier to read ([#751](https://github.com/Shopify/polaris-react/pull/751))
- Reverted a change that set the `autocomplete` property on `TextField` to `nope` when it was `false` ([#761](https://github.com/Shopify/polaris-react/pull/761))
- Added dismiss button for `CalloutCard` ([#353](https://github.com/Shopify/polaris-react/issues/353))
- Removed an extra tab stop from `ResourceList.Item` and make it unactionable while loading ([#745](https://github.com/Shopify/polaris-react/pull/745))
- Fixed `Checkbox` from losing focus when quickly toggled ([#717](https://github.com/Shopify/polaris-react/pull/717))
- Fixed the console error in the `PositionedOverlay` test environment ([#758](https://github.com/Shopify/polaris-react/pull/758))
- Fixed `ResourceList` not rendering a header after initial load (thanks to [@andrewpye](https://github.com/andrewpye) for the [original issue](https://github.com/Shopify/polaris-react/issues/735))

### Documentation

- Modified image paths to fit the [style guide](https://polaris.shopify.com)’s new Markdown parsing rules ([#753](https://github.com/Shopify/polaris-react/pull/753))

### Development workflow

- Added a slight delay to the Percy screenshot script to give time for components to render fully ([#704](https://github.com/Shopify/polaris-react/pull/704))
- Refactors to remove cyclical type imports ([#759](https://github.com/Shopify/polaris-react/pull/759), [#754](https://github.com/Shopify/polaris-react/pull/754), and [#767](https://github.com/Shopify/polaris-react/pull/767))

### Dependency upgrades

### Code quality

- Improve `withAppProvider`, `withSticky`, `withRef`, and `withContext` types to allow them to infer a components props ([#805](https://github.com/Shopify/polaris-react/pull/805))
- Refactored `Frame` and its subcomponents to use the `createContext` API instead of legacy context ([#803](https://github.com/Shopify/polaris-react/pull/803))
