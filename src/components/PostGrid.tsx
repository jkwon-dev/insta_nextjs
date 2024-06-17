import GridSpinner from "./ui/GridSippner";
import PostGirdCard from "./PostGirdCard";
import usePosts from "@/hooks/posts";

export default function PostGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <div className="w-full text-center">
      {isLoading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGirdCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
