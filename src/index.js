import HelloWorld from './packages/hello-world/index.js';
import MoorButton from './packages/button/index.js';
import MoorSelect from './packages/select/index.js';
import MoorInput from './packages/input/index.js';
import MoorSwitch from './packages/switch/index.js';
import LoinsTable from './packages/table/index.js';
import LoinsImg from './packages/loins-img/index.js';
import LoinsSearch from './packages/loins-search/index.js';
import Lobutton from './packages/lo-button/index.js';
import LoSelectTmie from './packages/lo-selectTime/index.js';
import LoComfirmList from './packages/lo-comfirmList/index.js';
const components = [
    HelloWorld,
    MoorButton,
    MoorSelect,
    MoorInput,
    MoorSwitch,
    LoinsTable,
    LoinsImg,
    LoinsSearch,
    Lobutton,
    LoSelectTmie,
    LoComfirmList
]

const install = function(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    HelloWorld,
    MoorButton,
    MoorSelect,
    MoorInput,
    MoorSwitch,
    LoinsTable,
    LoinsImg,
    LoinsSearch
}