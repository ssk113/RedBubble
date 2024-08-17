// function for reform the product name
const reformName = (values) => {
    if (values.length <= 20) {
        return values;
    }
    let str = "";
    for (let i = 0; i < 20; i++) {
        str += values[i];
    }
    return str + "...";
};


export default reformName