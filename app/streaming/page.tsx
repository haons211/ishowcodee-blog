import CommentList from "@/streaming/CommentList";
import { Suspense } from "react";
export default function BlogPage() {
  return (
    <main>
        <div>List of Comments</div>
        <Suspense fallback={<div>Loading comments...</div>}>
            <CommentList />
        </Suspense>
    </main>
  );
}