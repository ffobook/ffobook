'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "FFO 幻想目录",
        description: "QQ自由幻想（FFO）百科全书之幻想目录",
        version: "0.0.1",
        dir: "./docs",
        outDir: "./build",
        staticDir: "./static"
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: "",
        footHtml: `
			<!-- Ptengine -->
			<script type="text/javascript">
				window._pt_lt = new Date().getTime();
				window._pt_sp_2 = [];
				_pt_sp_2.push("setAccount,4b8d2226");
				var _protocol =(("https:" == document.location.protocol) ? " https://" : " http://");
				(function() {
					var atag = document.createElement("script");
					atag.type = "text/javascript";
					atag.async = true;
					atag.src = _protocol + "js.ptengine.cn/4b8d2226.js";
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(atag, s);
				})();
			</script>
		`,
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}