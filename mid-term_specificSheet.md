
---

# 1 — Click Counter (increment displayed number)

**Problem:** Every click of the button increases the number shown in the `<p>`. Keep the count in JS.

**Starter HTML**

```html
<button id="count-btn">Click Me</button>
<p id="count">0</p>

<script>
  // JS goes here
</script>
```

**Expected behavior:** 0 → 1 → 2 → ... each click increments by 1.

**Solution**

```html
<button id="count-btn">Click Me</button>
<p id="count">0</p>

<script>
  const btn = document.getElementById('count-btn');
  const countEl = document.getElementById('count');
  let count = 0;

  btn.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
  });
</script>
```

**Simple tests:** Click once → `1`. Click ten times → `10`.

---

# 2 — Show Typed Text Live (update as user types)

**Problem:** Show the current input value live in a `<p>` beneath the input (update on every keystroke).

**Starter HTML**

```html
<input id="text-input" type="text" />
<p id="preview"></p>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Whatever the user types appears immediately in `#preview`.

**Solution**

```html
<input id="text-input" type="text" />
<p id="preview"></p>

<script>
  const input = document.getElementById('text-input');
  const preview = document.getElementById('preview');

  input.addEventListener('input', () => {
    preview.textContent = input.value;
  });
</script>
```

**Tests:** Type "hello" → preview shows "hello". Delete text → preview empty.

---

# 3 — Toggle Box Visibility

**Problem:** Toggle a box between visible and hidden when a button is clicked (use inline style or class).

**Starter HTML**

```html
<button id="toggle-btn">Toggle Box</button>
<div id="box" style="width:100px;height:100px;background:red;"></div>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Each click alternates between visible and hidden.

**Solution**

```html
<button id="toggle-btn">Toggle Box</button>
<div id="box" style="width:100px;height:100px;background:red;"></div>

<script>
  const toggleBtn = document.getElementById('toggle-btn');
  const box = document.getElementById('box');

  toggleBtn.addEventListener('click', () => {
    if (box.style.display === 'none') {
      box.style.display = '';
    } else {
      box.style.display = 'none';
    }
  });
</script>
```

**Tests:** Click hides the box, click again shows it.

---

# 4 — Change Box to a Random Color

**Problem:** Click a button to set a box's background to a random RGB color.

**Starter HTML**

```html
<button id="color-btn">Change Color</button>
<div id="color-box" style="width:100px;height:100px;"></div>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Each click gives a different-looking color.

**Solution**

```html
<button id="color-btn">Change Color</button>
<div id="color-box" style="width:100px;height:100px;"></div>

<script>
  const colorBtn = document.getElementById('color-btn');
  const colorBox = document.getElementById('color-box');

  function rand255() {
    return Math.floor(Math.random() * 256);
  }

  colorBtn.addEventListener('click', () => {
    const r = rand255(), g = rand255(), b = rand255();
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
</script>
```

**Tests:** Multiple clicks produce different `background-color` values.

---

# 5 — Add Names to a List From Input (ignores blank input)

**Problem:** Take text from input and add it as an `<li>` to the list. Trim and ignore empty strings.

**Starter HTML**

```html
<input id="name-input" />
<button id="add-name-btn">Add Name</button>
<ul id="name-list"></ul>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Non-empty names are appended; input clears after add.

**Solution**

```html
<input id="name-input" />
<button id="add-name-btn">Add Name</button>
<ul id="name-list"></ul>

<script>
  const input = document.getElementById('name-input');
  const btn = document.getElementById('add-name-btn');
  const ul = document.getElementById('name-list');

  btn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') return;
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    input.value = '';
  });
</script>
```

**Tests:** Add "Asha" → `<li>Asha</li>` appears. Add spaces only → nothing added.

---

# 6 — Disable Button After One Click

**Problem:** The button should become disabled and change text after the first click.

**Starter HTML**

```html
<button id="disable-btn">Click Once</button>

<script>
  // JS goes here
</script>
```

**Expected behavior:** One click disables the button and updates text to "Disabled".

**Solution**

```html
<button id="disable-btn">Click Once</button>

<script>
  const button = document.getElementById('disable-btn');

  button.addEventListener('click', function handler() {
    button.disabled = true;
    button.textContent = 'Disabled';
    // optional: remove this listener
    button.removeEventListener('click', handler);
  });
</script>
```

**Tests:** Click once → greyed out and not clickable.

---

# 7 — Show Image on Button Click (lazy show)

**Problem:** The image is initially hidden. Clicking the button shows it.

**Starter HTML**

```html
<button id="show-img-btn">Show Image</button>
<img id="my-img" src="https://via.placeholder.com/150" style="display:none"/>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Clicking shows the image (use `style.display`).

**Solution**

```html
<button id="show-img-btn">Show Image</button>
<img id="my-img" src="https://via.placeholder.com/150" style="display:none"/>

<script>
  const btn = document.getElementById('show-img-btn');
  const img = document.getElementById('my-img');

  btn.addEventListener('click', () => {
    img.style.display = '';
  });
</script>
```

