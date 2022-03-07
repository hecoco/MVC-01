import $ from "jquery"

const eventBus = $(window)//on监听 trigger触发
//数据 M
const m = {
    data: {
        n: parseInt(localStorage.getItem('n')),
    },
    update(data) {
        Object.assign(m.data, data)//将c的n 穿到m.data.n里面
        eventBus.trigger('m:updated')//触发
        localStorage.setItem("n", m.data.n.toString())
        console.log('2');
    }
}
//视图 V
//所有的视图就是把页面渲染一下
const v = {
    el: null,
    html: `<div>
    <div class="output"><span id="number">{{n}}</span></div>
    <div class="actions">
        <button class="add1">+1</button>
        <button class="minus1">-1</button>
        <button class="mul2">*2</button>
        <button class="divide2">/2</button>
    </div>
</div>`,
    init(container) {
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html.replace('{{n}}', n))
            .appendTo(v.el)
    }
}
//其他 C
const c = {
    init(container) {
        v.init(container)
        v.render(m.data.n)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {//eventBus监听
            v.render(m.data.n)
            console.log('1');
        })
    },
    events: {
        'click .add1': 'add',
        'click .minus1': 'minus',
        'click .mul2': 'mul',
        'click .divide2': 'div'
    },
    add() {
        m.update({ n: m.data.n + 1 })
    },
    minus() {
        m.update({ n: m.data.n + 1 })
    },
    mul() {
        m.update({ n: m.data.n * 2 })
    },
    div() {
        m.update({ n: m.data.n / 2 })
    },
    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            // console.log(part1, part2, value)
            v.el.on(part1, part2, value)
            //监听事件  jquery函数
            //参数1：事件类型，
            //参数2：触发事件的元素，
            //参数3：事件被触发执行的函数
        }
    }
}

export default c
