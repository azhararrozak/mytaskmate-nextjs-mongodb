export { default } from "next-auth/middleware";

export const config = { 
    matcher: [
        // pages that require authentication
        "/dashboard", 
        "/add-task", 
        "/edit-task",

        //API routes that require authentication
        "/api/tasks",
        "/api/tasks/[id]",
    ] 
};
