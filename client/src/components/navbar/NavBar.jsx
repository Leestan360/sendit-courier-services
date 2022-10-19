const NavBar = () => {
    return ( 
        <div className="flex justify-between items-center text-slate-800 shadow p-2">
            <div>
                <h1 className="font-open text-2xl">Send IT</h1>
            </div>
            <div className="flex items-center">
                <img src={process.env.PUBLIC_URL + "/user-img.jpg"} alt="" className="max-w-[40px] rounded-full" />
                <h3 className="hidden md:block font-open mx-5">Jane Mwangi</h3>
            </div>
        </div>
     );
}
 
export default NavBar;