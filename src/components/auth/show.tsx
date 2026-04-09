import { useAuth } from "@/context/auth-context";
import type React from "react";
import { Navigate } from "react-router-dom";

export function WhenLoggedIn({ children }: { children: React.ReactNode }) {
    const user = useAuth();

    return (
        user ? children : <Navigate to={'/'}/>
    )
}

export function WhenLoggedOut({ children }: { children: React.ReactNode }) {
    const user = useAuth();

    return (
        !user ? children : <Navigate to={'/'}/>
    )
}
