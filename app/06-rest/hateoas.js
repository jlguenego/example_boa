function getUrl(req) {
    return `${req.protocol}://${req.hostname}:${req.socket.address().port}${req.baseUrl}`;
}

function addLink(req, object) {
    const result = {
        ...object,
        '_links': {
            rel: 'self',
            uri: `${getUrl(req)}/${object._id}`
        }
    };
    return result;
}


module.exports = {
    addLink,
};
