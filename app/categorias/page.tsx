import Nav from "../shared/components/nav";
import CategoryCard from "./CategoryCard";

export default function Categorias() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </>
  );
}
