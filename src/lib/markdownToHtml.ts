import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  // sanitize: false is unsafe in most cases but here we control the md documents 
  const result = await remark().use(html, {sanitize: false}).process(markdown);
  return result.toString();
}
