//// [awaitForStatement2.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var p: Promise<number>;
async function func(): Promise<void> {
    "before";
    for (var i = await p; i < 1; i++) {
        "body";
    }
    "after";
}


//// [awaitForStatement2.js]
function func() {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            switch (_state.label) {
                case 0:
                    "before";
                    return ["yield", p];
                case 1:
                    for (i = _state.sent; i < 1; i++) {
                        "body";
                    }
                    "after";
                    return ["return"];
            }
        })));
    });
    var i;
}
