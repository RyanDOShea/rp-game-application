var store = require('json-fs-store')('../storage');

const basicErrorCallback = function (err) {
    if(err) throw err;
};

// table insert get update delete

function dataLayer(){

    function getData(key) {
        store.load(key, function (err, object) {
            if (err) throw err;
            return object;
        });
    }

    function setData(key, data) {
        data.id = key;
        store.add(data, basicErrorCallback);
    }

    var publicAPI = {
        get: getData,
        set: setData
    };

    return publicAPI;
}

export {dataLayer};