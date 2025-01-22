function User({img,name,desc}){
    return(
        <>
        <div className="w-[400px] flex items-center justify-between mx-auto px-5 py-2 bg-white rounded-lg mt-5">
            <div className="flex items-center gap-4">
               <img src={img} alt="" className="h-14 w-14 rounded-full"/>
        <div className=""> 
            <p className="m-0">{name}</p>
            <p className="text-sm m-0">{desc}</p>
             </div>
        </div>
        <button className="">Follow</button>
        </div>
        </>
    )
}

export default User;