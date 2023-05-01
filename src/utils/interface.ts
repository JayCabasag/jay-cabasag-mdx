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

export interface AboutMe {
    meta: AboutMeMeta
    content: string
}

export interface AboutMeMeta {
    excerpt: string
    title: string
    date: string
}

export interface HomeHeader {
    meta: HomeHeaderMeta
    content: string
}

export interface HomeHeaderMeta {
    excerpt: string
    title: string
    date: string
}

export interface HomeBody {
    meta: HomeBodyMeta
    content: string
}

export interface HomeBodyMeta {
    excerpt: string
    title: string
    date: string
}

