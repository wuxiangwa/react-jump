# react-jump
Jump component is based on jump.js for React


## Installation

```bash
npm install react-jump
```

## Usage

```jsx
import { BackToTop, Jump } from 'react-jump';

const App => () =>
  <div>
      // 跳回顶部
      <BackToTop options={object} className='cars'><button>UP</button></BackToTop>
      // 跳到你想去的地方
      <Jump target={'.cars'}><span style={{color: 'red'}}>i want to go cars</span></Jump>
  </div>

export default App
```
