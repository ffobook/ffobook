(function () {
    var content = [{"context":[{"title":"前言","link":"/index.html"}],"content":"\n        <h1 id=\"前言\">\n            <a href='#前言' class='header-anchor'>#</a>\n            <span>前言</span>\n        </h1>\n    \n        <h2 id=\"FFO-蓝皮书\">\n            <a href='#FFO-蓝皮书' class='header-anchor'>#</a>\n            <span>FFO 蓝皮书</span>\n        </h2>\n    <p>《<strong>QQ自由幻想</strong>》是一款免费的大型多人在线角色扮演游戏。游戏中有职业、装备、幻神、宠物、家族、社交和商业系统共7大系统。游戏开始时，每位玩家可以创立不同的的角色。角色分为男性和女性，有战士、刺客、剑客、药师和术士五大职业，但玩家刚进入游戏则是“初行者”职业，到10级以后，完成相应职业的就职任务，方可升级到指定职业。</p>\n<p>以上介绍摘抄自<a href=\"https://zh.wikipedia.org/zh-hans/QQ%E8%87%AA%E7%94%B1%E5%B9%BB%E6%83%B3\">维基百科</a>。由于游戏官网上资料并不丰富，且游戏内容越做越多，网上能够搜索到的资料又十分有限，因此这本可爱的《<strong>FFO蓝皮书</strong>》就诞生啦。</p>\n\n        <h2 id=\"作者信息\">\n            <a href='#作者信息' class='header-anchor'>#</a>\n            <span>作者信息</span>\n        </h2>\n    <table>\n<thead>\n<tr>\n<th>Author</th>\n<th>猫崎坂子</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Email</td>\n<td><a href=\"mailto:rayiooo@foxmail.com\">rayiooo@foxmail.com</a></td>\n</tr>\n</tbody></table>\n\n        <h2 id=\"项目信息\">\n            <a href='#项目信息' class='header-anchor'>#</a>\n            <span>项目信息</span>\n        </h2>\n    <ul>\n<li>Github地址：<a href=\"https://github.com/ffobook/ffobook\"><img src=\"https://img.shields.io/badge/Link-Github-green\" alt=\"github\"></a></li>\n<li>域名访问：<a href=\"https://ffobook.github.io\"><img src=\"https://img.shields.io/badge/Link-ffo.github.io-green\" alt=\"Page\"></a></li>\n</ul>\n\n        <h2 id=\"贡献内容\">\n            <a href='#贡献内容' class='header-anchor'>#</a>\n            <span>贡献内容</span>\n        </h2>\n    <p>如果你想向这本蓝皮书贡献内容，可以前往 <a href=\"https://github.com/teadocs/teadocs\">Teadocs</a> 文档生成工具的项目地址查看使用帮助，然后将你贡献的内容提交PR。也可以提交你想补充的信息到Issue中去。</p>\n\n        <h2 id=\"文档生成\">\n            <a href='#文档生成' class='header-anchor'>#</a>\n            <span>文档生成</span>\n        </h2>\n    <p>本文档自豪滴使用 <a href=\"https://github.com/teadocs/teadocs\">Teadocs</a> 文档生成工具生成。</p>\n\n        <h2 id=\"版权信息\">\n            <a href='#版权信息' class='header-anchor'>#</a>\n            <span>版权信息</span>\n        </h2>\n    <p>除非额外说明，本网站的所有公开文档均遵循 <a href=\"https://creativecommons.org/licenses/by-nc-sa/3.0/cn/\">署名-非商业性使用-相同方式共享 3.0 中国大陆 (CC BY-NC-SA 3.0 CN)</a>许可协议。任何人都可以自由地分享、修改本作品，但必须遵循如下条件：</p>\n<ul>\n<li>署名：必须提到原作者，提供指向此许可协议的链接，表明是否有做修改</li>\n<li>非商业性使用：不能对本作品进行任何形式的商业性使用</li>\n<li>相同方式共享：若对本作品进行了修改，必须以相同的许可协议共享</li>\n</ul>\n"},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"职业","link":"/game/career/index.html"}],"content":"\n        <h1 id=\"职业系统\">\n            <a href='#职业系统' class='header-anchor'>#</a>\n            <span>职业系统</span>\n        </h1>\n    <p>QQ自由幻想的五大职业分别是战士、剑客、刺客、术士、药师。玩家在创建人物的时候，可以根据自己的喜好选择成为某个职业的初行者。每个职业初行者的成长方向不同，初行战士在力量体质方面成长较快；初行剑客在除了法力之外的各方面成长均衡，初行刺客在敏捷和灵巧方面的成长较快；初行术士在法力方面成长较快，初行药师在精神方面成长较快。在10级以后，初行者可以通过完成职业任务转职成为相关的上级职业。</p>\n<table>\n<thead>\n<tr>\n<th>职业</th>\n<th align=\"center\">初行者男</th>\n<th align=\"center\">初行者女</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>战士</td>\n<td align=\"center\"><img src=\"/static/images/game/career/zs_nm.jpg\" alt=\"战士男\"></td>\n<td align=\"center\"><img src=\"/static/images/game/career/zs_nw.jpg\" alt=\"战士女\"></td>\n</tr>\n<tr>\n<td>剑客</td>\n<td align=\"center\"><img src=\"/static/images/game/career/jk_nm.jpg\" alt=\"剑客男\"></td>\n<td align=\"center\"><img src=\"/static/images/game/career/jk_nw.jpg\" alt=\"剑客女\"></td>\n</tr>\n<tr>\n<td>刺客</td>\n<td align=\"center\"><img src=\"/static/images/game/career/ck_nm.jpg\" alt=\"刺客男\"></td>\n<td align=\"center\"><img src=\"/static/images/game/career/ck_nw.jpg\" alt=\"刺客女\"></td>\n</tr>\n<tr>\n<td>术士</td>\n<td align=\"center\"><img src=\"/static/images/game/career/ss_nm.jpg\" alt=\"术士男\"></td>\n<td align=\"center\"><img src=\"/static/images/game/career/ss_nw.jpg\" alt=\"术士女\"></td>\n</tr>\n<tr>\n<td>药师</td>\n<td align=\"center\"><img src=\"/static/images/game/career/ys_nm.jpg\" alt=\"药师男\"></td>\n<td align=\"center\"><img src=\"/static/images/game/career/ys_nw.jpg\" alt=\"药师女\"></td>\n</tr>\n</tbody></table>\n\n        <h2 id=\"参考资料\">\n            <a href='#参考资料' class='header-anchor'>#</a>\n            <span>参考资料</span>\n        </h2>\n    <p><a href=\"http://ffo.qq.com/new/gameData/zyxt_cxz.htm\">官网职业系统 - 初行者</a></p>\n"},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"职业","link":"/game/career/index.html"},{"title":"战士","link":"/game/career/zs.html"}],"content":"\n        <h1 id=\"战士\">\n            <a href='#战士' class='header-anchor'>#</a>\n            <span>战士</span>\n        </h1>\n    <p>战士是游戏中物理攻击最高的职业，他们自身在无数修罗场中积累形成了野兽般的直觉以及疯狂的战意，有着自己的独特战斗方式。使用的武器是沉重的双手才能挥舞的长枪，配合怒火杀意和战神之枪的战斗技能，对敌人有着一击必杀的实力。此外在血腥的战争中，战士的体魄被锻炼得极为强健，往往你以为这一击足以杀死一头熊，而对于一个强大的战士来说那或许并不是足以致命的打击。所以战士最令人恐惧的地方不仅仅是强大的攻击力，其强健的体魄也是在近距离战斗中所需要的重要素质。</p>\n\n        <h2 id=\"参考资料\">\n            <a href='#参考资料' class='header-anchor'>#</a>\n            <span>参考资料</span>\n        </h2>\n    <p><a href=\"http://ffo.qq.com/new/newerData/zs.htm\">官网职业系统 - 战士</a></p>\n"},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"职业","link":"/game/career/index.html"},{"title":"剑客","link":"/game/career/jk.html"}],"content":"\n        <h1 id=\"剑客\">\n            <a href='#剑客' class='header-anchor'>#</a>\n            <span>剑客</span>\n        </h1>\n    <p>剑客是个令人尊敬的职业，力量、敏捷、灵巧和体质的成长比较均衡，使用的武器是号称兵中王道之器的剑。剑分单手、双手。剑客的力量成长较高，巨大的双手剑，配合剑客的技能狮心和陨星有着惊人的破坏力。剑客也是游戏中唯一可以使用盾牌的角色，所以除了双手剑之外，剑客更多的会选择单手剑和盾牌的配合，灵慧之剑配合厚重盾牌，攻守兼备，这样的剑客即使周旋在大群怪物中仍然游刃有余。</p>\n\n        <h2 id=\"参考资料\">\n            <a href='#参考资料' class='header-anchor'>#</a>\n            <span>参考资料</span>\n        </h2>\n    <p><a href=\"http://ffo.qq.com/new/newerData/jk.htm\">官网职业系统 - 剑客</a></p>\n"},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"职业","link":"/game/career/index.html"},{"title":"刺客","link":"/game/career/ck.html"}],"content":""},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"职业","link":"/game/career/index.html"},{"title":"术士","link":"/game/career/ss.html"}],"content":""},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"职业","link":"/game/career/index.html"},{"title":"药师","link":"/game/career/ys.html"}],"content":""},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"装备","link":"/game/equipment/index.html"}],"content":"\n        <h1 id=\"装备系统\">\n            <a href='#装备系统' class='header-anchor'>#</a>\n            <span>装备系统</span>\n        </h1>\n    "},{"context":[{"title":"1 游戏系统","link":"javascript:void(0)"},{"title":"宠物","link":"/game/pet/index.html"}],"content":"\n        <h1 id=\"宠物系统\">\n            <a href='#宠物系统' class='header-anchor'>#</a>\n            <span>宠物系统</span>\n        </h1>\n    "}];

    var escapeHtml = function (html) {
        let str = html;
        str = str.replace(/&/g, '&amp;');  
        str = str.replace(/</g, '&lt;');  
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#039;');  
        return str;
    }

    var clearHtml = function(html) {
        let str = html;
        str = str.replace(/&amp;/g, ''); 
        str = str.replace(/&lt;/g, ''); 
        str = str.replace(/&gt;/g, '');
        str = str.replace(/&quot;/g, '');
        str = str.replace(/&#039;/g, '');
        return str;
    }

    var randStr = function () {
        return Math.random().toString(36).substr(2);
    };

    var findTitle = function (ele) {
        var findPrevs = function (ele) {
            var children = $(ele).parent().children();
            var prevs = [];
            var findIt = false;
            children = Array.prototype.slice.call(children);
            children.forEach(function (subEle) {
                if ($(subEle).is($(ele))) {
                    findIt = true;
                }
                if (findIt === false && $(subEle).text() != "") {
                    prevs.push(subEle);
                }
            });
            return prevs;
        };

        var findH = function (eles) {
            var _eles = Array.prototype.slice.call(eles);
            _eles.reverse();
            var title = "";
            var id = "";
            _eles.forEach(function (item) {
                if (!title) {
                    if (item.nodeName[0] === "H") {
                        title = $(item).text();
                        id = $(item).attr("id");
                    }
                }
            });
            return {
                text: title,
                id: id
            };
        };
        var prevs = findPrevs(ele);
        if (prevs.length) {
            return findH(prevs);
        }
    };

    window.searchData = function (keyword) {
        var searchResult = [];
        content.forEach(function (item, index) {
            var tempHtml = "<div id='" + randStr() + "'></div>";
            var tempEle = $(tempHtml);
            var findArray = [];
            tempEle.html(clearHtml(item.content));
            findArray = tempEle.find(":contains('" + keyword + "')");
            findArray = Array.prototype.slice.call(findArray);
            if (findArray.length) {
                findArray.forEach(function (ele) {
                    var findContent = $(ele).text();
                    findContent = findContent[0] === "<" ? $(findContent).text() : findContent;
                    findContent = escapeHtml(findContent);
                    findContent = findContent.replace(new RegExp(keyword, 'g'), "<b>" + keyword + "</b>");
                    var hObj = findTitle(ele);
                    if (hObj) {
                        searchResult.push({
                            context: item.context,
                            title: hObj.text,
                            hid: hObj.id,
                            findContent: findContent
                        });
                    }
                });
            }
        });
        return searchResult;
    };
})();