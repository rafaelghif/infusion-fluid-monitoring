System.register(["./index-legacy-2b429800.js"],(function(t,e){"use strict";var r,s,n,i,u,o,c,a,l,h,d,f,p,v,y,R,m;return{setters:[t=>{r=t.J,s=t.L,n=t.N,i=t.O,u=t.P,o=t.Q,c=t.R,a=t.S,l=t.T,h=t.U,d=t.V,f=t.W,p=t.X,v=t.Y,y=t.u,R=t.Z,m=t.$}],execute:function(){t("u",(function(t,r,s){return function(t,e){var r=v.useRef(!1),s=v.useState(0)[1],n=y(),i=E(),u=n.defaultQueryObserverOptions(t);u.optimisticResults=!0,u.onError&&(u.onError=f.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=f.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=f.batchCalls(u.onSettled)),u.suspense&&("number"!=typeof u.staleTime&&(u.staleTime=1e3),0===u.cacheTime&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(i.isReset()||(u.retryOnMount=!1));var o=v.useState((function(){return new e(n,u)}))[0],c=o.getOptimisticResult(u);if(v.useEffect((function(){r.current=!0,i.clearReset();var t=o.subscribe(f.batchCalls((function(){r.current&&s((function(t){return t+1}))})));return o.updateResult(),function(){r.current=!1,t()}}),[i,o]),v.useEffect((function(){o.setOptions(u,{listeners:!1})}),[u,o]),u.suspense&&c.isLoading)throw o.fetchOptimistic(u).then((function(t){var e=t.data;null==u.onSuccess||u.onSuccess(e),null==u.onSettled||u.onSettled(e,null)})).catch((function(t){i.clearReset(),null==u.onError||u.onError(t),null==u.onSettled||u.onSettled(void 0,t)}));if(c.isError&&!i.isReset()&&!c.isFetching&&R(u.suspense,u.useErrorBoundary,[c.error,o.getCurrentQuery()]))throw c.error;return"tracked"===u.notifyOnChangeProps&&(c=o.trackResult(c,u)),c}(m(t,r,s),e)}));var e=function(t){function e(e,r){var s;return(s=t.call(this)||this).client=e,s.options=r,s.trackedProps=[],s.selectError=null,s.bindMethods(),s.setOptions(r),s}r(e,t);var p=e.prototype;return p.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},p.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),b(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},p.onUnsubscribe=function(){this.listeners.length||this.destroy()},p.shouldFetchOnReconnect=function(){return S(this.currentQuery,this.options,this.options.refetchOnReconnect)},p.shouldFetchOnWindowFocus=function(){return S(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},p.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},p.setOptions=function(t,e){var r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var n=this.hasListeners();n&&Q(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(e),!n||this.currentQuery===s&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();var i=this.computeRefetchInterval();!n||this.currentQuery===s&&this.options.enabled===r.enabled&&i===this.currentRefetchInterval||this.updateRefetchInterval(i)},p.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},p.getCurrentResult=function(){return this.currentResult},p.trackResult=function(t,e){var r=this,s={},n=function(t){r.trackedProps.includes(t)||r.trackedProps.push(t)};return Object.keys(t).forEach((function(e){Object.defineProperty(s,e,{configurable:!1,enumerable:!0,get:function(){return n(e),t[e]}})})),(e.useErrorBoundary||e.suspense)&&n("error"),s},p.getNextResult=function(t){var e=this;return new Promise((function(r,s){var n=e.subscribe((function(e){e.isFetching||(n(),e.isError&&(null==t?void 0:t.throwOnError)?s(e.error):r(e))}))}))},p.getCurrentQuery=function(){return this.currentQuery},p.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},p.refetch=function(t){return this.fetch(s({},t,{meta:{refetchPage:null==t?void 0:t.refetchPage}}))},p.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.fetch().then((function(){return e.createResult(s,r)}))},p.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},p.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(n)),e},p.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i&&!this.currentResult.isStale&&u(this.options.staleTime)){var e=o(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},p.computeRefetchInterval=function(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t},p.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!i&&!1!==this.options.enabled&&u(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||c.isFocused())&&e.executeFetch()}),this.currentRefetchInterval))},p.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},p.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},p.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},p.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},p.createResult=function(t,e){var r,s=this.currentQuery,n=this.options,i=this.currentResult,u=this.currentResultState,o=this.currentResultOptions,c=t!==s,h=c?t.state:this.currentQueryInitialState,d=c?this.currentResult:this.previousQueryResult,f=t.state,p=f.dataUpdatedAt,v=f.error,y=f.errorUpdatedAt,R=f.isFetching,m=f.status,S=!1,O=!1;if(e.optimisticResults){var I=this.hasListeners(),E=!I&&b(t,e),C=I&&Q(t,s,e,n);(E||C)&&(R=!0,p||(m="loading"))}if(e.keepPreviousData&&!f.dataUpdateCount&&(null==d?void 0:d.isSuccess)&&"error"!==m)r=d.data,p=d.dataUpdatedAt,m=d.status,S=!0;else if(e.select&&void 0!==f.data)if(i&&f.data===(null==u?void 0:u.data)&&e.select===this.selectFn)r=this.selectResult;else try{this.selectFn=e.select,r=e.select(f.data),!1!==e.structuralSharing&&(r=a(null==i?void 0:i.data,r)),this.selectResult=r,this.selectError=null}catch(U){l().error(U),this.selectError=U}else r=f.data;if(void 0!==e.placeholderData&&void 0===r&&("loading"===m||"idle"===m)){var T;if((null==i?void 0:i.isPlaceholderData)&&e.placeholderData===(null==o?void 0:o.placeholderData))T=i.data;else if(T="function"==typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&void 0!==T)try{T=e.select(T),!1!==e.structuralSharing&&(T=a(null==i?void 0:i.data,T)),this.selectError=null}catch(U){l().error(U),this.selectError=U}void 0!==T&&(m="success",r=T,O=!0)}return this.selectError&&(v=this.selectError,r=this.selectResult,y=Date.now(),m="error"),{status:m,isLoading:"loading"===m,isSuccess:"success"===m,isError:"error"===m,isIdle:"idle"===m,data:r,dataUpdatedAt:p,error:v,errorUpdatedAt:y,failureCount:f.fetchFailureCount,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>h.dataUpdateCount||f.errorUpdateCount>h.errorUpdateCount,isFetching:R,isRefetching:R&&"loading"!==m,isLoadingError:"error"===m&&0===f.dataUpdatedAt,isPlaceholderData:O,isPreviousData:S,isRefetchError:"error"===m&&0!==f.dataUpdatedAt,isStale:g(t,e),refetch:this.refetch,remove:this.remove}},p.shouldNotifyListeners=function(t,e){if(!e)return!0;var r=this.options,s=r.notifyOnChangeProps,n=r.notifyOnChangePropsExclusions;if(!s&&!n)return!0;if("tracked"===s&&!this.trackedProps.length)return!0;var i="tracked"===s?this.trackedProps:s;return Object.keys(t).some((function(r){var s=r,u=t[s]!==e[s],o=null==i?void 0:i.some((function(t){return t===r})),c=null==n?void 0:n.some((function(t){return t===r}));return u&&!c&&(!i||o)}))},p.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!h(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(s({},r,t))}},p.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},p.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"!==t.type||d(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},p.notify=function(t){var e=this;f.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(p);function b(t,e){return function(t,e){return!(!1===e.enabled||t.state.dataUpdatedAt||"error"===t.state.status&&!1===e.retryOnMount)}(t,e)||t.state.dataUpdatedAt>0&&S(t,e,e.refetchOnMount)}function S(t,e,r){if(!1!==e.enabled){var s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&g(t,e)}return!1}function Q(t,e,r,s){return!1!==r.enabled&&(t!==e||!1===s.enabled)&&(!r.suspense||"error"!==t.state.status)&&g(t,r)}function g(t,e){return t.isStaleByTime(e.staleTime)}var O,I=v.createContext((O=!1,{clearReset:function(){O=!1},reset:function(){O=!0},isReset:function(){return O}})),E=function(){return v.useContext(I)}}}}));
