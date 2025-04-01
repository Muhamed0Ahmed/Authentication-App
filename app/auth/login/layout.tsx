


const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return(
        <main className="h-full flex  flex-col justify-center items-center
        bg-gradient-to-l  from-sky-300 to-green-800">
        
        {children}
        </main>

    )
}
export default AuthLayout