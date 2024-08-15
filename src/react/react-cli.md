<a name="sTNCk"></a>
# 一. 官网
[Create React App](https://create-react-app.dev/)

<a name="JyNd6"></a>
# 二. 使用
React脚手架本身需要依赖node，所以我们需要安装node环境<br />**You’ll need to have Node >= 14 on your local development machine**
<a name="FS30z"></a>
## 1. Creating an App
<a name="C1hjy"></a>
### 1. 使用npx
```cpp
npx create-react-app my-app
```
<a name="FuMJM"></a>
### 2. 使用npm
```cpp
npm init react-app my-app
```
<a name="GEOPY"></a>
### 3. 使用yarn
```cpp
yarn create react-app my-app
```
<a name="jTN9A"></a>
## 2. Selecting a template
<a name="dmTYS"></a>
### 1. 创建普通模板项目
```cpp
npx create-react-app my-app --template [template-name]
```
<a name="ElWW7"></a>
### 2. 创建TypeScript项目
```cpp
npx create-react-app my-app --template typescript
```
<a name="NJCMW"></a>
# 三. 目录结构分析
![image.png](https://cdn.nlark.com/yuque/0/2022/png/21601157/1664523254764-dcddb106-9519-46ec-bc40-669a28e4fa0d.png#averageHue=%23262a31&clientId=ufbba44e3-d546-4&from=paste&height=273&id=u8da5017f&originHeight=690&originWidth=612&originalType=url&ratio=1&rotation=0&showTitle=false&size=193374&status=done&style=none&taskId=u12d96f47-6f1c-4d13-935e-8f6197f0c8b&title=&width=242)![image.png](https://cdn.nlark.com/yuque/0/2022/png/21601157/1664523281972-c7c6c10d-fe28-4fbb-8290-ade7ccd10e53.png#averageHue=%23eeeeee&clientId=ufbba44e3-d546-4&from=paste&height=287&id=ua8644ba6&originHeight=690&originWidth=1148&originalType=url&ratio=1&rotation=0&showTitle=false&size=341172&status=done&style=none&taskId=u0da5d0ff-67d2-413c-aa79-22c32f71751&title=&width=478)

<a name="ROun5"></a>
# 四. 脚本
<a name="KHB8z"></a>
### 1. 启动项目
```cpp
npm start  
// or
yarn start
```
<a name="lk0E1"></a>
### 2. 打包
```cpp
npm run build
// or
yarn build
```
<a name="HQ4R0"></a>
### 3. 释放webpack配置
我们可以执行一个package.json文件中的一个脚本:"eject": "react-scripts eject" <br />**这个操作是不可逆的**，所以在执行过程中会给与我们提示;
```cpp
yarn eject
```
