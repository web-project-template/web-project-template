function getQuery(name) {
    var query = window.location.search.substring(1)
    var lets = query.split('&')

    var obj = {};
    for (var i = 0; i < lets.length; i++) {
        var pair = lets[i].split('=')
        obj[pair[0]] = pair[1];
    }

    if (name) {
        return obj[name];
    }

    return obj;
}