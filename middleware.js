export { default } from "next-auth/middleware";

export const config = { 
    matcher: [
        // pages that require authentication
        "/dashboard", 
        "/edit-task",
        "/add-task/:path*", 

        //API routes that require authentication
        "/api/tasks/:path*",

    ] 
};
