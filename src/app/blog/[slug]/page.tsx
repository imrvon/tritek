import BlogPost from '../components/BlogPost/BlogPost'

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <BlogPost params={{ slug: params.slug }} />
    </div>
  )
}
