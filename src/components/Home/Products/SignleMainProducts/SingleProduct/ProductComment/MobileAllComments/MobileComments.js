import { useEffect } from "react";


const MobileAllComments = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
        });
      }, []);
      
    return(
        <main className="w-full py-10 flex items-center md:hidden px-4">
            Mobile Commnet
        </main>
    )
}

export default MobileAllComments