interface Props{
    children: React.ReactNode
}

export default function Layout({children}:Props){
    return(
     <div className="flex h-screen justify-center items-center">
        {children}
     </div>
     )
}