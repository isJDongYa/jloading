import { PluginObject, VueConstructor } from 'vue'
import JLoading from './JLoading.vue'
import { jloadingSetup } from './type'

const jloadingDefaultSetup:jloadingSetup = {
  background: '#000000aa',
  color:'#fff'
}

export default {
  install(Vue:VueConstructor):void {
    Vue.directive('jloading', {
      bind: (el, binding) => {
        
        if(binding.arg) {
          Object.assign(jloadingDefaultSetup, binding.arg)
        }

        (el as any).loadingEl = (new JLoading()).$mount().$el

        const loadingEl = (el as any).loadingEl

        loadingEl.style.background = jloadingDefaultSetup.background
        loadingEl.style.color = jloadingDefaultSetup.color
        
        if(binding.modifiers.fullscreen) {
          document.body.insertBefore(loadingEl, document.body.firstChild)
        } else {
          el.insertBefore(loadingEl, el.firstChild)
        }
      },
      componentUpdated: (el, binding) => {
        const loadingEl = (el as any).loadingEl
        loadingEl.style.zIndex = 0
        const arr = Array.from(document.body.querySelectorAll('*'))
        const maxZindexEle = arr.reduce((pe, ce):Element => { 
          let pn = Number(getComputedStyle(pe).getPropertyValue('z-index')) || 0
          let cn = Number(getComputedStyle(ce).getPropertyValue('z-index')) || 0
          return pn > cn ? pe : ce
        })
        let maxZ = (Number(getComputedStyle(maxZindexEle).getPropertyValue('z-index')) || 0) + 1
        
        if (binding.value) {
          let style = getComputedStyle(el)
          let position = style.getPropertyValue('position')
          if( position === 'static') {
            el.style.position = 'relative'
          }
          if(binding.modifiers.full) {
            loadingEl.style.position = 'fixed'
            loadingEl.style.left = '0'
            loadingEl.style.top = '0'
            loadingEl.style.height = '100%'
            loadingEl.style.width = '100%'
            loadingEl.style.display = 'flex'
          } else {
            loadingEl.style.width = style.getPropertyValue('width');
            loadingEl.style.height = style.getPropertyValue('height');
            loadingEl.style.display = 'flex'
          }
          loadingEl.style.zIndex = maxZ
          loadingEl.style.fontSize = (loadingEl.offsetHeight / 500 ) * 3 + 'em'
          
        } else {
          loadingEl.style.display = 'none'
        }
      },
      unbind: (el) => {
        const loadingEl = (el as any).loadingEl
        loadingEl.parentNode.removeChild(loadingEl)
      }
    })
  }
} as PluginObject<void>