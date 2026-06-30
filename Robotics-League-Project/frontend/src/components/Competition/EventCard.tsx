type Props={
title:string;
children:React.ReactNode;
}

export default function EventCard({
title,
children
}:Props){

return(

<div className="bg-[#181818] border border-zinc-700 rounded-xl p-6 hover:border-red-500 transition duration-300">

<h3 className="text-red-500 uppercase font-bold mb-6">

{title}

</h3>

{children}

</div>

)

}