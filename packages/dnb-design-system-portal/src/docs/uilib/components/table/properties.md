---
showTabs: true
---

## Properties

### `<Table>`

| Properties                                  | Description                                                                                                                                                                                          |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accordion`                                 | _(optional)_ set to `true` if you have one or more rows that contains an accordion content. Defaults to `false`.                                                                                     |
| `border`                                    | _(optional)_ use `true` to show borders between table data cells. Defaults to `false`.                                                                                                               |
| `outline`                                   | _(optional)_ use `true` to show a outline border around the table. Defaults to `false`.                                                                                                              |
| `sticky`                                    | _(optional)_ use `true` to enable a sticky Table header. Or use `css-position` to enable the CSS based scroll behavior. Defaults to `false`.                                                         |
| `stickyOffset`                              | _(optional)_ defines the offset (top) in `rem` from where the header should start to stick. You may define your app header height here, if you have a sticky header on your page. Defaults to `0`.   |
| `size`                                      | _(optional)_ spacing size inside the table header and data. Options: `small` \| `medium` \| `large` \. Defaults to `large`.                                                                          |
| `fixed`                                     | _(optional)_ if set to `true`, the table will behave with a fixed table layout, using: `table-layout: fixed;`. Use e.g. CSS `width: 40%` on a table column to define the width. Defaults to `false`. |
| `skeleton`                                  | _(optional)_ if set to `true`, an overlaying skeleton with animation will be shown.                                                                                                                  |
| ~~`variant`~~ (not implemented yet)         | _(coming)_ defines the style variant of the table. Options: `basis` . Defaults to `generic`.                                                                                                         |
| [Space](/uilib/components/space/properties) | _(optional)_ spacing properties like `top` or `bottom` are supported.                                                                                                                                |

### Table Row `<Tr>`

| Properties    | Description                                                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`     | _(optional)_ defines the variant of the current row. If set to either `odd` or `even`, the next row one will continue with the opposite. Defaults to automatic. |
| `noWrap`      | _(optional)_ if set to `true`, the inherited header text will not wrap to new lines. Defaults to `false`.                                                       |
| `expanded`    | _(optional)_ use `true` to render the `<Tr>` initially as expanded. Defaults to `false`.                                                                        |
| `disabled`    | _(optional)_ use `true` to disable the `<Tr>` to be accessible as an interactive element. Defaults to `false`.                                                  |
| `noAnimation` | _(optional)_ use `true` to disable the expand/collapse animation. Defaults to `false`.                                                                          |

### Table Header `<Th>`

| Properties | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `sortable` | _(optional)_ defines the table header as sortable if set to `true` (ascending). Defaults to `false`. |
| `active`   | _(optional)_ defines the sortable column as the current active (ascending). Defaults to `false`.     |
| `reversed` | _(optional)_ defines the sortable column as in reversed order (descending). Defaults to `false`.     |
| `noWrap`   | _(optional)_ if set to `true`, the header text will not wrap to new lines. Defaults to `false`.      |

### Table Data `<Td>`

| Properties  | Description                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
| `noSpacing` | _(optional)_ if set to `true`, no padding will be added. Defaults to `false`.             |
| `spacing`   | _(optional)_ set to `horizontal` for padding on left and right side. Defaults to `false`. |
