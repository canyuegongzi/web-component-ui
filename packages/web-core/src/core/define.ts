import { CustomWebComponent } from './CustomWebComponent';
import options from '../webOptions';

const storeHelpers = [ 'use', 'useSelf' ];

export function define(name: string, ctor: any, config?: any) {
    if (customElements.get(name)) {
        return;
    }
    if (options.mapping[name]) {
        return;
    }
    if (ctor.is === 'CustomWebComponent') {
        customElements.define(name, ctor);
        options.mapping[name] = ctor;
    } else {
        if (typeof config === 'string') {
            config = { css: config };
        } else {
            config = config || {};
        }

        class Ele extends CustomWebComponent {
            static css = config.css

            static propTypes = config.propTypes

            static defaultProps = config.defaultProps

            static isLightDom = config.isLightDom

            compute = config.compute

            render() {
                return ctor.call(this, this);
            }
        }

        for (const key in config) {
            if (typeof config[key] === 'function') {
                (Ele as any).prototype[key] = function() {
                    return config[key].apply(this, arguments);
                };
            }
        }
        storeHelpers.forEach(func => {
            if (config[func] && config[func] !== 'function') {
                (Ele as any).prototype[func] = function() {
                    return config[func];
                };
            }
        });
        customElements.define(name, Ele);
        options.mapping[name] = Ele;
    }
}
