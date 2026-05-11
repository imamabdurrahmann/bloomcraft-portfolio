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
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const content = base64;

    // Sanitize filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
    const filename = `${timestamp}-${originalName}`;
    const path = `${IMAGES_PATH}/${filename}`;

    // Check if file exists (get SHA)
    const checkRes = await fetch(
      `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    let sha: string | undefined;
    if (checkRes.ok) {
      const existing = await checkRes.json();
      sha = existing.sha;
    }

    // Create or update file
    const createRes = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${path}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Upload image: ${filename}`,
        content,
        branch: BRANCH,
        ...(sha ? { sha } : {}),
      }),
    });

    if (!createRes.ok) {
      const error = await createRes.json();
      throw new Error(error.message || "Failed to upload");
    }

    return NextResponse.json({ success: true, filename });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}