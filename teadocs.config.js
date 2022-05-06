'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "FFO 幻想目录",
        description: "QQ自由幻想（FFO）百科全书之幻想目录，FFO玩家们最全面的的攻略手册。",
        version: "0.0.1",
        dir: "./docs",
        outDir: "./build",
        staticDir: "./static"
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: `
			<link rel="shortcut icon" href="/static/images/favicon.ico"/>
			<meta name="google-site-verification" content="Wsqv8q9RJgmtDsBQKXjGmFni9ffrhsaDGydjUyomVr8" />
			<meta name="baidu-site-verification" content="wj732QNDjS" />
		`,
        footHtml: `
			<!-- hm -->
			<script>
				var _hmt = _hmt || [];
				(function() {
				  var hm = document.createElement("script");
				  hm.src = "https://hm.baidu.com/hm.js?fb4ace1d7c8fd9f348f5b33f3a97385d";
				  var s = document.getElementsByTagName("script")[0]; 
				  s.parentNode.insertBefore(hm, s);
				})();
			</script>

			<script>
				(function(){
					var bp = document.createElement('script');
					var curProtocol = window.location.protocol.split(':')[0];
					if (curProtocol === 'https') {
						bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
					}
					else {
						bp.src = 'http://push.zhanzhang.baidu.com/push.js';
					}
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(bp, s);
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