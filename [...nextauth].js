export default NextAuth({
 
  providers: [ 
  ],
  callbacks: {
  },
  secret: process.env.JWT_SECRET,
});