**Tests:** Click once → image visible.

---

# 8 — Click to Toggle "Done" (line-through using class)

**Problem:** Clicking any `<li>` toggles a `.done` class that visually marks it done (e.g., line-through).

**Starter HTML**

```html
<style>
  .done { text-decoration: line-through; opacity: 0.7; }
</style>

<ul id="todo">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Clicking a list item toggles its done state.

**Solution**

```html
<style>
  .done { text-decoration: line-through; opacity: 0.7; }
</style>

<ul id="todo">
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
</ul>

<script>
  const ul = document.getElementById('todo');

  ul.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
</script>
```

**Tests:** Click Task 2 → becomes line-through. Click again → returns.

---

# 9 — Count Number of `<li>` Items

**Problem:** Clicking a button should count current `<li>` elements and display the count.

**Starter HTML**

```html
<button id="count-items-btn">Count Items</button>
<ul id="items">
  <li>A</li>
  <li>B</li>
</ul>
<p id="output"></p>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Displays current list length (updates if items change).

**Solution**

```html
<button id="count-items-btn">Count Items</button>
<ul id="items">
  <li>A</li>
  <li>B</li>
</ul>
<p id="output"></p>

<script>
  const btn = document.getElementById('count-items-btn');
  const output = document.getElementById('output');

  btn.addEventListener('click', () => {
    const items = document.querySelectorAll('#items li');
    output.textContent = `Items: ${items.length}`;
  });
</script>
```

**Tests:** Add a new `<li>` (manually) then click → count increases.

---

# 10 — Change Heading Text on Click

**Problem:** Clicking the button replaces the heading text with a new message.

**Starter HTML**

```html
<h2 id="title">Hello</h2>
<button id="change-title-btn">Change</button>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Heading updates to "Welcome!" (or any custom string).

**Solution**

```html
<h2 id="title">Hello</h2>
<button id="change-title-btn">Change</button>

<script>
  const btn = document.getElementById('change-title-btn');
  const title = document.getElementById('title');

  btn.addEventListener('click', () => {
    title.textContent = 'Welcome to the DOM practice!';
  });
