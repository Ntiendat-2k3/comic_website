// app/truyen-tranh/[slug]/route-segment-config.ts
export const dynamicParams = true;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return []; // Trả về mảng rỗng nếu không cần generate tĩnh
}