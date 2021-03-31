import Vue from 'vue'
import loading from '@/components/loading/loading'
const Loading=Vue.extend(loading)
const instence=new Loading({
    el:document.createElement('div')
})
instence.show=true
const $loading={
    show(obj){
        // console.log($el);
        instence.show=true
        instence.msg=obj
        document.body.appendChild(instence.$el)
    },
    hide(){
        instence.show=false
    }
}
export default{
    install(){
        if(!Vue.$loading){
            Vue.$loading=$loading
        }
        Vue.mixin({
            created(){
                this.$loading=Vue.$loading
            }
        })
    }
}