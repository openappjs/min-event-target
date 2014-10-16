module.exports = removeEventListener

function removeEventListener(type, listener) {
    var target = this

    if (!target.listeners) {
        return
    }

    if (!target.listeners[type]) {
        return
    }

    var list = target.listeners[type]
    var index = list.indexOf(listener)
    if (index !== -1) {
        list.splice(index, 1)
    }
}
