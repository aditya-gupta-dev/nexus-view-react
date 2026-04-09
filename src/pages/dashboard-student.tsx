import { WhenLoggedIn } from "@/components/auth/show";

export default function DashboardStudentPage() {
    return ( 
        <WhenLoggedIn>
            <h1>Dashboard</h1>
        </WhenLoggedIn>
    ); 
} 