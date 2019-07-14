# typescript mongodb starter

typescript mongodb 学习例子。

## docker

使用 docker 来安装 mongodb。

## mongodb

```zsh
docker pull mongo
docker run --name my_mongo -p 27017:27017 -v $PWD/db:/data/db -d mongo
```

## 参考文章

- https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/
