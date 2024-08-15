<a name="Y9O42"></a>
# 一. 组件的分类
React的组件相对于Vue更加的灵活和多样，按照不同的方式可以分成很多类组件: 

- 根据组件的定义方式，可以分为:函数组件(Functional Component )和类组件(Class Component); 
- 根据组件内部是否有状态需要维护，可以分成:无状态组件(Stateless Component )和有状态组件(Stateful Component); 
- 根据组件的不同职责，可以分成:展示型组件(Presentational Component)和容器型组件(Container Component);

<a name="i85h6"></a>
# 二. 组件的定义
<a name="cRyGN"></a>
## 1. 类组件

- 类组件的定义有如下要求： 
   - 组件的名称是大写字符开头（无论类组件还是函数组件） 
   - 类组件需要继承自 React.Component 
   - 类组件必须实现render函数 
- 使用class定义一个组件： 
   - constructor是可选的，我们通常在constructor中初始化一些数据； 
   - this.state中维护的就是我们组件内部的数据； 
   - render() 方法是 class 组件中唯一必须实现的方法；
```jsx
// rcc 类组件
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
```
<a name="QSmlI"></a>
### 1. render方法返回值
当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一:

-  React 元素:
- 通常通过 JSX 创建。
- 例如，<div /> 会被 React 渲染为 DOM 节点，<MyComponent /> 会被 React 渲染为自定义组件; p无论是 <div /> 还是 <MyComponent /> 均为 React 元素。
- 数组或 fragments:使得 render 方法可以返回多个元素。 n Portals:可以渲染子节点到不同的 DOM 子树中。
- 字符串或数值类型:它们在 DOM 中会被渲染为文本节点
- 布尔类型或 null:什么都不渲染。
<a name="eKeoV"></a>
## 2. 函数式组件

