import fs from "fs";
import path from "path";

export default function Page() {
  const filePath = path.join(process.cwd(), "index.html");
  let htmlContent = fs.readFileSync(filePath, "utf8");

  // Extract body content inside <body>...</body>
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : htmlContent;

  return (
    <>
      <link rel="stylesheet" href="/style.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <script src="/script.js" defer />
    </>
  );
}
