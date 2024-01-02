import { fullBlog } from "@/app/lib/interface";
import { client, imageFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
export const revalidate = 30; //revalidate fetch call ever 30s
async function getData(slug: string) {
  const query = `*[_type=='blog'&&slug.current=='${slug}' ]
{
"currentSlug": slug.current,
  title,
  titleImage,
  content
}[0]
`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);
  return (
    <div className="mt-8">
      <h1>
        <span className="block text-center text-base text-primary font-semibold tracking-wide uppercase">
          Varun - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold">
          {data.title}
        </span>
      </h1>
      <Image
        src={imageFor(data.titleImage).toString()}
        alt="image"
        width={800}
        height={800}
        priority
        className="rounded mt-8 border"
      />
      <div className="mt-16 prose prose-lg prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
