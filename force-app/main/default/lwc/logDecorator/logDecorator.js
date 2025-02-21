export function logMethod(target,name,descriptor){
    let originalMethod = descriptor.value;
    descriptor.value =  async function (...args){
        console.log(`Starting `);
                 let result = originalMethod.apply(this,args);
        console.log(`Completed ${name}`);
        return result;
    }

    return descriptor;
}

export function logProperty(target,name){
    let value = target[name];
        console.log(`Property with value  added`);
        Object.defineProperty(target,name,{
            configurable:true,
            enumerable:true,
            get:function(){
                console.log(`Getter called`);
                return value;
            },
            set:function(newValue){
                console.log(`Setter called`);
                value = newValue;
            }
        });
}