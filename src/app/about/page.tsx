"use client"

export default function About(){
    return (<>
    <h2 className="m-1 p-1 font-bold text-2xl">About</h2>
    <p className=" m-1 p-1 text-slate-400 flex w-2/3 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolor commodi corporis aliquid? Eligendi iste deserunt, ex accusamus fugiat voluptates repudiandae sint neque, quaerat dolores excepturi veniam cumque odio ullam?</p>
    <p className=" m-1 p-1 text-slate-400 flex w-2/3 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolor commodi corporis aliquid? Eligendi iste deserunt, ex accusamus fugiat voluptates repudiandae sint neque, quaerat dolores excepturi veniam cumque odio ullam?</p>

    <div className=" block m-2 p-2 text-center">
        <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
    </div>

    </>)
}