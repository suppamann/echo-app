interface Props{
    children: React.ReactNode
}

export const AuthLayout = ({children}:Props) =>{
    return(
     <div className="flex h-screen justify-center items-center">
        {children}
     </div>
     )
} 