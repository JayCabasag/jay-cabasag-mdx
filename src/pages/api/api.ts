import path from "path"
import fs from 'fs'
import matter from "gray-matter"
import { Blog } from "@/utils/interface"

const BLOGS_PATH = path.join(process.cwd(), "blogs")

export const getSlugs = (): string[] => {
    const filePaths = fs.readdirSync(BLOGS_PATH);
    const fileNames = filePaths.map(path => {
      const parts = path.split("/")
      const fileName = parts[parts.length - 1]
      const [slug, _ext] = fileName.split(".")
      return slug
    })
    return fileNames
}

export const getBlogFromSlug = (slug: string):Blog => {
    
    const blogPath = path.join(BLOGS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(blogPath)
    const { content, data } = matter(source)
    const blog = { meta: 
        {
            excerpt: data.excerpt ?? '',
            title: data.title ?? slug,
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date()).toString(),
            slug
        }
        , content } as Blog
    return blog
}

export const getAllBlogs = () => {
    const posts = getSlugs().map(slug => (getBlogFromSlug(slug)) ?? []).sort((a, b) => {
        if (a.meta.date > b.meta.date) return 1
        if (a.meta.date < b.meta.date) return -1
        return 0
    }).reverse()
    return posts;
}