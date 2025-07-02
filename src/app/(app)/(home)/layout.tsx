import { Navbar } from "@/modules/home/ui/components/navbar";
import { Footer } from "@/modules/home/ui/components/footer";
import { SearchFilters } from "@/modules/home/ui/components/search-filters";

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { CustomCategory } from "@/modules/categories/types";
import { Category } from "@/payload-types";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    depth: 1,
    pagination: false,
    collection: "categories",
    where: {
      parent: {
        exists: false
      }
    }
  })

  const filteredData: CustomCategory[] = data.docs.map((item) => (
    {
      ...item,
      subcategories: item.subcategories?.docs?.map((sub) => sub as Category) || []
    }
  ))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={filteredData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
