import { ProductGrid } from "../product";
import { FilterSection } from "./FilterSection";
import { Heading } from "./Heading";

export function LeftPanel() {

 

    return (
      <div>
          <Heading />
          <FilterSection />
          <ProductGrid /> 
      </div>
    );
  }