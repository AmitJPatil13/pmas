// File: app/page.tsx
import { neon } from "@neondatabase/serverless";

export default function Page() {
  async function create(formData: FormData) {
    "use server";
    // Connect to the Neon database
    const sql = neon(`${process.env.NEON_KEY!}`);
    const comment = formData.get("comment");
    // Insert the comment from the form into the Postgres database
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
  }

  return (
    <form
      className="bg-white w-full h-screen flex justify-center items-center"
      action={create}
    >
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
