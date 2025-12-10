// //middleware file to protect routes

// export { default } from 'next-auth/middleware';
// export const config = {
//     // *: zero or more 
//     // +: one or more
//     // ?: zero or one
//     matcher: ['/dashboard/:path*']
// };

import { withAuth } from 'next-auth/middleware';

export default withAuth({
    callbacks: {
        authorized: ({ token }) => !!token
    }
});

export const config = {
    matcher: ['/dashboard/:path*']
};