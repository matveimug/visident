import {
  Vue,
  components,
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$global = new Vue({ data: { state: {} } });

new Vue({
  el: "#fachwerk",

  methods: {
    // Allow utils to be used in templates
    ...utils

    // Custom methods go here
  },

  data: {},

  template: `
    <div style="--content-padding: var(--base5)">
    
      <f-fetch :src="[
          './index.md', 
        ]" v-slot="{ value: content }">
        <f-content-editor 
            type="slides" 
            edit="none" 
            typebutton="false" 
            title="Visuaalne identiteet" 
            menu="show" 
            :content="content" />
      </f-fetch>
      
    </div>
    `
});