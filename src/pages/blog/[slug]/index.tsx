import React from 'react'
import { getBlogFromSlug, getSlugs } from '@/pages/api/api'
import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize' 
import { BlogMeta } from '@/utils/interface'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeMinifyAttributeWhitespace from 'rehype-minify-attribute-whitespace'
import "highlight.js/styles/dark.css"
import Head from 'next/head'

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
  meta: BlogMeta
}

interface BlogpageProps {
  blog: MDXPost
}

export default function BlogPage({ blog }: BlogpageProps) {
  return (
    <>
    <Head>
      <title>Blogs - Jay Cabasag</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='container max-w-3xl'>
      <h1 className='text-3xl font-bold'>{blog.meta.title}</h1>
      <div className='text-xs'>
        <MDXRemote {...blog.source} components={{ Image }}/>
      </div>
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ( { params }) => {
  const { slug } = params as { slug: string } ?? ''
  const { content, meta } = getBlogFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
        rehypeMinifyAttributeWhitespace
      ]
    }
  })

  return {
    props: {
      blog: { source: mdxSource, meta }
    }
  }
}

export const getStaticPaths = () => {
  const paths = getSlugs().map(slug => ({ params: { slug: slug } }))
  return {
    paths: paths,
    fallback: false
  }
}