- 函数组件是使用function来进行定义的函数，只是这个函数会返回和类组件中render函数返回一样的内容。 
- 函数组件有自己的特点： 
   - 没有生命周期，也会被更新并挂载，但是没有生命周期函数； 
   - 没有this(组件实例）； 
   - 没有内部状态（state）；
```jsx
// rfc  函数式组件
import React from 'react'

export default function fun() {
  return (
    <div>
      
    </div>
  )
}
/**
 * 函数式组件的特点:
 *  1.没有this对象
 *  2.没有内部的状态
 */
```
<a name="Pouus"></a>
# 三. 组件的生命周期

1. 生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段; 
-  比如装载阶段(Mount)，组件第一次在DOM树中被渲染的过程;
- 比如更新过程(Update)，组件状态发生变化，重新更新渲染的过程; 
- 比如卸载过程(Unmount)，组件从DOM树中被移除的过程;
2. React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数: 
- 比如实现componentDidMount函数:组件已经挂载到DOM上时，就会回调;
- 比如实现componentDidUpdate函数:组件已经发生了更新时，就会回调;
- 比如实现componentWillUnmount函数:组件即将被移除时，就会回调;
<a name="xao2s"></a>
## 1. 生命周期解析
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21601157/1664525358673-f7ce5f35-4def-4fcb-a230-cbd1a6d6fb33.png#averageHue=%23f9f8f6&clientId=u0e70edfc-4730-4&from=paste&height=322&id=ua86eb42d&originHeight=643&originWidth=1131&originalType=binary&ratio=1&rotation=0&showTitle=false&size=87679&status=done&style=none&taskId=u46b8de32-d6a3-4a75-8106-adb2056a1e3&title=&width=565.5)
<a name="bEGQk"></a>
### 1. 挂载时
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下： 

- [constructor()](https://react.docschina.org/docs/react-component.html#constructor)
- [static getDerivedStateFromProps()](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops)
- [render()](https://react.docschina.org/docs/react-component.html#render)
- [componentDidMount()](https://react.docschina.org/docs/react-component.html#componentdidmount)
<a name="Ib9cU"></a>
### 2. 更新时
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下： 

- [static getDerivedStateFromProps()](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops)
- [shouldComponentUpdate()](https://react.docschina.org/docs/react-component.html#shouldcomponentupdate)
- [render()](https://react.docschina.org/docs/react-component.html#render)
- [getSnapshotBeforeUpdate()](https://react.docschina.org/docs/react-component.html#getsnapshotbeforeupdate)
- [componentDidUpdate()](https://react.docschina.org/docs/react-component.html#componentdidupdate)
<a name="yDPhl"></a>
### 3. 卸载时
当组件从 DOM 中移除时会调用如下方法： 

- [componentWillUnmount()](https://react.docschina.org/docs/react-component.html#componentwillunmount)
<a name="CJfMv"></a>
## 2. 生命周期函数
<a name="i7ltm"></a>
### 1. constructor
在 React 组件挂载之前，会调用它的构造函数。通常，在 React 中，构造函数仅用于以下两种情况： 

- 通过给 this.state 赋值对象来初始化[内部 state](https://react.docschina.org/docs/state-and-lifecycle.html)。 
- 为[事件处理函数](https://react.docschina.org/docs/handling-events.html)绑定实例 

注意： 

- **如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。**
- 在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
<a name="b5n41"></a>
### 2. render
render() 方法是 class 组件中唯一必须实现的方法。 <br />当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一： 

- **React 元素**。通常通过 JSX 创建。例如，<div /> 会被 React 渲染为 DOM 节点，<MyComponent /> 会被 React 渲染为自定义组件，无论是 <div /> 还是 <MyComponent /> 均为 React 元素。 
- **数组或 fragments**。 使得 render 方法可以返回多个元素。欲了解更多详细信息，请参阅 [fragments](https://react.docschina.org/docs/fragments.html) 文档。 
- **Portals**。可以渲染子节点到不同的 DOM 子树中。欲了解更多详细信息，请参阅有关 [portals](https://react.docschina.org/docs/portals.html) 的文档 
- **字符串或数值类型**。它们在 DOM 中会被渲染为文本节点 
- **布尔类型或 null**。什么都不渲染。（主要用于支持返回 test && <Child /> 的模式，其中 test 为布尔类型。)
<a name="v8xIb"></a>
### 3. componentDidMount
componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。 <br />componentDidMount中通常进行： 

- 依赖于DOM的操作可以在这里进行； 
- 在此处发送网络请求就最好的地方；（官方建议） 
- 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）
<a name="rMY8N"></a>
### 4. componentDidUpdate
```jsx
// 1. prevProps 更新前的props
// 2. prevState 更新前的state
// 3. snapshot 如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。
componentDidUpdate(prevProps, prevState, snapshot)
```
componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。 

- 当组件更新后，可以在此处对 DOM 进行操作。 
- 如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。
```jsx
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
<a name="L51TF"></a>
### 5. componentWillUnmount
componentWillUnmount() 会在组件卸载及销毁之前直接调用。 

- 在此方法中执行必要的清理操作 
- 例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
<a name="JfNbE"></a>
### 6. 不常用生命周期函数
<a name="yvfil"></a>
#### 1. getDerivedStateFromProps
state 的值在任何时候都依赖于props时使用；该方法返回一个对象来更新state； 
<a name="tf15Z"></a>
#### 2. getSnapshotBeforeUpdate
在React更新DOM之前回调的一个函数，可以获取DOM更新前的一些信息（比如说滚动位置）； 
<a name="W0b70"></a>
#### 3. shouldComponentUpdate
```jsx
shouldComponentUpdate(nextProps, nextState)
```
当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。 
> 目前，如果 shouldComponentUpdate() 返回 false，则不会调用 [UNSAFE_componentWillUpdate()](https://react.docschina.org/docs/react-component.html#unsafe_componentwillupdate)，[render()](https://react.docschina.org/docs/react-component.html#render) 和 [componentDidUpdate()](https://react.docschina.org/docs/react-component.html#componentdidupdate)。

<a name="Xtcby"></a>
# 四. 组件间通信
<a name="ExWS1"></a>
## 1. 父传子
<a name="mFqDi"></a>
### 1. 类组件
```jsx
import React, { Component } from 'react';
// 子组件
class ChildCpn extends Component {
  componentDidMount() {
    console.log(this.props, "componentDidMount");
  }

  render() {
  // 父类的this就是自己的this
  // console.log(this.props, "render");
  // 可以不使用直接对象结构
    const {name, age, height} = this.props;
    return (
      <h2>子组件展示数据: {name + " " + age + " " + height}</h2>
    )
  }
}

// 父组件
export default class App extends Component {
  constructor() {
    super();
    this.state = {
        user: {
          name: 'coder',
          age: 18,
          height: '2.22',
        },
      }
    }

  render() {
    const { user } = this.state;
    return (
      <div>
        <ChildCpn name="why" age="18" height="1.88"/>
        {/* 可以直接使用对象解构来进行传参 */}
        <ChildCpn {...user}/>
      </div>
    )
  }
}
```
<a name="CAxX3"></a>
### 2. 函数式组件
```jsx
import React, { Component } from 'react';

// 子组件
function ChildCpn(props) {
  const { name, age, height } = props;

  return (
    <h2>{name + age + height}</h2>
  )
}
// 父组件
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age="18" height="1.88" />
        <ChildCpn name="kobe" age="40" height="1.98" />
      </div>
    )
  }
}
```
<a name="J2UjJ"></a>
## 2. 子传父
通过props传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可； 
```jsx
import React, { Component } from 'react'
// 子组件
class AddCounter extends Component {
  addCount(count) {
    this.props.addClick(count)
  }

  render() {

    return (
      <div>
        <button onClick={e => this.addCount(1)}>+1</button>
        <button onClick={e => this.addCount(5)}>+5</button>
        <button onClick={e => this.addCount(10)}>+10</button>
      </div>
    )
  }
}
// 子组件
class SubCounter extends Component {
  subCount(count) {
    // 直接回调即可
    this.props.subClick(count)
  }

  render() {
    return (
      <div>
        <button onClick={e => this.subCount(-1)}>-1</button>
        <button onClick={e => this.subCount(-5)}>-5</button>
        <button onClick={e => this.subCount(-10)}>-10</button>
      </div>
    )
  }
}

// 父组件
export class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 100
    }
  }

  changeCounter(count) {
    this.setState({ counter: this.state.counter + count })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>当前计数: {counter}</h2>
        <AddCounter addClick={(count) => this.changeCounter(count)}/>
        <SubCounter subClick={(count) => this.changeCounter(count)}/>
      </div>
    )
  }
}

export default App
```
<a name="LxVKA"></a>
## 3.  React中的插槽（slot）
<a name="GAyBc"></a>
### 1. 组件的children子元素（不推荐）
 每个组件都可以获取到 **props.children**：**它包含组件的开始标签和结束标签之间的内容。 ** 
>  弊端：通过索引值获取传入的元素很容易出错，不能精准的获取传入的原生；  

```jsx
import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    const { children } = this.props
    console.log(children)

    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}


export class App extends Component {
  render() {
    const btn = <button>按钮2</button>

    return (
      <div>
        {/* 1.使用children实现插槽 */}
        <NavBar>
          <button>按钮</button>
          <h2>哈哈哈</h2>
          <i>斜体文本</i>
        </NavBar>
      </div>
    )
  }
}

export default App
```
 
<a name="oDqaQ"></a>
### 2. props属性传递React元素（推荐）
 通过具体的属性名，可以让我们在传入和获取时更加的精准 
```jsx
import React, { Component } from 'react'

NavBarTwo extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div className='nav-bar'>
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}


export class App extends Component {
  render() {
    // 属性是JSX元素
    const btn = <button>按钮2</button>

    return (
      <div>
        {/* 2.使用props实现插槽 */}
        <NavBarTwo 
          leftSlot={btn}
          centerSlot={<h2>呵呵呵</h2>}
          rightSlot={<i>斜体2</i>}
        />
      </div>
    )
  }
}

export default App
```
<a name="kCpxD"></a>
### 3. 作用域插槽
```jsx
import React, { Component } from 'react'
// 子组件
class TabControl extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    // 1.自己保存最新的index
    this.setState({ currentIndex: index })

    // 2.让父组件执行对应的函数
    this.props.tabClick(index)
  }

  render() {
    const { titles, itemType } = this.props
    const { currentIndex } = this.state

    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div 
                className={`item ${index === currentIndex?'active':''}`} 
                key={item}
                onClick={e => this.itemClick(index)}
              >
                {/* <span className='text'>{item}</span> */}
                {/* 通过回调函数决定父组件渲染哪些内容 */}
                {itemType(item)}
              </div>
            )
          })
        }
      </div>
    )
  }
}

