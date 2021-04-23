const Filter = ({ categories, handleFilter }) => {
  return (
    <div className="hidden lg:block w-1.5/5">
      <h4>
        <b>Category</b>
      </h4>
      <div className="mt-4">
        {categories.map((item) => {
          return (
            <div className="flex items-center mt-4" key={item}>
              <input
                type="checkbox"
                value={item}
                name={item.toLowerCase()}
                onChange={(e) => handleFilter(e)}
              />
              <h4 className="ml-4">{item}</h4>
            </div>
          );
        })}
      </div>
      <hr className="mt-8 w-4/5" />
      <h4 className="mt-8">
        <b>Price range</b>
      </h4>
      <div className="mt-4">
        <div className="flex items-center mt-4">
          <input type="checkbox" />
          <h4 className="ml-4">Lower than $20</h4>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" />
          <h4 className="ml-4">$20 - $100</h4>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" />
          <h4 className="ml-4">$100 - $200</h4>
        </div>
      </div>
    </div>
  );
};

export default Filter;
