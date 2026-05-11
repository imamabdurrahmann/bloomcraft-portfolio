import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com";
const OWNER = "imamabdurrahmann";
const REPO = "bloomcraft-portfolio";
const BRANCH = "main";
const IMAGES_PATH = "public/images";

export async function POST(request: Request) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 });
  }

  try {
    const { filename } = await request.json();

    if (!filename) {
      return NextResponse.json({ error: "No filename provided" }, { status: 400 });
    }

    const path = `${IMAGES_PATH}/${filename}`;

    // Get file SHA
    const getRes = await fetch(
      `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!getRes.ok) {
      throw new Error("File not found");
    }

    const file = await getRes.json();

    // Delete file
    const deleteRes = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Delete image: ${filename}`,
        sha: file.sha,
        branch: BRANCH,
      }),
    });

    if (!deleteRes.ok) {
      const error = await deleteRes.json();
      throw new Error(error.message || "Failed to delete");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: error.message || "Delete failed" }, { status: 500 });
  }
}