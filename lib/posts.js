import { sortByDate } from '@/utils/index'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const files = fs.readdirSync(path.join('posts'))

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    // console.log(markdownWithMeta);
    return {
      slug,
      frontmatter,
    }
  })

  return posts.sort(sortByDate)
}
