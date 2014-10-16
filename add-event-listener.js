module.exports = addEventListener

function addEventListener(type, listener) {
    var target = this

    if (!target.listeners) {
        target.listeners = {}
    }

    if (!target.listeners[type]) {
        target.listeners[type] = []
    }

    if (target.listeners[type].indexOf(listener) === -1) {
        target.listeners[type].push(listener)
    }
}
