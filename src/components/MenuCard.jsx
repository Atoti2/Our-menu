const MenuCard = ({ item }) => {
    return (
      <div className="card card-compact bg-base-100 w-96 shadow-xl font-mono">
        <figure className="h-56">
          <img src={`../images/${item.img}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-slate-100">
            {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
          </h2>
          <p className="bg-slate-100 w-fit p-2 text-slate-900 rounded-md hover:bg-slate-200 cursor-pointer">
            {item.category}
          </p>
          <p className="my-3 text-justify">{item.desc}</p>
          <div className="card-actions justify-end items-center">
            <p className="font-bold text-xl text-slate-100">{item.price} $</p>
            <button className="btn text-xl btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };

export default MenuCard