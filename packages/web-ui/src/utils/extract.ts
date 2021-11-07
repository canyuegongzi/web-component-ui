/**
 * 庫歐戰屬性
 * @param props
 * @param prop
 */
function extract(props: any, prop: any) {
    if (typeof prop === 'string') {
        if (props.hasOwnProperty(prop)) {
            return { [prop]: props[prop] };
        }
    } else {
        const res = {};
        prop.forEach(key => {
            if (props.hasOwnProperty(key)) {
                res[key] = props[key];
            }
        });
        return res;
    }
}

export { extract };
