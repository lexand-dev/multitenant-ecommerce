interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { category } = await params;
  return (
    <div>
      <h1>Category Page</h1>
      <p>This is the category page where you can explore various categories.</p>
      {category && (
        <p>
          You are viewing the category: <strong>{category}</strong>
        </p>
      )}
    </div>
  );
};

export default Page;
