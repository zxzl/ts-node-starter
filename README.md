## What's included
* nodemon
* ts-node
* [typescript-eslint](https://eslint.org/blog/2019/01/future-typescript-eslint) & prettier & VScode setting
* Debugging Node.js process inside Docker using VScode

## For development
```
docker-compose up
```
## For staging
```sh
docker-compose -f docker-compose.yml -f docker-compose.production.yml up
```

## Thanks to 
* https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change
* https://github.com/Microsoft/vscode-recipes/tree/master/Docker-TypeScript
* https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
* https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a
