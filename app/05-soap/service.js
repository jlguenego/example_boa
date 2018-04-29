
module.exports = {
    xxService: {
        JLGSplitterServiceSoapPort: {
            JLGSplitter: splitter_function
        }
    }
};

// the splitter function, used by the service
function splitter_function(args) {
    console.log('splitter_function');
    var splitter = args.splitter;
    var splitted_msg = args.message.split(splitter);
    var result = [];
    for (var i = 0; i < splitted_msg.length; i++) {
        result.push(splitted_msg[i]);
    }
    return {
        result: result
    }
}
