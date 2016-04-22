#serverRender
根据redux官方例子改造，加入了react-router，服务端渲染，前后端路由统一

每个url需要首屏从服务端拉去数据，把store.getState()通过window.__state__传递到前端，同步store
待完善...
