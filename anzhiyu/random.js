var posts=["2025/03/29/有关建分站点的原因于过程/","2025/03/28/视频收藏（长期更新）/","2025/03/28/站点收藏（长期更新）/","2025/03/30/考了计算机三级网络技术/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };