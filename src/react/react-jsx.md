> JSX是一种JavaScript的语法扩展（eXtension），也在很多地方称之为JavaScript XML，因为看起就是一段XML语法；
> 用于描述我们的UI界面，并且其完成可以和JavaScript融合在一起使用;

<a name="bwLLc"></a>
# 一. 语法
<a name="nh77S"></a>
### 1. jsx注释
```jsx
{/* 我是注释 */}
```
<a name="O2e5k"></a>
### 2. jsx嵌入变量

- 情况一：当变量是Number、String、Array类型时，可以直接显示
- 情况二：当变量是null、undefined、Boolean类型时，内容为空； 
   - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串；
   - 转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；
- 情况三：对象类型不能作为子元素（not valid as a React child）
```jsx
        this.state = {
          // 1.在{}中可以正常显示显示的内容
          name: "why", // String
          age: 18, // Number
          names: ["abc", "cba", "nba"], // Array

          // 2.在{}中不能显示(忽略)
          test1: null, // null
          test2: undefined, // undefined
          test3: true, // Boolean
          flag: true,

          // 3.对象不能作为jsx的子类
          friend: {
            name: "kobe",
            age: 40
          }
        }

```

<a name="ezWts"></a>
### 3. jsx嵌入表达式

- 运算表达式
- 三元运算符
- 执行一个函数
```jsx
      render() {
        const { firstname, lastname, isLogin } = this.state;

        return (
          <div>
            {/*1.运算符表达式*/}
            <h2>{ firstname + " " + lastname }</h2>
            <h2>{20 * 50}</h2>

            {/*2.三元表达式*/}
            <h2>{ isLogin ? "欢迎回来~": "请先登录~" }</h2>

            {/*3.进行函数调用*/}
            <h2>{this.getFullName()}</h2>
          </div>
        )
      }
```
<a name="PxyWK"></a>
### 4. jsx绑定属性

- 比如元素都会有title属性
- 比如img元素会有src属性
- 比如a元素会有href属性
- 比如元素可能需要绑定class
- 比如元素使用内联样式style
```jsx
           <div>
              {/* 1.绑定普通属性 */}
              {/*<span title={ title }>12313</span>*/}
              {/* 绑定img元素src属性   */}
              <img src={123} alt="" />
              {/* <img src={wangyiimgUrl + "?param=" + imgSize} alt="" /> */}
              <img src={getImgUrl(wangyiimgUrl, 200)} alt="" />
              {/* 绑定a元素href属性   */}
              <a href={imgUrl}>lianjie</a>
              {/* 2，绑定class */}
              <div className="wrapper">我是div</div>
              <div className={"wrapper " + (active ? 'active' : '')}>我是绑定class div</div>
              {/* 3. 绑定style */}
              <div style={ {color: 'red', fontSize: '40px'} }>我是绑定style div</div>
            </div>
```
<a name="BxUIF"></a>
### 5. jsx绑定事件

   1. this绑定
```jsx
          // 在构造器中绑定this
          this.btnClick = this.btnClick.bind(this);
            <div>
              {/* 1. bind绑定this （不推荐/每次都得绑定this）*/}
              <h2>{ counter }</h2>
              <button onClick={this.btnClick}>按钮</button>
              {/* 2. 使用箭头函数来定义函数(不推荐) */}
              <button onClick={this.add}>+1</button>

              {/* 3. 直接传入一个箭头函数，在箭头函数中调用需要执行的函数 （推荐），传递参数方便 */}
              <button onClick={() => { this.sub("niuchao") }}>-1</button>
            </div>
        btnClick() {
          console.log(this);
        }

      // 箭头函数中永远不绑定this
      // ES6中给对象增加属性: class fields
        add = () => {
          // 隐式绑定
          console.log(this.state.counter);
        }
        sub(name) {
          console.log(this.state.counter , name);
        }
```

   2. 传递参数
```jsx
           this.state = {
            message: "hello react",
            counter: 0,
            movies: ["大话西游", "钢铁侠", "蜘蛛侠", "变形金刚"],
          };
              {/* 传递参数 */}
              <ul>
                {
                  movies.map((item, index, array) => {
                    return <li onClick={e => this.liClick(item, index, e)}>{item}</li>
                  })
                }  
              </ul>
         liClick(name, index, event) {
          console.log(name, index, event);
        }
```
<a name="gPVX7"></a>
### 6. jsx条件渲染

- **方式一：条件判断语句 v-if**
   - 适合逻辑较多的情况 
- **方式二：三元运算符**
   - 适合逻辑比较简单 
- **方式三：与运算符&&**
   - 适合如果条件成立，渲染某一个组件；如果条件不成立，什么内容也不渲染； 
- **v-show的效果**
   - 主要是控制display属性是否为none
```jsx
      class App extends React.Component {
        constructor() {
          super();

          this.state = {
            message: "hello react",
            isLogin: false,
          };
        }

        render() {
          const { isLogin } = this.state;
          // 1. 通过if判断 (适合逻辑代码非常多的情况)
          let ele = null;
          if (isLogin) {
            ele = <h2>欢迎回来</h2>
          } else {
            ele = <h2>请先登录</h2>
          }
          let displayName = isLogin ? 'block' : 'none';
          return (
            <div>
              {ele}
              {/* 2. 通过三目运算符判断 (适合逻辑比较少的情况)*/}
              { isLogin ? <h2>欢迎回来</h2> : <h2>请先登录</h2> }
              <button onClick={e => this.handleClick()}>{ isLogin ? "退出" : "登录" }</button>
              {/* 3. 逻辑与运算 */}
              {/* v-if */}
              <h2>{ isLogin && "你好啊"}</h2>
              {/* v-if */}
              { isLogin && <h2>你好啊</h2> }
              {/* v-show */}
              <h2 style={{ display: displayName }}>你好啊react</h2>
            </div>
          );
        }
        handleClick() {
          this.setState({
            isLogin: !this.state.isLogin
          })
        }
      }

```
<a name="J56BA"></a>
### 7. jsx列表渲染
在React中，展示列表最多的方式就是使用数组的map高阶函数； 

