import path from "path"
import fs from 'fs'
import matter from "gray-matter"
import { AboutMe, AboutMeMeta, Blog, HomeBody, HomeHeader } from "@/utils/interface"

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

const ABOUT_ME_PATH = path.join(process.cwd(), "jaycabasag")

export const getAboutMe = ():AboutMe => {
    const aboutMePath = path.join(ABOUT_ME_PATH, 'about-me.mdx')
    const source = fs.readFileSync(aboutMePath)
    const { content, data } = matter(source)
    const aboutMe = {
      meta: {
        excerpt: (data.excerpt) ?? '', 
        title: (data.title) ?? '',
        date: ((data.date) ?? new Date()).toString()
      },
      content
    }
    return aboutMe
}

export const getHomeHeader = (): HomeHeader => {
    const homeHeaderPath = path.join(ABOUT_ME_PATH, 'home-header.mdx')
    const source = fs.readFileSync(homeHeaderPath)
    const { content, data } = matter(source)
    const homeHeader = {
        meta: {
            excerpt: (data.excerpt) ?? '', 
            title: (data.title) ?? '',
            date: ((data.date) ?? new Date()).toString()
        },
        content
    }
    return homeHeader
}

export const getHomeBody = (): HomeBody => {
    const homeBodyPath = path.join(ABOUT_ME_PATH, 'home-body.mdx')
    const source = fs.readFileSync(homeBodyPath)
    const { content, data } = matter(source)
    const homeBody = {
        meta: {
            excerpt: (data.excerpt) ?? '', 
            title: (data.title) ?? '',
            date: ((data.date) ?? new Date()).toString()
        },
        content
    }
    return homeBody
}