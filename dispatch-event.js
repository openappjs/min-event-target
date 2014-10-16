module.exports = dispatchEvent

function dispatchEvent(ev) {
    var target = this
    var type = ev.type

    if (!ev.target) {
        ev.target = target
    }

    if (!target.listeners) {
        target.listeners = {}
    }

    var listeners = target.listeners[type]

    if (listeners) {
        return listeners.forEach(function (listener) {
            ev.currentTarget = target
            if (typeof listener === 'function') {
                listener(ev)
            } else {
                listener.handleEvent(ev)
            }
        })
    }

    if (target.parentNode) {
        target.parentNode.dispatchEvent(ev)
    }
}
