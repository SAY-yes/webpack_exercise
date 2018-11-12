// import _ from 'lodash';
// import './index.css'


// function getComponent(){
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');
//         var _ = _.default;

//         element.innerHTML = _.join(['Hello','webpack'],'');
//         return element
//     }).catch(error => "An error occered while loading the component")
// }

async function getComponent(){
    var element = document.createElement('div');
    const _ = await import(/* webpack:"lodash" */ 'lodash');
    element.innerHTML = _.join(['Hello','webpack'],'')
    return element
}

getComponent().then(component => {
    document.body.appendChild(component)
})


