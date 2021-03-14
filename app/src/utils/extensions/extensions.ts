import { Model } from 'mongoose'

declare module 'mongoose' {
    interface Model<T> {
        getMaxValueId() : number;
    }
}

Model.prototype.getMaxValueId = function(){
    this.find().sort('-_id').limit(1).exec((err: any,id: number) => {
        if (err) {
            console.log(err)
            throw(err)
        }
        return id;
    })
    
}