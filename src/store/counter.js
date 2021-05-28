import {action, computed, makeObservable, observable} from "mobx";

class Counter
{
    count = 0;
    constructor()
    {
        makeObservable( this, {
            count: observable, increment: action, decrement: action
        } );
    }
    increment()
    {
        this.count++;
        console.log( this.count );
    }
    decrement()
    {
        this.count--;
        console.log( this.count );
    }
}
export default new Counter();