// 父组件
export class App extends Component {
  constructor() {
    super()

    this.state = {
      titles: ["流行", "新款", "精选"],
      tabIndex: 0
    }
  }

  tabClick(tabIndex) {
    this.setState({ tabIndex })
  }

  // 通过回调函数决定父组件渲染哪些内容
  getTabItem(item) {
    if (item === "流行") {
      return <span>{item}</span>
    } else if (item === "新款") {
      return <button>{item}</button>
    } else {
      return <i>{item}</i>
    }
  }

  render() {
    const { titles, tabIndex } = this.state

    return (
      <div className='app'>
        <TabControl 
          titles={titles} 
          tabClick={i => this.tabClick(i)}
          // itemType={item => <button>{item}</button>}
          itemType={item => this.getTabItem(item)}
        />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App
```
<a name="UN0qE"></a>
## 4. 非父子组件
<a name="vRwsk"></a>
### 1. Context
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

- React.createContext 
   - 创建一个需要共享的Context对象：
   - 如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的Provider 中读取到当前的context值；
   - defaultValue是组件在顶层查找过程中没有找到对应的Provider，那么就使用默认值
- Context.Provider 
   - 每个 Context 对象都会返回一个Provider React 组件，它允许消费组件订阅 context 的变化：
   - Provider 接收一个value 属性，传递给消费组件；
   - 一个Provider 可以和多个消费组件有对应关系；
   - 多个Provider 也可以嵌套使用，里层的会覆盖外层的数据；
   - 当Provider 的value值发生变化时，它内部的所有消费组件都会重新渲染
- Class.contextType
   - 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext()创建的 Context 对象：
   - 这能让你使用 this.context 来消费最近 Context 上的那个值；
   - 你可以在任何生命周期中访问到它，包括render 函数中；
- Context.Consumer 
   - 这里，React 组件也可以订阅到 context 变更。这能让你在 函数式组件 中完成订阅 context。
   - 这里需要 函数作为子元素（function as child）这种做法；
   - 这个函数接收当前的 context 值，返回一个 React 节点
> 什么时候使用Context.Consumer呢？ 
> 1.当使用value的组件是一个函数式组件时； 
> 2.当组件中需要使用多个Context时；

  
```jsx
import React, { Component } from 'react';

// 1.创建Context对象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1
})
// 孙组件-类组件
class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    // jsx -> 
    return (
      <div>
        <h2>用户昵称: {this.context.nickname}</h2> // 3. 使用context
        <h2>用户等级: {this.context.level}</h2>
      </div>
    )
  }
}
// 孙组件-函数组件
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {// 此处需要为箭头函数，参数就为传过来的值
        value => {
          return (
            <div>
              <h2>用户昵称: {value.nickname}</h2>
              <h2>用户等级: {value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}
// 3.在需要取值的组件的contextType属性赋值
ProfileHeader.contextType = UserContext;
ProfileHeader.contextType = ThemeContext;

// 子组件
function Profile(props) {
  return (
    <div>
      <ProfileHeader />
    </div>
  )
}
// 父组件
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99
    }
  }

  render() {
    return (
      <div>
      // 2. 将创建的组件赋值，所有此组件的子组件都可以取到
        <UserContext.Provider value={this.state}>
            <Profile />
        </UserContext.Provider>
        
      </div>
    )
  }
}
```
<a name="KA0ui"></a>
### 2. EventBus(事件总线)
```jsx

