import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com";
const OWNER = "imamabdurrahmann";
const REPO = "bloomcraft-portfolio";
const BRANCH = "main";
const IMAGES_PATH = "public/images";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
  }

  try {
    // Get current contents
    const res = await fetch(
      `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${IMAGES_PATH}?ref=${BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json([]);
      }
      throw new Error("Failed to fetch files");
    }

    const files = await res.json();
    const photos = files
      .filter((f: any) => f.type === "file" && /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name))
      .map((f: any) => ({
        name: f.name,
        path: `/images/${f.name}`,
        sha: f.sha,
      }));

    return NextResponse.json(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);
    return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 });
  }
}