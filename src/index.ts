import Koa from 'koa'
const app = new Koa()

let count = 1

app.use(async ctx => {
    console.log(count++)
    ctx.body = `Hello World Europe ${count}`
})

app.listen(3000)
