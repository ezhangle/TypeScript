//// [awaitObjectLiteral2.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var p: Promise<number>;
async function func(): Promise<void> {
    var o = {
        a: await p,
        b: a,
        c: 1
    };
}

//// [awaitObjectLiteral2.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            switch (_state.label) {
                case 0:
                    return ["yield", p];
                case 1:
                    o = {
                        a: _state.sent,
                        b: a,
                        c: 1
                    };
                    return ["return"];
            }
        })));
    });
    var o;
}
