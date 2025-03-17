import { SvgSize } from "../util";
import { getCategorySvg } from "./util";

interface CategoryProps {
  categoryID: number;
  categoryName: string;
  size?: SvgSize;
  className?: string;
}

function Category({
  categoryID,
  size = SvgSize.md,
  className = ''
}: CategoryProps) {
  const CategorySvg = getCategorySvg(categoryID);

  return (
    <CategorySvg
      size={size}
      className={className}
    />
  );
}

export default Category;