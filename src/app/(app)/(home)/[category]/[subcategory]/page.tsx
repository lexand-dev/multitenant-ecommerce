interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { subcategory, category } = await params;
  return (
    <div>
      <h1>Category Page</h1>
      <p>This is the category page where you can explore various categories.</p>
      {subcategory && (
        <p>
          You are viewing the category: {category}{" "}
          <strong>{subcategory}</strong>
        </p>
      )}
    </div>
  );
};

export default Page;