class HomeBanner extends Component {
  prevClick() {
    console.log("上一个")

    eventBus.emit("bannerPrev", "why", 18, 1.88)
  }

  nextClick() {
    console.log("下一个")
    eventBus.emit("bannerNext", {nickname: "kobe", level: 99})
  }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={e => this.prevClick()}>上一个</button>
        <button onClick={e => this.nextClick()}>下一个</button>
      </div>
    )
  }


export class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      age: 0,
      height: 0
    }
  }

  componentDidMount() {
    // eventBus.on("bannerPrev", (name, age, height) => {
    //   console.log("app中监听到bannerPrev", name, age, height)
    //   this.setState({ name, age, height })
    // })

    eventBus.on("bannerPrev", this.bannerPrevClick, this)
    eventBus.on("bannerNext", this.bannerNextClick, this)
  }

  bannerPrevClick(name, age, height) {
    console.log("app中监听到bannerPrev", name, age, height)
    this.setState({ name, age, height })
  }

  bannerNextClick(info) {
    console.log("app中监听到bannerNext", info)
  }

  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bannerPrevClick)
  }

  render() {
    const { name, age, height } = this.state

    return (
      <div>
        <h2>App Component: {name}-{age}-{height}</h2>
        <HomeBanner/>
      </div>
    )
  }
}

```
<a name="bTv75"></a>
## 5. 属性验证propTypes
```jsx
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为 JS 原生类型，默认情况下
  // 这些属性都是可选的。
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、元素或数组）
  // (或 Fragment) 也包含这些类型。
  optionalNode: PropTypes.node,

  // 一个 React 元素。
  optionalElement: PropTypes.element,

  // 一个 React 元素类型（即，MyComponent）。
  optionalElementType: PropTypes.elementType,

  // 你也可以声明 prop 为类的实例，这里使用
  // JS 的 instanceof 操作符。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你可以让你的 prop 只能是特定的值，指定它为
  // 枚举类型。
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 一个对象可以是几种类型中的任意一个类型
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 可以指定一个数组由某一类型的元素组成
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 可以指定一个对象由某一类型的值组成
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 可以指定一个对象由特定的类型值组成
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // An object with warnings on extra properties
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number
  }),

  // 你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保
  // 这个 prop 没有被提供时，会打印警告信息。
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的必需数据
  requiredAny: PropTypes.any.isRequired,

  // 你可以指定一个自定义验证器。它在验证失败时应返回一个 Error 对象。
  // 请不要使用 `console.warn` 或抛出异常，因为这在 `oneOfType` 中不会起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 你也可以提供一个自定义的 `arrayOf` 或 `objectOf` 验证器。
  // 它应该在验证失败时返回一个 Error 对象。
  // 验证器将验证数组或对象中的每个值。验证器的前两个参数
  // 第一个是数组或对象本身
  // 第二个是他们当前的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

```
