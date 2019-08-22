<template>
  <div id="editormd">
    <textarea style="display:none;">### Hello Editor.md !</textarea>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '@/assets/css/editormd.min.css'
  export default {
    name: "editormd",
    methods: {
    },
    mounted: () => {
      function loadScript(url, callback){
        var script = document.createElement ("script")
        script.type = "text/javascript";
        if (script.readyState){ //IE
          script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
            }
          };
        } else { //Others
          script.onload = function(){
            callback();
          };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
      }
      loadScript('static/lib/editormd/editormd.min.js',function () {
        var editor = editormd("editormd", {
          path: "static/lib/editormd/lib/",
          width:'90%',
          height:'560px'
        });
      });
    },

  }
</script>

<style scoped>
</style>
