export interface Blog {
    meta: BlogMeta
    content: string
}

export interface BlogMeta {
    excerpt: string
    slug: string
    title: string
    tags: string[]
    date: string
}
