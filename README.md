1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://andriypt82.github.io/js_growth_table_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Growth table

Let's blow up this table!

Your task sounds simple: Do you see yellow buttons? Give the table the opportunity to grow in different directions.

Preview:
![Preview](./src/images/4x4.png)

Some rules:
- Click on the button with class `append-row` should append a new row to the table.
- Click on the button with class `remove-row` should remove the last row from the table.
- Click on the button with class `append-column` should append a new column to the table.
- Click on the button with class `remove-column` should remove the last column from the table.
- The max count of rows or columns is 10.
- The min count of rows or columns is 2.
- If the count of columns or rows reaches maximum or minimum, set disabled the corresponding button.

As always, on JS Advanced course you do not need to change the HTML layout or CSS styles.

Examples:
![10x10](./src/images/10x10.png)

![2x2](./src/images/2x2.png)

![3x10](./src/images/3x10.png)

