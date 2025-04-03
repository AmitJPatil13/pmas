"use server";
import { sql } from "@/lib/neon";

export const saveTeacher = async (teachers: any) => {
  try {
    await sql`insert into teachers (data) values (${teachers})`;
    console.log("Teachers saved successfully:", teachers);
  } catch (error) {
    console.error("Error saving teachers:", error);
  }
};
