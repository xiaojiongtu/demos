发现用for循环和$.each如果都写this的话，获取到的值是不一样的，for循环获取到的是window对象，结果发现是作用域的问题，但是不知道为何$,each的this指的是返回数组里面的值。

http://upload-images.jianshu.io/upload_images/5572128-0f5ffec681a84d52.gif?imageMogr2/auto-orient/strip
