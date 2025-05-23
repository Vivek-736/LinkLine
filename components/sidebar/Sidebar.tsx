import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import Mobilefooter from "./Mobilefooter";

async function Sidebar({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    return (
        <div className='h-full'>
            <Mobilefooter />
            <DesktopSidebar currentUser={currentUser!} />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;
