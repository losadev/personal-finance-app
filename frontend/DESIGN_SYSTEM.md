# Finance design system

Source: [Figma — Design System](https://www.figma.com/design/UvHsx49Qaj0FZG0dm5Tjho/personal-finance-app?node-id=182-285).

`src/styles/design-tokens.css` is the source of truth for the complete palette,
Public Sans text presets, spacing and radii. Semantic tokens (`background`,
`surface`, `foreground`, `muted`, `border`, `accent`, `danger`) reference those
foundations. `src/styles/design-system.css` contains shared presentation primitives.
Both load once through `src/styles.css`; login and register consume the same styles.

The global styles are registered in `angular.json`, so every Angular route and
lazy-loaded feature can use them without importing an auth module, copying CSS,
or changing component encapsulation. They are ordinary CSS classes on native
HTML, not Angular components: use them directly with `routerLink`, `ngModel` or
`formControlName` when the feature imports the corresponding Angular module.
Feature code owns behavior, validation, routing and pagination state.

## Usage

Prefer native HTML controls and `finance-*` classes. No new UI dependency is required.

```html
<section class="finance-card finance-stack">
  <h1 class="finance-text-1">Account</h1>
  <div class="finance-field">
    <label class="finance-label" for="account-email">Email</label>
    <input class="finance-input" id="account-email" type="email"
      aria-describedby="account-email-help">
    <p class="finance-field-help" id="account-email-help">Your email address</p>
  </div>
  <button class="finance-button finance-button--primary" type="button">Save</button>
</section>
```

- Typography: `finance-text-1` through `finance-text-5`, plus `finance-text-4-bold`
  and `finance-text-5-bold`. Presets match 32/20/16/14/12 px at the default root size.
- Buttons: `finance-button` with `--primary`, `--secondary`, `--tertiary` or
  `--destroy`. Add `finance-button--block` only when a full-width action is wanted.
  Use native `disabled` for unavailable actions.
- Fields: `finance-field`, `finance-label`, `finance-input`, `finance-field-help`
  and `finance-field-error`. Set `aria-invalid="true"` and link the error using
  `aria-describedby` after validation. Native `required` validation stays available.
- Input actions: wrap the input in `finance-input-group` and use a native button
  with `finance-input-action`, an accessible name and `type="button"`.
- Input prefixes: add `finance-input-group--prefix` to the group and use
  `finance-input-prefix` for a currency label or leading asset. A native select
  uses `finance-input finance-select`; its caret comes from the local SVG.
- Cards/forms: `finance-card`, `finance-stack`, `finance-form`,
  `finance-form-fields`, `finance-inline-prompt`, `finance-link`. These have no
  dependency on authentication. Earlier `finance-auth-*` names remain aliases.
- Navigation presentation: `finance-sidebar`, `finance-sidebar-menu`,
  `finance-nav-link`, `finance-bottom-nav`. Supply real router links, accessible
  names and `aria-current="page"` on the current destination. Use
  `finance-sidebar-brand` around the logo. `finance-sidebar--minimized` collapses
  the rail and visually hides `finance-nav-label` while retaining accessible link
  names. Use `logo-small.svg` in the collapsed rail. Feature code chooses rail or
  bottom navigation for its layout and controls the collapse state.
- Pagination presentation: `finance-pagination`, `finance-pagination-pages`,
  `finance-page-button`. Wire buttons to the feature's real page state and set
  `aria-current="page"` on the current page; disable unavailable directions.
- Avatars: `finance-avatar` for an actual image with appropriate alternative text.

Tailwind exposes the same tokens: `bg-finance-background`, `text-finance-grey-900`,
`text-finance-1`, `p-finance-400`, `rounded-finance-card`. The shared component
classes are loaded globally so future screens can reuse them. All colors resolve to
CSS variables; avoid duplicating hex values in individual components.

For example, any feature can compose a filter using the shared input and original
asset without importing a UI module:

```html
<div class="finance-field">
  <label class="finance-label" for="transaction-search">Search transactions</label>
  <div class="finance-input-group">
    <input class="finance-input" id="transaction-search" type="search">
    <button class="finance-input-action" type="button" aria-label="Search">
      <img src="assets/images/icon-search.svg" alt="">
    </button>
  </div>
</div>
```

## Shared assets

Original starter assets live in `public/assets` and Angular serves them as
`assets/...`; do not download or redraw equivalent icons. Keep the SVGs at their
intrinsic dimensions unless a design specifically requires another size.

| Resource | Public path |
| --- | --- |
| Logo / collapsed logo | `assets/images/logo-large.svg`, `assets/images/logo-small.svg` |
| Password visibility | `assets/images/icon-show-password.svg`, `assets/images/icon-hide-password.svg` |
| Navigation | `assets/images/icon-nav-{overview,transactions,budgets,pots,recurring-bills}.svg` |
| Menu / search / sorting | `assets/images/icon-minimize-menu.svg`, `assets/images/icon-search.svg`, `assets/images/icon-sort-mobile.svg`, `assets/images/icon-filter-mobile.svg` |
| Pagination / selects | `assets/images/icon-caret-{left,right,down}.svg` |
| Status / controls | `assets/images/icon-bill-{paid,due}.svg`, `assets/images/icon-selected.svg`, `assets/images/icon-ellipsis.svg`, `assets/images/icon-close-modal.svg` |
| Finance illustrations | `assets/images/icon-pot.svg`, `assets/images/icon-recurring-bills.svg`, `assets/images/illustration-authentication.svg` |
| People and companies | `assets/images/avatars/*.jpg` |
| Local font / license | `assets/fonts/PublicSans-VariableFont_wght.ttf`, `assets/fonts/PublicSans-Italic-VariableFont_wght.ttf`, `assets/fonts/OFL.txt` |

Public Sans is self-hosted through `@font-face` in the tokens stylesheet. Both
regular and italic variable fonts share `--finance-font-family`; no external font
service is required. Paths in braces above describe available filenames; expand
them to a real filename when used in HTML.

## Scope and verification

The existing application currently contains login and register screens. Shared
styles are applied to both; the remaining primitives are ready for future finance
screens without inventing new routes or backend behavior. The registration form
retains its existing fields. Authentication API integration is separate work.

The original local logo and eye assets are used in the auth UI. No temporary
Figma URLs are used at runtime. The remaining icon/avatar assets are available
for feature screens; a style primitive does not itself implement a complete
interactive sidebar, paginator or authentication flow. Check final page layouts
against their corresponding Figma screens when implementing those features.
