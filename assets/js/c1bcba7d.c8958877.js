"use strict";(self.webpackChunksrs_docs=self.webpackChunksrs_docs||[]).push([[151],{448:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"SRS-in-Security","metadata":{"permalink":"/srs-docs/blog/SRS-in-Security","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-11-20-SRS-in-Security.md","source":"@site/blog/2021-11-20-SRS-in-Security.md","title":"SRS \u5728\u5b89\u9632\u4e2d\u7684\u5e94\u7528","description":"\u5b89\u9632\u9886\u57df\u662f\u97f3\u89c6\u9891\u7684\u5782\u76f4\u7ec6\u5206\u884c\u4e1a\u4e2d\u5e9e\u5927\u7684\u5e02\u573a\u4e4b\u4e00\uff0c\u5b89\u9632\u4e5f\u662f\u7269\u8054\u7f51\u7684\u5e94\u7528\u9886\u57df\u4e4b\u4e00\uff0c\u5404\u79cd\u5d4c\u5165\u5f0f\u7684\u6444\u50cf\u5934\u6b63\u5728\u548c\u4e92\u8054\u7f51\u4ea7\u751f\u8fde\u63a5\uff0cSRS\u662f\u5176\u4e2d\u5173\u952e\u7684\u4e00\u73af\uff0c\u5b9e\u73b0\u4e86GB28181\u63a5\u5165\uff0c\u8f6c\u6362\u6210\u4e92\u8054\u7f51\u76f4\u64ad\u548cWebRTC\u534f\u8bae\uff0c\u9648\u6d77\u535a\u662fSRS\u6280\u672f\u59d4\u5458TOC\u6210\u5458\uff0c\u5728\u5b89\u9632\u9886\u57df\u6709\u591a\u5e74\u7684\u4e30\u5bcc\u7684\u5de5\u4f5c\u7ecf\u9a8c\uff0c\u901a\u8fc7\u8fd9\u6b21\u5206\u4eab\u53ef\u4ee5\u8be6\u7ec6\u4e86\u89e3\u5b89\u9632\u7684\u97f3\u89c6\u9891\u548c\u4e92\u8054\u7f51\u7684\u5dee\u522b\uff0cSRS\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff0c\u5b89\u9632\u9886\u57df\u8981\u89e3\u51b3\u7684\u5173\u952e\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u54ea\u4e9b\u95ee\u9898\u4e0d\u80fd\u4f7f\u7528SRS\u89e3\u51b3\uff0cSRS\u672a\u6765\u5bf9\u5b89\u9632\u7684\u652f\u6301\u7684\u65b9\u5411\u662f\u4ec0\u4e48\u3002","date":"2021-11-20T00:00:00.000Z","formattedDate":"November 20, 2021","tags":[{"label":"\u89c6\u9891","permalink":"/srs-docs/blog/tags/\u89c6\u9891"}],"readingTime":0.95,"truncated":false,"authors":[{"name":"\u9648\u6d77\u535a","url":"https://space.bilibili.com/430256302?spm_id_from=333.788.b_765f7570696e666f.2"}],"nextItem":{"title":"\u6280\u672f\u89e3\u7801 | SRT\u548cRIST\u534f\u8bae\u7efc\u8ff0","permalink":"/srs-docs/blog/SRT-adn-RIST-preview"}},"content":"\u5b89\u9632\u9886\u57df\u662f\u97f3\u89c6\u9891\u7684\u5782\u76f4\u7ec6\u5206\u884c\u4e1a\u4e2d\u5e9e\u5927\u7684\u5e02\u573a\u4e4b\u4e00\uff0c\u5b89\u9632\u4e5f\u662f\u7269\u8054\u7f51\u7684\u5e94\u7528\u9886\u57df\u4e4b\u4e00\uff0c\u5404\u79cd\u5d4c\u5165\u5f0f\u7684\u6444\u50cf\u5934\u6b63\u5728\u548c\u4e92\u8054\u7f51\u4ea7\u751f\u8fde\u63a5\uff0cSRS\u662f\u5176\u4e2d\u5173\u952e\u7684\u4e00\u73af\uff0c\u5b9e\u73b0\u4e86GB28181\u63a5\u5165\uff0c\u8f6c\u6362\u6210\u4e92\u8054\u7f51\u76f4\u64ad\u548cWebRTC\u534f\u8bae\uff0c\u9648\u6d77\u535a\u662fSRS\u6280\u672f\u59d4\u5458TOC\u6210\u5458\uff0c\u5728\u5b89\u9632\u9886\u57df\u6709\u591a\u5e74\u7684\u4e30\u5bcc\u7684\u5de5\u4f5c\u7ecf\u9a8c\uff0c\u901a\u8fc7\u8fd9\u6b21\u5206\u4eab\u53ef\u4ee5\u8be6\u7ec6\u4e86\u89e3\u5b89\u9632\u7684\u97f3\u89c6\u9891\u548c\u4e92\u8054\u7f51\u7684\u5dee\u522b\uff0cSRS\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff0c\u5b89\u9632\u9886\u57df\u8981\u89e3\u51b3\u7684\u5173\u952e\u95ee\u9898\u662f\u4ec0\u4e48\uff0c\u54ea\u4e9b\u95ee\u9898\u4e0d\u80fd\u4f7f\u7528SRS\u89e3\u51b3\uff0cSRS\u672a\u6765\u5bf9\u5b89\u9632\u7684\u652f\u6301\u7684\u65b9\u5411\u662f\u4ec0\u4e48\u3002\\n\\n[\u89c2\u770b\u89c6\u9891](https://www.bilibili.com/video/BV11S4y197Zx)"},{"id":"SRT-adn-RIST-preview","metadata":{"permalink":"/srs-docs/blog/SRT-adn-RIST-preview","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-09-18-SRT-adn-RIST-preview.md","source":"@site/blog/2021-09-18-SRT-adn-RIST-preview.md","title":"\u6280\u672f\u89e3\u7801 | SRT\u548cRIST\u534f\u8bae\u7efc\u8ff0","description":"SRS 4.0\u652f\u6301\u4e86SRT\u63a8\u6d41\u3002\u5728\u76f4\u64ad\u63a8\u6d41\u9886\u57df\uff0cSRT\u65e0\u7591\u662f\u6700\u6709\u5e0c\u671b\u66ff\u4ee3RTMP\u7684\u534f\u8bae\uff1b\u817e\u8baf\u4e91\u652f\u6301SRT\u63a8\u6d41\u540e\uff0c\u5ba2\u6237\u53cd\u9988\u7597\u6548\u4e0d\u9519\u3002\u8fd9\u7bc7\u6587\u7ae0\u91cd\u70b9\u4ecb\u7ecdSRT\u7684\u529f\u80fd\u7279\u6027\u3001\u9002\u7528\u7684\u573a\u666f\u4ee5\u53ca\u540e\u7eed\u6539\u8fdb\u63d0\u5347\u7684\u65b9\u5411\uff0c\u5e76\u7b80\u8981\u4ecb\u7ecd\u4e0bRIST\u534f\u8bae\u3002","date":"2021-09-18T00:00:00.000Z","formattedDate":"September 18, 2021","tags":[{"label":"\u6587\u7ae0","permalink":"/srs-docs/blog/tags/\u6587\u7ae0"}],"readingTime":0.45,"truncated":false,"authors":[{"name":"\u817e\u8baf\u4e91\u97f3\u89c6\u9891","title":"\u817e\u8baf\u4e91\u97f3\u89c6\u9891","url":"https://cloud.tencent.com/","imageURL":"https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIzMjY3MjYyOA==&mid=2247502103&idx=1&sn=6c2cc942513c4f14773fabff40a367e4&send_time=","key":"TencentCloud"}],"prevItem":{"title":"SRS \u5728\u5b89\u9632\u4e2d\u7684\u5e94\u7528","permalink":"/srs-docs/blog/SRS-in-Security"}},"content":"SRS 4.0\u652f\u6301\u4e86SRT\u63a8\u6d41\u3002\u5728\u76f4\u64ad\u63a8\u6d41\u9886\u57df\uff0cSRT\u65e0\u7591\u662f\u6700\u6709\u5e0c\u671b\u66ff\u4ee3RTMP\u7684\u534f\u8bae\uff1b\u817e\u8baf\u4e91\u652f\u6301SRT\u63a8\u6d41\u540e\uff0c\u5ba2\u6237\u53cd\u9988\u7597\u6548\u4e0d\u9519\u3002\u8fd9\u7bc7\u6587\u7ae0\u91cd\u70b9\u4ecb\u7ecdSRT\u7684\u529f\u80fd\u7279\u6027\u3001\u9002\u7528\u7684\u573a\u666f\u4ee5\u53ca\u540e\u7eed\u6539\u8fdb\u63d0\u5347\u7684\u65b9\u5411\uff0c\u5e76\u7b80\u8981\u4ecb\u7ecd\u4e0bRIST\u534f\u8bae\u3002\\n\\n[\u9605\u8bfb\u5168\u6587](https://mp.weixin.qq.com/s?__biz=MzIzMjY3MjYyOA%3D%3D&mid=2247502103&idx=1&sn=6c2cc942513c4f14773fabff40a367e4&scene=45#wechat_redirect)"}]}')}}]);