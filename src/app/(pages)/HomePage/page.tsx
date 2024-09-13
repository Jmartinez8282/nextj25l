import AddButton from "@/app/components/AddButton";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { revalidatePath } from "next/cache";
import React from "react";

interface Post {
  id: number;
  title: string;
  description: string;
}

const HomePage = async () => {
  let result = await fetch("http://localhost:5006/api/Blog/GetPublishedItems");
  let posts: Post[] = await result.json();

  const reload = async () => {
      "use server"
      revalidatePath('/HomePage');
  }

  return (
    <>
    <div className="flex justify-center mt-8">
      <AddButton reload={reload}/>

    </div>
      <div className="grid gap-4 grid-cols-4 mt-8 mx-[1%]">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <h1 className="text-large font-bold">{post.title}</h1>
            </CardHeader>
            <CardBody>{post.description}</CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};
export default HomePage;