- 比如过滤掉一些内容：filter函数 
- 比如截取数组中的一部分内容：slice函数
> 注意：列表渲染必须添加key

```jsx
    class App extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          names: ["abc", "cba", "nba", "mba", "dna"],
          numbers: [110, 123, 50, 32, 55, 10, 8, 333]
        }
      }

      render() {
        return (
          <div>
            <h2>名字列表</h2>
            <ul>
              {
                this.state.names.map(item => {
                  return <li>{item}</li>
                })
              }
            </ul>

            <h2>数字列表(过滤)</h2>
            <ul>
              {
                this.state.numbers.filter(item => item >= 50).map(item => <li>{item}</li>)
              }
            </ul>

            <h2>数字列表(截取)</h2>
            <ul>
              {
                this.state.numbers.slice(0, 4).map(item => {
                  return <li>{item}</li>
                })
              }
            </ul>
          </div>
        )
      }
    }
```
<a name="gzTI3"></a>
# 二. 本质

- 实际上，jsx 仅仅只是 **React.createElement(component, props, ...children) 函数**的语法糖。 
   - 所有的jsx最终都会被转换成React.createElement的函数调用。
<a name="vzQuR"></a>
### 1.  jsx babel转换
我们写的jsx语法会被**React**.**createElement**转化为js代码
> 在线转换网站：[https://babeljs.io/repl/#?presets=react](https://babeljs.io/repl/#?presets=react)

**转换前**
```jsx
          <div>
            <div className="header">
              <h1 title="123">123</h1>
            </div>
            <div className="content">
              <h2>sdfsfsf</h2>
              <button onClick={btnClick}>ttttt</button>
              <button>+1</button>
              <a href="http://www.baidu.com">xcvcxvvvvv</a>
            </div>
            <div className="footer">
              <p>zzczcc</p>
            </div>
          </div>
```
**转换后**
```jsx
React.createElement(
            "div",
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "header",
              },
              /*#__PURE__*/ React.createElement(
                "h1",
                {
                  title: "123",
                },
                "123"
              )
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "content",
              },
              /*#__PURE__*/ React.createElement("h2", null, "sdfsfsf"),
              /*#__PURE__*/ React.createElement(
                "button",
                {
                  onClick: btnClick,
                },
                "ttttt"
              ),
              /*#__PURE__*/ React.createElement("button", null, "+1"),
              /*#__PURE__*/ React.createElement(
                "a",
                {
                  href: "http://www.baidu.com",
                },
                "xcvcxvvvvv"
              )
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "footer",
              },
              /*#__PURE__*/ React.createElement("p", null, "zzczcc")
            )
          );
```
<a name="fmuvd"></a>
### 2. createElement函数

- **createElement需要传递三个参数：**
- 参数一：type 
   - 当前ReactElement的类型
   - 如果是标签元素，那么就使用字符串表示 “div”
   - 如果是组件元素，那么就直接使用组件的名称
- 参数二：config 
   - 所有jsx中的属性都在config中以对象的属性和值的形式存储 
- 参数三：children 
   - 存放在标签中的内容，以children数组的方式进行存储
   - 当然，如果是多个元素，eact内部有对它们进行处理，处理的源码在下方 40行
```jsx
export function createElement(type, config, children) {
  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;
  let self = null;
  let source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      if (__DEV__) {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  // 获取子元素个数
  const childrenLength = arguments.length - 2;
  // 如果子元素只有一个的时候，将子元素赋值给 children 属性
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    // 定义子元素个数的数组
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      // 对数组进行遍历，将原参数数组除去type和config之后一一加入到新数组中
      // ['header'] = [type, config, 'header']
      childArray[i] = arguments[i + 2];
    }
    //
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    // 将子元素数组赋值给 children 属性
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (__DEV__) {
    if (key || ref) {
      const displayName =
        typeof type === 'function'
          ? type.displayName || type.name || 'Unknown'
          : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  // 返回ReactElement对象
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}
```
<a name="EM3Yx"></a>
### 3. 虚拟DOM的创建过程
我们通过 React.createElement 最终创建出来一个 ReactElement对象 

- React利用ReactElement对象组成了一个JavaScript的对象树； 
- JavaScript的对象树就是大名鼎鼎的虚拟DOM（Virtual DOM）； 

将之前的jsx返回代码打印，而ReactElement最终形成的树结构就是Virtual DOM<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/21601157/1664521640613-61553fd0-2f10-4bd6-82a2-2a787b49efc0.png#clientId=u9cc50811-f1d7-4&from=paste&height=322&id=u394b27a8&originHeight=643&originWidth=725&originalType=binary&ratio=1&rotation=0&showTitle=false&size=115671&status=done&style=none&taskId=u7ba497ee-619c-4303-9060-ffed8681efb&title=&width=362.5)
<a name="kkgeB"></a>
# 三. 注意
<a name="vbXC3"></a>
### 1. 语法规范

- JSX的顶层**只能有一个根元素**，所以我们很多时候会在外层包裹一个div原生（或者使用后面我们学习的Fragment）； 
- 为了方便阅读，我们通常在jsx的外层包裹一个小括号()，这样可以方便阅读，并且jsx可以进行换行书写； 
- JSX中的标签可以是单标签，也可以是双标签； 
   - 注意：如果是单标签，必须以/>结尾；
   - cess中，如果标签是单标签，必须以/>结尾；
