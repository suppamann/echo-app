import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    };

    const orgId = identity.orgId as string;
    if(!orgId){
      throw new Error("Missing Organization");
    }
    throw new Error("Error test")
    const userId = await ctx.db.insert("users",{
      name:"Achu Abhi"
    })
    return userId;
  },
});