</script>
```

**Tests:** Click → heading changes.

---

# 11 — Select Box Highlight (single active border)

**Problem:** Many `.box` divs. Clicking one adds `.active` border; remove from others.

**Starter HTML**

```html
<style>
  .box { width:60px;height:60px;background:#ddd;display:inline-block;margin:4px;cursor:pointer; }
  .active { border: 3px solid #333; }
</style>

<div id="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Only the clicked box has `.active`.

**Solution**

```html
<style>
  .box { width:60px;height:60px;background:#ddd;display:inline-block;margin:4px;cursor:pointer; }
  .active { border: 3px solid #333; }
</style>

<div id="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>

<script>
  const container = document.getElementById('container');
  const boxes = container.querySelectorAll('.box');

  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('box')) return;
    boxes.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  });
</script>
```

**Tests:** Click box 1 → active. Click box 2 → only box 2 active.

---

# 12 — Character Counter for Input

**Problem:** Display the number of characters currently typed into an input (update live).

**Starter HTML**

```html
<input id="char-input" />
<p id="char-count">0</p>

<script>
  // JS goes here
</script>
```

**Expected behavior:** `#char-count` equals `input.value.length`.

**Solution**

```html
<input id="char-input" />
<p id="char-count">0</p>

<script>
  const input = document.getElementById('char-input');
  const count = document.getElementById('char-count');

  input.addEventListener('input', () => {
    count.textContent = input.value.length;
  });
</script>
```

**Tests:** Type "abc" → 3 displayed.

---

# 13 — Add Placeholder Images on Click

**Problem:** Each click adds a new `<img>` to the container (use placeholder images).

**Starter HTML**

```html
<button id="add-img-btn">Add Image</button>
<div id="img-container"></div>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Every click appends a new image element.

**Solution**

```html
<button id="add-img-btn">Add Image</button>
<div id="img-container"></div>

<script>
  const btn = document.getElementById('add-img-btn');
  const container = document.getElementById('img-container');
  let imgCount = 0;

  btn.addEventListener('click', () => {
    imgCount++;
    const img = document.createElement('img');
    img.src = `https://via.placeholder.com/100?text=${imgCount}`;
    img.alt = `Placeholder ${imgCount}`;
    img.style.margin = '6px';
    container.appendChild(img);
  });
</script>
```

**Tests:** Click 3 times → 3 images appear.

---

# 14 — Double-Click to Remove An Element

**Problem:** Double-clicking a box removes it from the DOM.

**Starter HTML**

```html
<div id="removable" style="width:100px;height:100px;background:orange;cursor:pointer;">dblclick</div>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Double-click removes the box (no confirmation).

**Solution**

```html
<div id="removable" style="width:100px;height:100px;background:orange;cursor:pointer;">dblclick</div>

<script>
  const box = document.getElementById('removable');

  box.addEventListener('dblclick', () => {
    box.parentNode.removeChild(box);
    // or box.remove(); in modern browsers
  });
</script>
```

**Tests:** Double-click → element disappears.

---

# 15 — Capitalize Input Text on Click

**Problem:** Clicking a button turns the input text to uppercase and replaces the input value.

**Starter HTML**

```html
<input id="cap-input" />
<button id="cap-btn">Capitalize</button>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Input value becomes uppercase.

**Solution**

```html
<input id="cap-input" />
<button id="cap-btn">Capitalize</button>

<script>
  const input = document.getElementById('cap-input');
  const btn = document.getElementById('cap-btn');

  btn.addEventListener('click', () => {
    input.value = input.value.toUpperCase();
  });
</script>
```

**Tests:** Type "hello" and click → "HELLO".

---

# 16 — Password Show/Hide Toggle

**Problem:** Toggle an `<input type="password">` between password and text on button click; update button text accordingly.

**Starter HTML**

```html
<input id="pass" type="password" />
<button id="toggle-pass">Show</button>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Button toggles between "Show" and "Hide", and field type toggles.

**Solution**

```html
<input id="pass" type="password" />
<button id="toggle-pass">Show</button>

<script>
  const passInput = document.getElementById('pass');
  const toggleBtn = document.getElementById('toggle-pass');

  toggleBtn.addEventListener('click', () => {
    if (passInput.type === 'password') {
      passInput.type = 'text';
      toggleBtn.textContent = 'Hide';
    } else {
      passInput.type = 'password';
      toggleBtn.textContent = 'Show';
    }
  });
</script>
```

**Tests:** Click shows password text and button says "Hide". Click again hides.

---

# 17 — Add Consecutive Numbers to a List

**Problem:** Each click appends the next natural number as an `<li>` to the list, starting from 1.

**Starter HTML**

```html
<button id="num-btn">Add Number</button>
<ul id="num-list"></ul>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Clicks produce `1, 2, 3, ...` items.

**Solution**

```html
<button id="num-btn">Add Number</button>
<ul id="num-list"></ul>

<script>
  const btn = document.getElementById('num-btn');
  const ul = document.getElementById('num-list');
  let n = 0;

  btn.addEventListener('click', () => {
    n++;
    const li = document.createElement('li');
    li.textContent = n;
    ul.appendChild(li);
  });
</script>
```

**Tests:** 3 clicks → list contains 1, 2, 3.

---

# 18 — Set Footer to Current Year

**Problem:** Clicking "Set Year" writes the current year into the footer element.

**Starter HTML**

```html
<footer id="year">----</footer>
<button id="set-year">Set Year</button>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Clicking sets the exact current year (e.g., 2025).

**Solution**

```html
<footer id="year">----</footer>
<button id="set-year">Set Year</button>

<script>
  const footer = document.getElementById('year');
  const btn = document.getElementById('set-year');

  btn.addEventListener('click', () => {
    const year = new Date().getFullYear();
    footer.textContent = year;
  });
</script>
```

**Tests:** Click shows `2025` (or current year).

---

# 19 — Increase Font Size Every Click

**Problem:** Clicking a "Zoom" button increases the font size of a paragraph by 2px each time.

**Starter HTML**

```html
<p id="text">Zoom Me</p>
<button id="zoom-btn">Zoom</button>

<script>
  // JS goes here
</script>
```

**Expected behavior:** 16px → 18px → 20px ... (starting size should be computed).

**Solution**

```html
<p id="text">Zoom Me</p>
<button id="zoom-btn">Zoom</button>

<script>
  const p = document.getElementById('text');
  const btn = document.getElementById('zoom-btn');

  // ensure we can compute initial size
  const style = window.getComputedStyle(p);
  let size = parseFloat(style.fontSize) || 16;

  btn.addEventListener('click', () => {
    size += 2;
    p.style.fontSize = size + 'px';
  });
</script>
```

**Tests:** Click once → bigger text; click again → bigger.

---

# 20 — Click to Duplicate a Box (clone node)

**Problem:** Clicking the box clones it and appends the clone to a container.

**Starter HTML**

```html
<div id="source" style="width:80px;height:80px;background:green;cursor:pointer;"></div>
<div id="clone-container"></div>

<script>
  // JS goes here
</script>
```

**Expected behavior:** Each click makes an identical clone appended to `#clone-container`.

**Solution**

```html
<div id="source" style="width:80px;height:80px;background:green;cursor:pointer;"></div>
<div id="clone-container"></div>

<script>
  const source = document.getElementById('source');
  const container = document.getElementById('clone-container');

  source.addEventListener('click', () => {
    const clone = source.cloneNode(true);  // deep: true for children if any
    // optionally change clone styling or remove id to avoid duplicates
    clone.id = '';
    clone.style.margin = '6px';
    container.appendChild(clone);
  });
</script>
```

**Tests:** Click 3 times → 3 clones in the container.

---

